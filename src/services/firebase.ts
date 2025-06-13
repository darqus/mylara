import { initializeApp, } from 'firebase/app'
import type { Firestore, } from 'firebase/firestore'
import { getFirestore, } from 'firebase/firestore'

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

  // Enable offline persistence
  import('firebase/firestore').then(({
    enableIndexedDbPersistence, 
  }) => {
    if (db) {
      enableIndexedDbPersistence(db).catch((err) => {
        if (err.code === 'failed-precondition') {
          console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.')
        } else if (err.code === 'unimplemented') {
          console.warn('The current browser does not support offline persistence')
        }
      })
    }
  }).catch((err) => console.error('Error enabling offline persistence:', err))
} catch (error) {
  console.error('Error initializing Firebase:', error)
}

export const getFirebaseDb = () => db
