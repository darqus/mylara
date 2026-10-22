import { beforeEach, describe, expect, it, vi } from 'vitest'

const storageMock = vi.hoisted(() => ({
  deleteObject: vi.fn(),
  getDownloadURL: vi.fn(),
  ref: vi.fn((_storage: unknown, path: string) => ({ path })),
  uploadBytes: vi.fn(),
  uploadBytesResumable: vi.fn(),
}))

vi.mock('firebase/storage', () => storageMock)

const getFirebaseStorageMock = vi.hoisted(() =>
  vi.fn<() => object | null>(() => ({}))
)

vi.mock('@/services/firebase', () => ({
  getFirebaseStorage: getFirebaseStorageMock,
}))

const { FirebaseStorageService } = await import('./firebase-storage.service')

function createFile(name = 'photo.png', size = 2048, type = 'image/png'): File {
  const file = new File(['x'.repeat(1)], name, { type })

  Object.defineProperty(file, 'size', { value: size })

  return file
}

/**
 * Builds an `uploadBytesResumable` fake that drives the given progress states
 * and finishes successfully.
 */
function resumableTask(states: Array<{ transferred: number; total: number }>) {
  const snapshot = { ref: { path: 'images/file.png' } }

  return {
    snapshot,
    on: (
      _event: string,
      onProgress: (snap: object) => void,
      _onError: (err: unknown) => void,
      onComplete: () => void
    ) => {
      states.forEach(({ transferred, total }) => {
        onProgress({
          bytesTransferred: transferred,
          totalBytes: total,
          ref: snapshot.ref,
        })
      })
      onComplete()
    },
  }
}

describe('FirebaseStorageService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    getFirebaseStorageMock.mockReturnValue({})
    process.env.VITE_FIREBASE_STORAGE_BUCKET = 'test-bucket'
  })

  it('throws when Firebase Storage is not initialized', () => {
    getFirebaseStorageMock.mockReturnValue(null)

    expect(() => new FirebaseStorageService()).toThrow(
      'Firebase Storage not initialized'
    )
  })

  describe('uploadImageWithProgress', () => {
    it('reports real progress values from Firebase', async () => {
      storageMock.uploadBytesResumable.mockReturnValue(
        resumableTask([
          { transferred: 0, total: 1000 },
          { transferred: 250, total: 1000 },
          { transferred: 1000, total: 1000 },
        ])
      )
      storageMock.getDownloadURL.mockResolvedValue('https://cdn/file.png')

      const onProgress = vi.fn()
      const service = new FirebaseStorageService()
      const result = await service.uploadImageWithProgress(
        createFile(),
        {},
        onProgress
      )

      expect(result).toEqual({ url: 'https://cdn/file.png' })
      expect(onProgress.mock.calls.map(([progress]) => progress)).toEqual([
        { percentage: 0, bytesTransferred: 0, totalBytes: 1000 },
        { percentage: 25, bytesTransferred: 250, totalBytes: 1000 },
        { percentage: 100, bytesTransferred: 1000, totalBytes: 1000 },
      ])
    })

    it('does not fail without a progress callback', async () => {
      storageMock.uploadBytesResumable.mockReturnValue(
        resumableTask([{ transferred: 10, total: 10 }])
      )
      storageMock.getDownloadURL.mockResolvedValue('https://cdn/file.png')

      const service = new FirebaseStorageService()
      const result = await service.uploadImageWithProgress(createFile())

      expect(result).toEqual({ url: 'https://cdn/file.png' })
    })

    it('rejects invalid files before touching Firebase', async () => {
      const service = new FirebaseStorageService()
      const result = await service.uploadImageWithProgress(
        createFile('doc.pdf', 2048, 'application/pdf')
      )

      expect(result.error).toContain('Неподдерживаемый тип файла')
      expect(storageMock.uploadBytesResumable).not.toHaveBeenCalled()
    })

    it('enforces the size limit', async () => {
      const service = new FirebaseStorageService()
      const result = await service.uploadImageWithProgress(
        createFile('big.png', 6 * 1024 * 1024),
        { maxSizeKB: 5000 }
      )

      expect(result.error).toContain('Размер файла слишком большой')
    })

    it('maps upload errors to a user-facing message', async () => {
      storageMock.uploadBytesResumable.mockReturnValue({
        snapshot: { ref: {} },
        on: (
          _event: string,
          _onProgress: unknown,
          onError: (err: unknown) => void
        ) => onError(new Error('boom')),
      })

      const service = new FirebaseStorageService()
      const result = await service.uploadImageWithProgress(createFile())

      expect(result).toEqual({ error: 'Ошибка при загрузке изображения' })
    })
  })

  describe('uploadImage', () => {
    it('uploads to the configured path and returns the download URL', async () => {
      storageMock.uploadBytes.mockResolvedValue({
        ref: { path: 'products/file.png' },
      })
      storageMock.getDownloadURL.mockResolvedValue('https://cdn/file.png')

      const service = new FirebaseStorageService()
      const result = await service.uploadImage(createFile(), {
        path: 'products',
        filename: 'file.png',
      })

      expect(result).toEqual({ url: 'https://cdn/file.png' })
      expect(storageMock.uploadBytes).toHaveBeenCalledWith(
        { path: 'products/file.png' },
        expect.any(File)
      )
    })
  })

  describe('deleteImageByUrl', () => {
    it('extracts the object path from a Firebase Storage URL', async () => {
      storageMock.deleteObject.mockResolvedValue(undefined)

      const service = new FirebaseStorageService()
      const result = await service.deleteImageByUrl(
        'https://firebasestorage.googleapis.com/v0/b/bucket/o/images%2Ffile.png?alt=media'
      )

      expect(result).toEqual({})
      expect(storageMock.ref).toHaveBeenCalledWith({}, 'images/file.png')
    })

    it('reports an error for a non-Storage URL', async () => {
      const service = new FirebaseStorageService()
      const result = await service.deleteImageByUrl('not-a-url')

      expect(result.error).toBe('Невозможно определить путь к файлу')
    })
  })
})
