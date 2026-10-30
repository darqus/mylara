import type { CollectionResponse, DocumentResponse } from '@/types/api'

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'

import { getFirebaseAuth, getFirebaseDb } from './firebase'

type WriteResult = { success: boolean; error: string | null }
type CreateResult = { id: string | null; error: string | null }

/**
 * Firestore error codes that mean "the signed-in user lacks permission".
 * The admin UI shows this as an actionable hint instead of a generic failure.
 */
const PERMISSION_DENIED = 'permission-denied'

/**
 * Extracts the Firestore error code from an unknown thrown value.
 */
export function getFirestoreErrorCode(err: unknown): string | null {
  if (err && typeof err === 'object' && 'code' in err) {
    const code = (err as { code: unknown }).code

    return typeof code === 'string' ? code : null
  }

  return null
}

/**
 * Maps a thrown Firestore error to a user-facing message.
 *
 * @param err - Value thrown by the Firebase SDK
 * @param fallback - Message used when the error is not recognised
 * @param permissionMessage - Message used for `permission-denied`
 */
export function mapFirestoreError(
  err: unknown,
  fallback: string,
  permissionMessage?: string
): string {
  if (permissionMessage && getFirestoreErrorCode(err) === PERMISSION_DENIED) {
    return permissionMessage
  }

  return fallback
}

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
   * @returns Массив документов (каждый с полем `id`) и возможная ошибка
   */
  async getCollection<T extends Record<string, unknown>>(
    collectionName: string,
    errorMessage = 'Не удалось загрузить данные'
  ): Promise<CollectionResponse<T & { id: string }>> {
    const db = getFirebaseDb()

    if (!db) {
      return {
        items: [],
        error: 'Firebase не инициализирован',
      }
    }

    try {
      const querySnapshot = await getDocs(collection(db, collectionName))
      const items: Array<T & { id: string }> = querySnapshot.docs.map(
        (docSnapshot) => ({
          ...(docSnapshot.data() as T),
          id: docSnapshot.id,
        })
      )

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
   * @returns Данные документа (вместе с полем `id`) и возможная ошибка
   */
  async getDocument<T extends Record<string, unknown>>(
    collectionName: string,
    docId: string,
    errorMessage = 'Не удалось загрузить данные'
  ): Promise<DocumentResponse<T & { id: string }>> {
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
        const data = {
          ...(docSnap.data() as T),
          id: docSnap.id,
        }

        return {
          data,
          error: null,
        }
      }

      return {
        data: null,
        error: 'Документ не найден',
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
  ): Promise<CreateResult> {
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

      return {
        id: null,
        error: mapFirestoreError(
          err,
          'Не удалось создать документ',
          'Недостаточно прав для создания документа'
        ),
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
  ): Promise<WriteResult> {
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

      return {
        success: false,
        error: mapFirestoreError(
          err,
          'Не удалось обновить документ',
          'Недостаточно прав для обновления документа'
        ),
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
  ): Promise<WriteResult> {
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

      return {
        success: false,
        error: mapFirestoreError(
          err,
          'Не удалось удалить документ',
          'Недостаточно прав для удаления документа'
        ),
      }
    }
  },
}
