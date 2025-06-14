import type { CollectionResponse, } from 'src/types/api'

import { firestoreService, } from './firestore.service'

export type CarouselItem = {
  id: string
  img: string
  label: string
  link: string
  info: string
}

/**
 * Получает данные карусели из Firestore
 * @returns {Promise<CollectionResponse<CarouselItem>>} Массив элементов карусели и возможная ошибка
 */
export const getCarouselItems = async (): Promise<CollectionResponse<CarouselItem>> => {
  return firestoreService.getCollection<CarouselItem>(
    'carousel',
    'Не удалось загрузить данные карусели'
  )
}
