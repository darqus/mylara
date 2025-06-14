import type { SlidesResponse, } from 'src/types/api'

import { firestoreService, } from './firestore.service'

export type Slide = {
  id: string | number
  img: string
  title: string
  subtitle: string
}

/**
 * Получает данные слайдов из Firestore
 * @returns {Promise<SlidesResponse>} Массив слайдов и возможная ошибка
 */
export const getSlides = async (): Promise<SlidesResponse> => {
  const result = await firestoreService.getCollection<Slide>(
    'slides',
    'Не удалось загрузить данные слайдов'
  )

  // Преобразуем id из string в number
  const slides = result.items.map((slide) => ({
    ...slide,
    id: Number(slide.id),
  }))

  return {
    slides,
    error: result.error,
  }
}
