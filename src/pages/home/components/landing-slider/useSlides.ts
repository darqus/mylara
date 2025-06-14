import { ref, } from 'vue'

import type { Slide, } from 'src/services/slides.service'
import { getSlides, } from 'src/services/slides.service'

export const useSlides = () => {
  const slides = ref<Slide[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchSlides = async () => {
    loading.value = true
    error.value = null

    try {
      const result = await getSlides()

      if (result.error) {
        error.value = result.error
      } else if (result.slides.length > 0) {
        slides.value = result.slides
      }
    } catch (err) {
      console.error('Error in fetchSlides:', err)
      error.value = 'Произошла ошибка при загрузке слайдов'
    } finally {
      loading.value = false
    }
  }

  // Запускаем загрузку данных
  void fetchSlides()

  return {
    slides,
    loading,
    error,
    refresh: fetchSlides,
  }
}
