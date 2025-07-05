import { ref, type Ref } from 'vue'

export type Base64ImageOptions = {
  maxSizeKB?: number
  allowedTypes?: string[]
  maxWidth?: number
  maxHeight?: number
  quality?: number
}

export type Base64ImageResult = {
  base64: string
  originalFile: File
  compressedSize: number
  originalSize: number
  width: number
  height: number
}

/**
 * Composable для работы с изображениями в формате base64
 */
export function useBase64Image() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  /**
   * Преобразует файл изображения в base64
   */
  async function fileToBase64(
      file: File,
      options: Base64ImageOptions = {}
  ): Promise<Base64ImageResult | null> {
    const {
      maxSizeKB = 5000,
      allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
      maxWidth,
      maxHeight,
      quality = 0.8,
    } = options

    loading.value = true
    error.value = null

    try {
      // Валидация типа файла
      if (!allowedTypes.includes(file.type)) {
        error.value = `Неподдерживаемый тип файла. Разрешены: ${allowedTypes
          .map((type) => type.split('/')[1])
          .join(', ')}`

        return null
      }

      // Валидация размера файла
      const fileSizeKB = file.size / 1024

      if (fileSizeKB > maxSizeKB) {
        error.value = `Размер файла слишком большой. Максимум: ${maxSizeKB}KB`

        return null
      }

      // Создаем изображение для получения размеров
      const img = await createImageElement(file)
      const originalWidth = img.naturalWidth
      const originalHeight = img.naturalHeight

      // Сжимаем изображение если указаны максимальные размеры
      let base64: string
      let compressedSize = file.size

      if (maxWidth || maxHeight) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (!ctx) {
          throw new Error('Не удалось создать контекст canvas')
        }

        // Вычисляем новые размеры с сохранением пропорций
        const { width, height } = calculateNewDimensions(
          originalWidth,
          originalHeight,
          maxWidth,
          maxHeight
        )

        canvas.width = width
        canvas.height = height

        // Рисуем изображение на canvas
        ctx.drawImage(img, 0, 0, width, height)

        // Получаем base64 с указанным качеством
        base64 = canvas.toDataURL(file.type, quality)
        compressedSize = Math.round((base64.length * 3) / 4) // Приблизительный размер
      } else {
        // Простое преобразование без сжатия
        base64 = await fileToBase64String(file)
      }

      return {
        base64,
        originalFile: file,
        compressedSize,
        originalSize: file.size,
        width: originalWidth,
        height: originalHeight,
      }
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Ошибка обработки изображения'

      return null
    } finally {
      loading.value = false
    }
  }

  /**
   * Создает изображение из файла
   */
  function createImageElement(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      const url = URL.createObjectURL(file)

      img.onload = () => {
        URL.revokeObjectURL(url)
        resolve(img)
      }

      img.onerror = () => {
        URL.revokeObjectURL(url)
        reject(new Error('Не удалось загрузить изображение'))
      }

      img.src = url
    })
  }

  /**
   * Преобразует файл в base64 строку
   */
  function fileToBase64String(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = () => {
        resolve(reader.result as string)
      }

      reader.onerror = () => {
        reject(new Error('Ошибка чтения файла'))
      }

      reader.readAsDataURL(file)
    })
  }

  /**
   * Вычисляет новые размеры изображения с сохранением пропорций
   */
  function calculateNewDimensions(
      originalWidth: number,
      originalHeight: number,
      maxWidth?: number,
      maxHeight?: number
  ): { width: number; height: number } {
    let { width, height } = { width: originalWidth, height: originalHeight }

    if (maxWidth && width > maxWidth) {
      height = (height * maxWidth) / width
      width = maxWidth
    }

    if (maxHeight && height > maxHeight) {
      width = (width * maxHeight) / height
      height = maxHeight
    }

    return { width: Math.round(width), height: Math.round(height) }
  }

  /**
   * Получает информацию об изображении из base64
   */
  async function getImageInfo(base64: string): Promise<{
    width: number
    height: number
    size: number
  } | null> {
    try {
      const img = new Image()

      return new Promise((resolve, reject) => {
        img.onload = () => {
          resolve({
            width: img.naturalWidth,
            height: img.naturalHeight,
            size: Math.round((base64.length * 3) / 4), // Приблизительный размер
          })
        }

        img.onerror = () => {
          reject(new Error('Не удалось загрузить изображение'))
        }

        img.src = base64
      })
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Ошибка анализа изображения'

      return null
    }
  }

  /**
   * Проверяет, является ли строка валидным base64 изображением
   */
  function isValidBase64Image(base64: string): boolean {
    const base64Pattern = /^data:image\/(jpeg|jpg|png|gif|webp);base64,/

    return base64Pattern.test(base64)
  }

  /**
   * Извлекает MIME-тип из base64 строки
   */
  function getMimeTypeFromBase64(base64: string): string | null {
    const match = base64.match(/^data:([^;]+);base64,/)

    return match ? (match[1] ?? null) : null
  }

  /**
   * Форматирует размер файла
   */
  function formatFileSize(bytes: number): string {
    if (bytes === 0) {
      return '0 Bytes'
    }

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
  }

  return {
    loading: loading as Readonly<Ref<boolean>>,
    error: error as Readonly<Ref<string | null>>,
    fileToBase64,
    getImageInfo,
    isValidBase64Image,
    getMimeTypeFromBase64,
    formatFileSize,
  }
}
