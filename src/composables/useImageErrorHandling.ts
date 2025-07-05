import { ref, } from 'vue'

export function useImageErrorHandling() {
  const failedImages = ref<Set<string>>(new Set())

  /**
   * Обработчик ошибки загрузки изображения
   */
  const handleImageError = (event: Event, fallbackSrc = '/logo.svg') => {
    const img = event.target as HTMLImageElement
    const originalSrc = img.src

    console.warn('Failed to load image:', originalSrc)

    // Добавляем в список неудачных загрузок
    failedImages.value.add(originalSrc)

    // Заменяем на fallback изображение
    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc
      img.alt = 'Изображение недоступно'

      // Добавляем CSS класс для стилизации fallback изображений
      img.classList.add('fallback-image')
    }
  }

  /**
   * Обработчик успешной загрузки изображения
   */
  const handleImageLoad = (event: Event) => {
    const img = event.target as HTMLImageElement

    img.setAttribute('data-loaded', 'true')
    img.classList.remove('fallback-image')
  }

  /**
   * Проверяет, была ли ошибка загрузки для данного URL
   */
  const isImageFailed = (src: string) => {
    return failedImages.value.has(src)
  }

  /**
   * Получает безопасный URL изображения с fallback
   */
  const getSafeImageSrc = (src: string, fallback = '/logo.svg') => {
    return isImageFailed(src) ? fallback : src
  }

  /**
   * Очищает кэш неудачных загрузок
   */
  const clearFailedImages = () => {
    failedImages.value.clear()
  }

  return {
    failedImages,
    handleImageError,
    handleImageLoad,
    isImageFailed,
    getSafeImageSrc,
    clearFailedImages,
  }
}
