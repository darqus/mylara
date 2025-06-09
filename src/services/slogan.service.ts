import {
  doc, getDoc, 
} from 'firebase/firestore'

import { getFirebaseDb, } from './firebase'

export type Slogan = {
  title: string
}

/**
 * Получает данные слогана из Firestore
 * @returns {Promise<{title: string, error: string | null}>} Текст слогана и возможная ошибка
 */
export const getSlogan = async (): Promise<{
  title: string;
  error: string | null;
}> => {
  const db = getFirebaseDb()

  if (!db) {
    return {
      title: '',
      error: 'Firebase не инициализирован',
    }
  }

  try {
    const docRef = doc(db, 'slogan', '1')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data() as Slogan

      return {
        title: data.title,
        error: null,
      }
    } else {
      return {
        title: '',
        error: 'Слоган не найден',
      }
    }
  } catch (err) {
    console.error('Error fetching slogan data:', err)

    return {
      title: '',
      error: 'Не удалось загрузить данные слогана',
    }
  }
}
