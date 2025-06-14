import { useDataFetching, } from 'src/composables/useDataFetching'
import type { CarouselItem, } from 'src/services/carousel.service'
import { getCarouselItems, } from 'src/services/carousel.service'

export { CarouselItem, }

export const useCarouselData = () => {
  const {
    data: carouselItems, loading, error, refresh,
  } = useDataFetching<
    CarouselItem[],
    { items: CarouselItem[] }
  >(
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
