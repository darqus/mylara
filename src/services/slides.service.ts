import type { SlidesResponse } from '@/types/api'

import { firestoreService } from './firestore.service'

export type Slide = {
  img: string
  title: string
  subtitle: string
}

/**
 * Получает данные слайдов из Firestore.
 *
 * Идентификатор документа остаётся строкой: Firestore выдаёт строковые id, а
 * `Number(...)` ломал бы порядок и коллизии. `q-carousel` принимает строку в
 * `:name` без ограничений.
 *
 * @returns {Promise<SlidesResponse>} Массив слайдов и возможная ошибка
 */
export const getSlides = async (): Promise<SlidesResponse> => {
  const result = await firestoreService.getCollection<Slide>(
    'slides',
    'Не удалось загрузить данные слайдов'
  )

  return {
    slides: result.items,
    error: result.error,
  }
}
