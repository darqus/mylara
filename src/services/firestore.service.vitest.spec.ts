import { beforeEach, describe, expect, it, vi } from 'vitest'

const firestoreMock = vi.hoisted(() => ({
  addDoc: vi.fn(),
  collection: vi.fn((_db: unknown, name: string) => `collection:${name}`),
  deleteDoc: vi.fn(),
  doc: vi.fn((_db: unknown, name: string, id: string) => `doc:${name}/${id}`),
  getDoc: vi.fn(),
  getDocs: vi.fn(),
  serverTimestamp: vi.fn(() => 'server-timestamp'),
  updateDoc: vi.fn(),
}))

vi.mock('firebase/firestore', () => firestoreMock)

const getFirebaseDbMock = vi.hoisted(() => vi.fn())
const getFirebaseAuthMock = vi.hoisted(() => vi.fn())

vi.mock('@/services/firebase', () => ({
  getFirebaseDb: getFirebaseDbMock,
  getFirebaseAuth: getFirebaseAuthMock,
}))

const { firestoreService, getFirestoreErrorCode, mapFirestoreError } =
  await import('./firestore.service')

const signedInAuth = { currentUser: { uid: 'admin-1' } }

describe('getFirestoreErrorCode', () => {
  it('returns the code of a Firestore-like error', () => {
    expect(getFirestoreErrorCode({ code: 'permission-denied' })).toBe(
      'permission-denied'
    )
  })

  it('returns null for non-object or code-less values', () => {
    expect(getFirestoreErrorCode(null)).toBeNull()
    expect(getFirestoreErrorCode('boom')).toBeNull()
    expect(getFirestoreErrorCode({ code: 42 })).toBeNull()
  })
})

describe('mapFirestoreError', () => {
  it('prefers the permission message for permission-denied', () => {
    expect(
      mapFirestoreError({ code: 'permission-denied' }, 'fallback', 'denied')
    ).toBe('denied')
  })

  it('falls back for any other error', () => {
    expect(
      mapFirestoreError({ code: 'unavailable' }, 'fallback', 'denied')
    ).toBe('fallback')
    expect(mapFirestoreError(null, 'fallback', 'denied')).toBe('fallback')
  })

  it('ignores the permission message when none is provided', () => {
    expect(mapFirestoreError({ code: 'permission-denied' }, 'fallback')).toBe(
      'fallback'
    )
  })
})

describe('firestoreService reads', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    getFirebaseDbMock.mockReturnValue({})
  })

  it('returns the id along with the document data', async () => {
    firestoreMock.getDocs.mockResolvedValue({
      docs: [
        { id: 'carousel-1', data: () => ({ title: 'One' }) },
        { id: 'carousel-2', data: () => ({ title: 'Two' }) },
      ],
    })

    const result = await firestoreService.getCollection<{ title: string }>(
      'carousel'
    )

    expect(result.error).toBeNull()
    expect(result.items).toEqual([
      { id: 'carousel-1', title: 'One' },
      { id: 'carousel-2', title: 'Two' },
    ])
  })

  it('reports the custom message when the collection read fails', async () => {
    firestoreMock.getDocs.mockRejectedValue({ code: 'unavailable' })

    const result = await firestoreService.getCollection(
      'carousel',
      'Не удалось загрузить слайды'
    )

    expect(result).toEqual({ items: [], error: 'Не удалось загрузить слайды' })
  })

  it('reports offline mode when Firestore is not initialized', async () => {
    getFirebaseDbMock.mockReturnValue(null)

    await expect(firestoreService.getCollection('carousel')).resolves.toEqual({
      items: [],
      error: 'Firebase не инициализирован',
    })
    expect(firestoreMock.getDocs).not.toHaveBeenCalled()
  })

  it('returns document data with its id', async () => {
    firestoreMock.getDoc.mockResolvedValue({
      exists: () => true,
      id: 'slogan-1',
      data: () => ({ title: 'Hello' }),
    })

    const result = await firestoreService.getDocument<{ title: string }>(
      'slogan',
      '1'
    )

    expect(result).toEqual({
      data: { id: 'slogan-1', title: 'Hello' },
      error: null,
    })
  })

  it('reports a missing document', async () => {
    firestoreMock.getDoc.mockResolvedValue({ exists: () => false })

    const result = await firestoreService.getDocument('slogan', '1')

    expect(result).toEqual({ data: null, error: 'Документ не найден' })
  })
})

describe('firestoreService writes', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    getFirebaseDbMock.mockReturnValue({})
    getFirebaseAuthMock.mockReturnValue(signedInAuth)
  })

  it('refuses to write when the user is not authenticated', async () => {
    getFirebaseAuthMock.mockReturnValue({ currentUser: null })

    const result = await firestoreService.deleteDocument('carousel', 'id-1')

    expect(result).toEqual({
      success: false,
      error: 'Пользователь не аутентифицирован',
    })
    expect(firestoreMock.deleteDoc).not.toHaveBeenCalled()
  })

  it('refuses to write when Firebase Auth is not initialized', async () => {
    getFirebaseAuthMock.mockReturnValue(null)

    const result = await firestoreService.createDocument('carousel', {})

    expect(result).toEqual({
      id: null,
      error: 'Firebase Auth не инициализирован',
    })
  })

  it('creates a document with server timestamps', async () => {
    firestoreMock.addDoc.mockResolvedValue({ id: 'new-1' })

    const result = await firestoreService.createDocument('carousel', {
      title: 'New',
    })

    expect(result).toEqual({ id: 'new-1', error: null })
    expect(firestoreMock.addDoc).toHaveBeenCalledWith('collection:carousel', {
      title: 'New',
      createdAt: 'server-timestamp',
      updatedAt: 'server-timestamp',
    })
  })

  it('maps permission-denied on create to an actionable message', async () => {
    firestoreMock.addDoc.mockRejectedValue({ code: 'permission-denied' })

    const result = await firestoreService.createDocument('carousel', {})

    expect(result).toEqual({
      id: null,
      error: 'Недостаточно прав для создания документа',
    })
  })

  it('maps permission-denied on update and delete', async () => {
    firestoreMock.updateDoc.mockRejectedValue({ code: 'permission-denied' })
    firestoreMock.deleteDoc.mockRejectedValue({ code: 'permission-denied' })

    await expect(
      firestoreService.updateDocument('carousel', 'id-1', { title: 'x' })
    ).resolves.toEqual({
      success: false,
      error: 'Недостаточно прав для обновления документа',
    })
    await expect(
      firestoreService.deleteDocument('carousel', 'id-1')
    ).resolves.toEqual({
      success: false,
      error: 'Недостаточно прав для удаления документа',
    })
  })

  it('keeps the generic message for unknown failures', async () => {
    firestoreMock.deleteDoc.mockRejectedValue(new Error('network'))

    await expect(
      firestoreService.deleteDocument('carousel', 'id-1')
    ).resolves.toEqual({ success: false, error: 'Не удалось удалить документ' })
  })
})
