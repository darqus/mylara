import { useDataFetching } from '@/composables/useDataFetching'
import type { CarouselItem } from '@/services/carousel.service'
import { getCarouselItems } from '@/services/carousel.service'

export type { CarouselItem }

export const useCarouselData = () => {
  const {
    data: carouselItems,
    loading,
    error,
    refresh,
  } = useDataFetching<CarouselItem[], { items: CarouselItem[] }>(
    getCarouselItems,
    [],
    'items'
  )

  return {
    carouselItems,
    loading,
    error,
    refresh,
  }
}
