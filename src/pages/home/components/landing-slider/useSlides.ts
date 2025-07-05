import { useDataFetching } from 'src/composables/useDataFetching'
import type { Slide } from 'src/services/slides.service'
import { getSlides } from 'src/services/slides.service'

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
