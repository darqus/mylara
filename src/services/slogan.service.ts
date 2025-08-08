import type { SloganResponse } from 'src/types/api'

import { firestoreService } from './firestore.service'

export type Slogan = {
  title: string
  image?: string // Base64 изображение
}

/**
 * Получает данные слогана из Firestore
 * @returns {Promise<SloganResponse>} Текст слогана и возможная ошибка
 */
export const getSlogan = async (): Promise<SloganResponse> => {
  const result = await firestoreService.getDocument<Slogan>(
    'slogan',
    '1',
    'Не удалось загрузить данные слогана'
  )

  return {
    title: result.data?.title ?? '',
    image: result.data?.image ?? '',
    error: result.error,
  }
}
