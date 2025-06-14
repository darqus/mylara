import { initializeApp, } from 'firebase/app'
import { getFirestore, } from 'firebase/firestore'

import type { Firestore, } from 'firebase/firestore'

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
  // Check if Firebase config is valid
  if (!firebaseConfig.projectId) {
    console.warn('Firebase projectId is undefined. Using offline mode only.')
  }

  app = initializeApp(firebaseConfig)
  db = getFirestore(app)
} catch (error) {
  console.error('Error initializing Firebase:', error)
}

export const getFirebaseDb = () => db
