import { initializeApp, } from 'firebase/app'
import {
  getAuth, connectAuthEmulator,
} from 'firebase/auth'
import {
  getFirestore, connectFirestoreEmulator,
} from 'firebase/firestore'
import {
  getStorage, connectStorageEmulator,
} from 'firebase/storage'

import type { Auth, } from 'firebase/auth'
import type { Firestore, } from 'firebase/firestore'
import type { FirebaseStorage, } from 'firebase/storage'

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
let auth: Auth | undefined
let storage: FirebaseStorage | undefined

try {
  // Check if Firebase config is valid
  if (!firebaseConfig.projectId) {
    console.warn('Firebase projectId is undefined. Using offline mode only.')
  }

  app = initializeApp(firebaseConfig)
  db = getFirestore(app)
  auth = getAuth(app)
  storage = getStorage(app)

  // В режиме разработки можно подключиться к эмуляторам
  if (
    import.meta.env.DEV &&
    import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true'
  ) {
    if (!firebaseConfig.projectId?.includes('demo-')) {
      connectFirestoreEmulator(db, 'localhost', 8080)
      connectAuthEmulator(auth, 'http://localhost:9099')
      connectStorageEmulator(storage, 'localhost', 9199)
    }
  }
} catch (error) {
  console.error('Error initializing Firebase:', error)
}

export const getFirebaseDb = () => db

export const getFirebaseAuth = () => auth

export const getFirebaseStorage = () => storage
