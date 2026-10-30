import type { User } from 'firebase/auth'

import {
  createUserWithEmailAndPassword,
  getIdTokenResult,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { computed, ref } from 'vue'

import { getFirebaseAuth } from '@/services/firebase'

type AuthResult = {
  success: boolean
  error?: string
  /**
   * True when the dev-only fallback signed the user in instead of Firebase.
   * A mock user has no real Firebase session, so Firestore writes stay
   * blocked (firestore.service requires auth.currentUser).
   */
  devFallback?: boolean
}

// Используем отложенную инициализацию для избежания проблем с hoisting
function createState() {
  return {
    currentUser: ref<User | null>(null),
    loading: ref(false),
    initializing: ref(true),
    isAdmin: ref(false),
  }
}

let state: ReturnType<typeof createState> | null = null

/**
 * Single in-flight initialization promise.
 *
 * Every consumer (router guard, App.vue, layouts, pages) awaits the same
 * promise instead of watching `initializing` on its own. That removes the
 * class of bugs where two places each "wait for auth" and fire duplicate
 * redirects or duplicate navigation guards.
 */
let readiness: Promise<void> | null = null

/**
 * Reads the `admin` custom claim and mirrors it into `isAdmin`.
 *
 * Module-scoped because it is needed both by the initial handshake inside
 * `whenReady()` and by `login()`/`register()` after a fresh sign-in.
 */
async function refreshAdminClaim(
  user: User | null,
  isAdmin: { value: boolean }
): Promise<void> {
  if (!user) {
    isAdmin.value = false

    return
  }

  try {
    const tokenResult = await getIdTokenResult(user)
    isAdmin.value = tokenResult.claims.admin === true
  } catch (error) {
    console.error('Failed to get token claims:', error)
    isAdmin.value = false
  }
}

/**
 * Resolves once the initial Firebase auth state has settled.
 *
 * Idempotent: the first call starts `onAuthStateChanged`, later calls reuse the
 * same promise. Never rejects — auth failures still count as "settled".
 * This is the ONLY place that subscribes to Firebase auth, so no consumer can
 * accidentally install a second listener or a second redirect.
 */
function whenReady(): Promise<void> {
  readiness ??= new Promise<void>((resolve) => {
    state ??= createState()

    const { currentUser, loading, initializing, isAdmin } = state
    const auth = getFirebaseAuth()

    if (!auth) {
      console.warn('Firebase Auth не инициализирован')
      initializing.value = false
      resolve()

      return
    }

    let settled = false

    const settle = (user: User | null) => {
      if (settled) {
        return
      }

      settled = true
      currentUser.value = user
      loading.value = false
      initializing.value = false
      resolve()
    }

    onAuthStateChanged(auth, (user) => {
      settle(user)
      // Keep `isAdmin` in sync on every later change (refresh, sign-out),
      // not only during the first handshake.
      void refreshAdminClaim(user, isAdmin)
    })
  })

  return readiness
}

/**
 * Composable для аутентификации в админке через Firebase Auth
 */
export function useAdminAuth() {
  // Инициализируем состояние только при первом вызове
  state ??= createState()

  const { currentUser, loading, initializing, isAdmin } = state
  const isAuthenticated = computed(
    () => currentUser.value !== null && isAdmin.value
  )

  /**
   * Инициализация слежения за состоянием аутентификации.
   *
   * Тонкая обёртка над `whenReady()` — оставлена для обратной совместимости
   * (App.vue). Повторные вызовы безопасны: слушатель подписывается один раз.
   */
  function initAuth(): Promise<void> {
    return whenReady()
  }

  /**
   * Вход в админку через email и пароль
   */
  async function login(email: string, password: string): Promise<AuthResult> {
    // Dev-only fallback: a matching pair from VITE_DEV_ADMIN_* (stored in
    // .env.local) signs a mock user in without talking to Firebase.
    // It exists to keep local UI work possible while the real admin account
    // is being set up (see docs/admin-claim.md).
    if (import.meta.env.DEV) {
      const devEmail = import.meta.env.VITE_DEV_ADMIN_EMAIL as
        | string
        | undefined
      const devPass = import.meta.env.VITE_DEV_ADMIN_PASSWORD as
        | string
        | undefined
      if (devEmail && devPass && email === devEmail && password === devPass) {
        // Создаем минимальный мок-пользователь для dev-режима
        const mockUser = {
          uid: 'dev-admin',
          email: devEmail,
          getIdTokenResult: async () => ({ claims: { admin: true } }),
        } as unknown as User

        console.warn(
          '[admin] Dev fallback login: no real Firebase session, ' +
            'Firestore writes will be rejected'
        )

        currentUser.value = mockUser
        isAdmin.value = true
        loading.value = false

        return { success: true, devFallback: true }
      }
    }

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
      await refreshAdminClaim(userCredential.user, isAdmin)

      if (!isAdmin.value) {
        await signOut(auth)
        currentUser.value = null
        isAdmin.value = false

        return {
          success: false,
          error: 'Доступ запрещен. У пользователя нет прав администратора',
        }
      }

      return { success: true }
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

          // Firebase merges "unknown user" and "wrong password" into one code
          // (email enumeration protection), so the two cannot be told apart.
          case 'auth/invalid-credential':
            errorMessage = 'Неверный email или пароль, либо аккаунт не найден'
            break

          case 'auth/operation-not-allowed':
            errorMessage = 'Вход по email/паролю отключён в настройках Firebase'
            break

          case 'auth/network-request-failed':
            errorMessage = 'Нет связи с Firebase. Проверьте соединение'
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

      return { success: true }
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

      return { success: true }
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

  return {
    currentUser,
    isAuthenticated,
    isAdmin,
    loading,
    initializing,
    login,
    logout,
    register,
    initAuth,
    whenReady,
  }
}

/**
 * Resolves once the initial Firebase auth state has settled.
 *
 * Exported at module level so the router guard can `await` it without
 * instantiating reactive state or subscribing to anything itself.
 */
export { whenReady }
