import {
  collection, getDocs, 
} from 'firebase/firestore'

import { getFirebaseDb, } from './firebase'

export type Slide = {
  id: number
  img: string
  title: string
  subtitle: string
}

/**
 * Получает данные слайдов из Firestore
 * @returns {Promise<{slides: Slide[], error: string | null}>} Массив слайдов и возможная ошибка
 */
export const getSlides = async (): Promise<{
  slides: Slide[];
  error: string | null;
}> => {
  const db = getFirebaseDb()

  if (!db) {
    return {
      slides: [],
      error: 'Firebase не инициализирован',
    }
  }

  try {
    const querySnapshot = await getDocs(collection(db, 'slides'))
    const slides: Slide[] = []

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<Slide, 'id'>

      slides.push({
        id: Number(doc.id),
        ...data,
      })
    })

    return {
      slides,
      error: null,
    }
  } catch (err) {
    console.error('Error fetching slides data:', err)

    return {
      slides: [],
      error: 'Не удалось загрузить данные слайдов',
    }
  }
}
