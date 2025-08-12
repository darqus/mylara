// Тестовый файл для проверки composable useBase64Image
import { useBase64Image } from 'src/composables/useBase64Image'

// Тест создания base64 из файла
export async function testBase64Image() {
  const { fileToBase64, isValidBase64Image, formatFileSize } = useBase64Image()

  // Создаем тестовый файл (простой способ для демонстрации)
  const canvas = document.createElement('canvas')

  canvas.width = 100
  canvas.height = 100

  const ctx = canvas.getContext('2d')

  if (ctx) {
    ctx.fillStyle = 'red'
    ctx.fillRect(0, 0, 50, 50)
    ctx.fillStyle = 'blue'
    ctx.fillRect(50, 50, 50, 50)
  }

  // Преобразуем canvas в blob, а затем в файл
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], 'test.png', { type: 'image/png' })

        fileToBase64(file, {
          maxSizeKB: 1000,
          maxWidth: 200,
          maxHeight: 200,
          quality: 0.8,
        })
          .then((result) => {
            console.warn('Результат теста:', {
              success: !!result,
              isValid: result ? isValidBase64Image(result.base64) : false,
              originalSize: formatFileSize(file.size),
              compressedSize: result
                ? formatFileSize(result.compressedSize)
                : 'N/A',
              dimensions: result ? `${result.width}x${result.height}` : 'N/A',
            })

            resolve(result)
          })
          .catch(() => {
            resolve(null)
          })
      } else {
        resolve(null)
      }
    }, 'image/png')
  })
}

// Экспортируем для использования в консоли браузера
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).testBase64Image = testBase64Image
}
