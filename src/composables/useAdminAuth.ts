import {
  ref, computed,
} from 'vue'

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { getFirebaseAuth, } from 'src/services/firebase'

import type { User, } from 'firebase/auth'

const currentUser = ref<User | null>(null)
const loading = ref(false)
const initializing = ref(true)

/**
 * Composable для аутентификации в админке через Firebase Auth
 */
export function useAdminAuth() {
  const isAuthenticated = computed(() => currentUser.value !== null)

  /**
   * Инициализация слежения за состоянием аутентификации
   */
  function initAuth() {
    const auth = getFirebaseAuth()

    if (!auth) {
      console.warn('Firebase Auth не инициализирован')
      initializing.value = false

      return
    }

    // Слушаем изменения состояния аутентификации
    onAuthStateChanged(auth, (user) => {
      currentUser.value = user
      loading.value = false
      initializing.value = false
    })
  }

  /**
   * Вход в админку через email и пароль
   */
  async function login(
      email: string,
      password: string
  ): Promise<{ success: boolean; error?: string }> {
    const auth = getFirebaseAuth()

    if (!auth) {
      return {
        success: false,
        error: 'Firebase Auth не инициализирован',
      }
    }

    loading.value = true

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      currentUser.value = userCredential.user

      return {
        success: true,
      }
    } catch (error: unknown) {
      let errorMessage = 'Произошла ошибка при входе'

      // Обработка специфичных ошибок Firebase Auth
      if (error && typeof error === 'object' && 'code' in error) {
        switch ((error as { code: string }).code) {
          case 'auth/user-not-found':
            errorMessage = 'Пользователь не найден'
            break

          case 'auth/wrong-password':
            errorMessage = 'Неверный пароль'
            break

          case 'auth/invalid-email':
            errorMessage = 'Неверный формат email'
            break

          case 'auth/user-disabled':
            errorMessage = 'Пользователь заблокирован'
            break

          case 'auth/too-many-requests':
            errorMessage = 'Слишком много попыток входа. Попробуйте позже'
            break

          default:
            console.error('Login error:', error)
        }
      } else {
        console.error('Login error:', error)
      }

      return {
        success: false,
        error: errorMessage,
      }
    } finally {
      loading.value = false
    }
  }

  /**
   * Регистрация нового администратора (только для первоначальной настройки)
   */
  async function register(
      email: string,
      password: string
  ): Promise<{ success: boolean; error?: string }> {
    const auth = getFirebaseAuth()

    if (!auth) {
      return {
        success: false,
        error: 'Firebase Auth не инициализирован',
      }
    }

    loading.value = true

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      currentUser.value = userCredential.user

      return {
        success: true,
      }
    } catch (error: unknown) {
      let errorMessage = 'Произошла ошибка при регистрации'

      if (error && typeof error === 'object' && 'code' in error) {
        switch ((error as { code: string }).code) {
          case 'auth/email-already-in-use':
            errorMessage = 'Пользователь с таким email уже существует'
            break

          case 'auth/invalid-email':
            errorMessage = 'Неверный формат email'
            break

          case 'auth/weak-password':
            errorMessage = 'Пароль слишком слабый'
            break

          default:
            console.error('Registration error:', error)
        }
      } else {
        console.error('Registration error:', error)
      }

      return {
        success: false,
        error: errorMessage,
      }
    } finally {
      loading.value = false
    }
  }

  /**
   * Выход из админки
   */
  async function logout(): Promise<{ success: boolean; error?: string }> {
    const auth = getFirebaseAuth()

    if (!auth) {
      return {
        success: false,
        error: 'Firebase Auth не инициализирован',
      }
    }

    loading.value = true

    try {
      await signOut(auth)
      currentUser.value = null

      return {
        success: true,
      }
    } catch (error) {
      console.error('Logout error:', error)

      return {
        success: false,
        error: 'Произошла ошибка при выходе',
      }
    } finally {
      loading.value = false
    }
  }

  /**
   * Проверка аутентификации (deprecated - используйте isAuthenticated)
   */
  function checkAuth(): boolean {
    return isAuthenticated.value
  }

  return {
    currentUser,
    isAuthenticated,
    loading,
    initializing,
    login,
    logout,
    register,
    checkAuth,
    initAuth,
  }
}
