import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore'

import type { CollectionResponse, DocumentResponse } from 'src/types/api'

import { getFirebaseDb, getFirebaseAuth } from './firebase'

/**
 * Проверяет, аутентифицирован ли пользователь
 */
function checkAuth(): { isAuthenticated: boolean; error?: string } {
  const auth = getFirebaseAuth()

  if (!auth) {
    return {
      isAuthenticated: false,
      error: 'Firebase Auth не инициализирован',
    }
  }

  if (!auth.currentUser) {
    return {
      isAuthenticated: false,
      error: 'Пользователь не аутентифицирован',
    }
  }

  return { isAuthenticated: true }
}

/**
 * Базовый сервис для работы с Firestore
 * Следует правилам Firebase Security Rules:
 * - Чтение доступно всем
 * - Запись только аутентифицированным пользователям
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

  /**
   * Создает новый документ в коллекции
   * Требует аутентификации согласно Firebase Security Rules
   * @param collectionName Имя коллекции
   * @param data Данные для создания
   * @returns ID созданного документа и возможная ошибка
   */
  async createDocument<T>(
    collectionName: string,
    data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<{ id: string | null; error: string | null }> {
    const db = getFirebaseDb()

    if (!db) {
      return {
        id: null,
        error: 'Firebase не инициализирован',
      }
    }

    // Проверяем аутентификацию перед записью
    const authCheck = checkAuth()

    if (!authCheck.isAuthenticated) {
      return {
        id: null,
        error: authCheck.error ?? 'Требуется аутентификация',
      }
    }

    try {
      const docData = {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, collectionName), docData)

      return {
        id: docRef.id,
        error: null,
      }
    } catch (err) {
      console.error(`Error creating document in ${collectionName}:`, err)

      // Проверяем, не связана ли ошибка с правами доступа
      if (err && typeof err === 'object' && 'code' in err) {
        const errorCode = (err as { code: string }).code

        if (errorCode === 'permission-denied') {
          return {
            id: null,
            error: 'Недостаточно прав для создания документа',
          }
        }
      }

      return {
        id: null,
        error: 'Не удалось создать документ',
      }
    }
  },

  /**
   * Обновляет документ в коллекции
   * Требует аутентификации согласно Firebase Security Rules
   * @param collectionName Имя коллекции
   * @param docId ID документа
   * @param data Данные для обновления
   * @returns Результат операции
   */
  async updateDocument<T>(
    collectionName: string,
    docId: string,
    data: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>
  ): Promise<{ success: boolean; error: string | null }> {
    const db = getFirebaseDb()

    if (!db) {
      return {
        success: false,
        error: 'Firebase не инициализирован',
      }
    }

    // Проверяем аутентификацию перед записью
    const authCheck = checkAuth()

    if (!authCheck.isAuthenticated) {
      return {
        success: false,
        error: authCheck.error ?? 'Требуется аутентификация',
      }
    }

    try {
      const docRef = doc(db, collectionName, docId)
      const updateData = {
        ...data,
        updatedAt: serverTimestamp(),
      }

      await updateDoc(docRef, updateData)

      return {
        success: true,
        error: null,
      }
    } catch (err) {
      console.error(
        `Error updating document ${docId} in ${collectionName}:`,
        err
      )

      // Проверяем, не связана ли ошибка с правами доступа
      if (err && typeof err === 'object' && 'code' in err) {
        const errorCode = (err as { code: string }).code

        if (errorCode === 'permission-denied') {
          return {
            success: false,
            error: 'Недостаточно прав для обновления документа',
          }
        }
      }

      return {
        success: false,
        error: 'Не удалось обновить документ',
      }
    }
  },

  /**
   * Удаляет документ из коллекции
   * Требует аутентификации согласно Firebase Security Rules
   * @param collectionName Имя коллекции
   * @param docId ID документа
   * @returns Результат операции
   */
  async deleteDocument(
    collectionName: string,
    docId: string
  ): Promise<{ success: boolean; error: string | null }> {
    const db = getFirebaseDb()

    if (!db) {
      return {
        success: false,
        error: 'Firebase не инициализирован',
      }
    }

    // Проверяем аутентификацию перед записью
    const authCheck = checkAuth()

    if (!authCheck.isAuthenticated) {
      return {
        success: false,
        error: authCheck.error ?? 'Требуется аутентификация',
      }
    }

    try {
      const docRef = doc(db, collectionName, docId)

      await deleteDoc(docRef)

      return {
        success: true,
        error: null,
      }
    } catch (err) {
      console.error(
        `Error deleting document ${docId} from ${collectionName}:`,
        err
      )

      // Проверяем, не связана ли ошибка с правами доступа
      if (err && typeof err === 'object' && 'code' in err) {
        const errorCode = (err as { code: string }).code

        if (errorCode === 'permission-denied') {
          return {
            success: false,
            error: 'Недостаточно прав для удаления документа',
          }
        }
      }

      return {
        success: false,
        error: 'Не удалось удалить документ',
      }
    }
  },
}
