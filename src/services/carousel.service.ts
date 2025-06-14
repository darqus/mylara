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
 * @returns {Promise<{items: CarouselItem[], error: string | null}>} Массив элементов карусели и возможная ошибка
 */
export const getCarouselItems = async (): Promise<{
  items: CarouselItem[];
  error: string | null;
}> => {
  return firestoreService.getCollection<CarouselItem>(
    'carousel',
    'Не удалось загрузить данные карусели'
  )
}
