import {
  collection, getDocs, 
} from 'firebase/firestore'

import { getFirebaseDb, } from './firebase'

export type CarouselItem = {
  id: string
  img: string
  label: string
  link: string
  info: string
}

/**
 * Получает данные карусели из Firestore
 * @returns {Promise<CarouselItem[]>} Массив элементов карусели
 */
export const getCarouselItems = async (): Promise<{
  items: CarouselItem[];
  error: string | null;
}> => {
  const db = getFirebaseDb()

  if (!db) {
    return {
      items: [],
      error: 'Firebase не инициализирован',
    }
  }

  try {
    const querySnapshot = await getDocs(collection(db, 'carousel'))
    const items: CarouselItem[] = []

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<CarouselItem, 'id'>

      items.push({
        id: doc.id,
        ...data,
      })
    })

    return {
      items,
      error: null,
    }
  } catch (err) {
    console.error('Error fetching carousel data:', err)

    return {
      items: [],
      error: 'Не удалось загрузить данные карусели',
    }
  }
}
