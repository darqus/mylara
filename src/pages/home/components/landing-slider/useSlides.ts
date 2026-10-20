import { useDataFetching } from '@/composables/useDataFetching'
import type { Slide } from '@/services/slides.service'
import { getSlides } from '@/services/slides.service'

export const useSlides = () => {
  const {
    data: slides,
    loading,
    error,
    refresh,
  } = useDataFetching<Slide[], { slides: Slide[] }>(getSlides, [], 'slides')

  return {
    slides,
    loading,
    error,
    refresh,
  }
}
