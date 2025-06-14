import {
  collection, getDocs, doc, getDoc,
} from 'firebase/firestore'

import type {
  CollectionResponse, DocumentResponse,
} from 'src/types/api'

import { getFirebaseDb, } from './firebase'

/**
 * Базовый сервис для работы с Firestore
 */
export const firestoreService = {
  /**
   * Получает коллекцию документов из Firestore
   * @param collectionName Имя коллекции
   * @param errorMessage Сообщение об ошибке
   * @returns Массив документов и возможная ошибка
   */
  async getCollection<T>(
    collectionName: string,
    errorMessage = 'Не удалось загрузить данные'
  ): Promise<CollectionResponse<T>> {
    const db = getFirebaseDb()

    if (!db) {
      return {
        items: [],
        error: 'Firebase не инициализирован',
      }
    }

    try {
      const querySnapshot = await getDocs(collection(db, collectionName))
      const items: T[] = []

      querySnapshot.forEach((docSnapshot) => {
        const data = docSnapshot.data() as Omit<T, 'id'>

        items.push({
          id: docSnapshot.id,
          ...data,
        } as T)
      })

      return {
        items,
        error: null,
      }
    } catch (err) {
      console.error(`Error fetching ${collectionName} data:`, err)

      return {
        items: [],
        error: errorMessage,
      }
    }
  },

  /**
   * Получает документ из Firestore
   * @param collectionName Имя коллекции
   * @param docId ID документа
   * @param errorMessage Сообщение об ошибке
   * @returns Данные документа и возможная ошибка
   */
  async getDocument<T>(
    collectionName: string,
    docId: string,
    errorMessage = 'Не удалось загрузить данные'
  ): Promise<DocumentResponse<T>> {
    const db = getFirebaseDb()

    if (!db) {
      return {
        data: null,
        error: 'Firebase не инициализирован',
      }
    }

    try {
      const docRef = doc(db, collectionName, docId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data() as T

        return {
          data,
          error: null,
        }
      } else {
        return {
          data: null,
          error: 'Документ не найден',
        }
      }
    } catch (err) {
      console.error(`Error fetching ${collectionName}/${docId} data:`, err)

      return {
        data: null,
        error: errorMessage,
      }
    }
  },
}
