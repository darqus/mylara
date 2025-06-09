import { ref, } from 'vue'

import type { CarouselItem, } from 'src/services/carousel.service'
import { getCarouselItems, } from 'src/services/carousel.service'

export { CarouselItem, }

export const useCarouselData = () => {
  const carouselItems = ref<CarouselItem[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      const result = await getCarouselItems()

      if (result.error) {
        error.value = result.error
      } else {
        carouselItems.value = result.items
      }
    } catch (err) {
      console.error('Error in fetchData:', err)
      error.value = 'Произошла ошибка при загрузке данных'
    } finally {
      loading.value = false
    }
  }

  // Запускаем загрузку данных
  void fetchData()

  return {
    carouselItems,
    loading,
    error,
    refresh: fetchData,
  }
}
