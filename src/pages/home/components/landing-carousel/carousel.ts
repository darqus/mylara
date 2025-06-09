import { ref, } from 'vue'

import { initializeApp, } from 'firebase/app'
import type { Firestore, } from 'firebase/firestore'
import {
  getFirestore, collection, getDocs,
} from 'firebase/firestore'

export type CarouselItem = {
  id: string
  img: string
  label: string
  link: string
  info: string
}

// Firebase конфигурация
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Инициализация Firebase
let app
let db: Firestore | undefined

try {
  app = initializeApp(firebaseConfig)
  db = getFirestore(app)
} catch (error) {
  console.error('Error initializing Firebase:', error)
}

export const useCarouselData = () => {
  const carouselItems = ref<CarouselItem[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    if (!db) {
      error.value = 'Firebase не инициализирован'
      loading.value = false

      return
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

      carouselItems.value = items
    } catch (err) {
      console.error('Error fetching carousel data:', err)
      error.value = 'Не удалось загрузить данные карусели'
    } finally {
      loading.value = false
    }
  }

  // Запускаем загрузку данных
  void fetchData()

  return {
    carouselItems,
    loading,
    error,
    refresh: fetchData,
  }
}
