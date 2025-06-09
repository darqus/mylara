import { ref, } from 'vue'

import type { Slide, } from 'src/services/slides.service'
import { getSlides, } from 'src/services/slides.service'

// Fallback slides if Firebase fails
const fallbackSlides: Slide[] = [
  {
    id: 1,
    img: 'https://cdn.quasar.dev/img/mountains.jpg',
    title: 'Mountains',
    subtitle: 'Majestic peaks and valleys',
  },
  {
    id: 2,
    img: 'https://cdn.quasar.dev/img/parallax1.jpg',
    title: 'City',
    subtitle: 'Urban landscapes and architecture',
  },
  {
    id: 3,
    img: 'https://cdn.quasar.dev/img/parallax2.jpg',
    title: 'Technology',
    subtitle: 'Innovation and advancement',
  },
]

export const useSlides = () => {
  const slides = ref<Slide[]>(fallbackSlides)
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchSlides = async () => {
    loading.value = true
    error.value = null

    try {
      const result = await getSlides()

      if (result.error) {
        error.value = result.error
        slides.value = fallbackSlides
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
