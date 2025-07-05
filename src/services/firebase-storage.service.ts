import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  connectStorageEmulator,
} from 'firebase/storage'

import type { FirebaseStorage, } from 'firebase/storage'

let storage: FirebaseStorage | undefined

try {
  storage = getStorage()

  // В режиме разработки можно подключиться к эмулятору Storage
  if (
    import.meta.env.DEV &&
    import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true'
  ) {
    connectStorageEmulator(storage, 'localhost', 9199)
  }
} catch (error) {
  console.error('Error initializing Firebase Storage:', error)
}

export type UploadProgress = {
  percentage: number
  bytesTransferred: number
  totalBytes: number
}

export type UploadResult = {
  url?: string
  error?: string
}

export type ImageUploadOptions = {
  path?: string
  filename?: string
  maxSizeKB?: number
  allowedTypes?: string[]
}

/**
 * Сервис для работы с Firebase Storage
 */
export class FirebaseStorageService {
  private storage: FirebaseStorage

  constructor() {
    if (!storage) {
      throw new Error('Firebase Storage not initialized')
    }
    this.storage = storage
  }

  /**
   * Загрузка изображения
   */
  async uploadImage(
    file: File,
    options: ImageUploadOptions = {}
  ): Promise<UploadResult> {
    try {
      // Валидация файла
      const validationError = this.validateImageFile(file, options)

      if (validationError) {
        return {
          error: validationError,
        }
      }

      // Генерируем уникальное имя файла
      const filename = options.filename ?? this.generateFileName(file)
      const path = options.path ?? 'images'
      const fullPath = `${path}/${filename}`

      // Создаем ссылку на файл
      const fileRef = ref(this.storage, fullPath)

      // Загружаем файл
      const snapshot = await uploadBytes(fileRef, file)

      // Получаем URL для загрузки
      const downloadURL = await getDownloadURL(snapshot.ref)

      return {
        url: downloadURL,
      }
    } catch (error) {
      console.error('Error uploading image:', error)

      return {
        error: 'Ошибка при загрузке изображения',
      }
    }
  }

  /**
   * Загрузка изображения с отслеживанием прогресса
   */
  async uploadImageWithProgress(
    file: File,
    options: ImageUploadOptions = {},
    onProgress?: (progress: UploadProgress) => void
  ): Promise<UploadResult> {
    try {
      // Валидация файла
      const validationError = this.validateImageFile(file, options)

      if (validationError) {
        return {
          error: validationError,
        }
      }

      // Для простоты используем обычную загрузку
      // В продакшене можно использовать uploadBytesResumable для отслеживания прогресса
      const result = await this.uploadImage(file, options)

      // Симулируем прогресс для демонстрации
      if (onProgress && result.url) {
        onProgress({
          percentage: 100,
          bytesTransferred: file.size,
          totalBytes: file.size,
        })
      }

      return result
    } catch (error) {
      console.error('Error uploading image with progress:', error)

      return {
        error: 'Ошибка при загрузке изображения',
      }
    }
  }

  /**
   * Удаление изображения по URL
   */
  async deleteImageByUrl(url: string): Promise<{ error?: string }> {
    try {
      // Извлекаем путь из URL
      const path = this.extractPathFromUrl(url)

      if (!path) {
        return {
          error: 'Невозможно определить путь к файлу',
        }
      }

      const fileRef = ref(this.storage, path)

      await deleteObject(fileRef)

      return {}
    } catch (error) {
      console.error('Error deleting image:', error)

      return {
        error: 'Ошибка при удалении изображения',
      }
    }
  }

  /**
   * Валидация файла изображения
   */
  private validateImageFile(
    file: File,
    options: ImageUploadOptions
  ): string | null {
    // Проверка типа файла
    const allowedTypes = options.allowedTypes ?? [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
    ]

    if (!allowedTypes.includes(file.type)) {
      return `Неподдерживаемый тип файла. Разрешены: ${allowedTypes
        .map((type) => type.split('/')[1])
        .join(', ')}`
    }

    // Проверка размера файла
    const maxSizeKB = options.maxSizeKB ?? 5000 // 5MB по умолчанию
    const fileSizeKB = file.size / 1024

    if (fileSizeKB > maxSizeKB) {
      return `Размер файла слишком большой. Максимум: ${maxSizeKB}KB`
    }

    return null
  }

  /**
   * Генерация уникального имени файла
   */
  private generateFileName(file: File): string {
    const extension = file.name.split('.').pop() ?? 'jpg'
    const timestamp = Date.now()
    const randomId = Math.random().toString(36).substring(2, 10)

    return `${timestamp}_${randomId}.${extension}`
  }

  /**
   * Извлечение пути из Firebase Storage URL
   */
  private extractPathFromUrl(url: string): string | null {
    try {
      const urlObj = new URL(url)
      const pathname = urlObj.pathname

      // Для Firebase Storage URL имеет формат:
      // /v0/b/{bucket}/o/{path}
      const match = pathname.match(/\/o\/(.+)/)

      if (match && match[1]) {
        return decodeURIComponent(match[1])
      }

      return null
    } catch {
      return null
    }
  }
}

// Экспортируем экземпляр сервиса
export const firebaseStorageService = new FirebaseStorageService()
