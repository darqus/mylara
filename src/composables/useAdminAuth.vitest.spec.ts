import { beforeEach, describe, expect, it, vi } from 'vitest'

const firebaseAuthMock = vi.hoisted(() => ({
  createUserWithEmailAndPassword: vi.fn(),
  getIdTokenResult: vi.fn(),
  onAuthStateChanged: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}))

vi.mock('firebase/auth', () => firebaseAuthMock)

const getFirebaseAuthMock = vi.hoisted(() => vi.fn())

vi.mock('@/services/firebase', () => ({
  getFirebaseAuth: getFirebaseAuthMock,
}))

// The composable keeps a module-level singleton (state), so every test loads
// a fresh module instance to avoid leaking auth state between tests.
async function loadComposable() {
  vi.resetModules()
  const module = await import('./useAdminAuth')

  return module.useAdminAuth()
}

describe('useAdminAuth', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.unstubAllEnvs()
  })

  describe('login: dev fallback', () => {
    it('signs a mock admin in when the VITE_DEV_ADMIN_* pair matches', async () => {
      vi.stubEnv('VITE_DEV_ADMIN_EMAIL', 'dev-admin@example.com')
      vi.stubEnv('VITE_DEV_ADMIN_PASSWORD', 'dev-password')
      getFirebaseAuthMock.mockReturnValue(null)

      const { login, isAdmin, isAuthenticated } = await loadComposable()
      const result = await login('dev-admin@example.com', 'dev-password')

      expect(result).toEqual({ success: true, devFallback: true })
      expect(isAdmin.value).toBe(true)
      expect(isAuthenticated.value).toBe(true)
      expect(firebaseAuthMock.signInWithEmailAndPassword).not.toHaveBeenCalled()
    })

    it('falls through to Firebase when the pair does not match', async () => {
      vi.stubEnv('VITE_DEV_ADMIN_EMAIL', 'dev-admin@example.com')
      vi.stubEnv('VITE_DEV_ADMIN_PASSWORD', 'dev-password')
      getFirebaseAuthMock.mockReturnValue({})
      firebaseAuthMock.signInWithEmailAndPassword.mockRejectedValue({
        code: 'auth/invalid-credential',
      })

      const { login } = await loadComposable()
      const result = await login('someone@example.com', 'wrong-password')

      expect(result.success).toBe(false)
      expect(result.error).toBe(
        'Неверный email или пароль, либо аккаунт не найден'
      )
      expect(firebaseAuthMock.signInWithEmailAndPassword).toHaveBeenCalled()
    })

    it('falls through to Firebase when no dev credentials are configured', async () => {
      vi.stubEnv('VITE_DEV_ADMIN_EMAIL', '')
      vi.stubEnv('VITE_DEV_ADMIN_PASSWORD', '')
      getFirebaseAuthMock.mockReturnValue({})
      firebaseAuthMock.signInWithEmailAndPassword.mockRejectedValue({
        code: 'auth/invalid-credential',
      })

      const { login } = await loadComposable()
      const result = await login('dev-admin@example.com', 'dev-password')

      expect(result.success).toBe(false)
    })
  })

  describe('login: Firebase', () => {
    it('succeeds when the admin claim is present', async () => {
      const auth = {}
      const user = { uid: 'user-1' }

      getFirebaseAuthMock.mockReturnValue(auth)
      firebaseAuthMock.signInWithEmailAndPassword.mockResolvedValue({ user })
      firebaseAuthMock.getIdTokenResult.mockResolvedValue({
        claims: { admin: true },
      })

      const { login, isAuthenticated } = await loadComposable()
      const result = await login('admin@example.com', 'password')

      expect(result).toEqual({ success: true })
      expect(isAuthenticated.value).toBe(true)
      expect(firebaseAuthMock.signOut).not.toHaveBeenCalled()
    })

    it('signs the user out when the admin claim is missing', async () => {
      const auth = {}
      const user = { uid: 'user-1' }

      getFirebaseAuthMock.mockReturnValue(auth)
      firebaseAuthMock.signInWithEmailAndPassword.mockResolvedValue({ user })
      firebaseAuthMock.getIdTokenResult.mockResolvedValue({ claims: {} })

      const { login, isAuthenticated } = await loadComposable()
      const result = await login('user@example.com', 'password')

      expect(result.success).toBe(false)
      expect(result.error).toContain('нет прав администратора')
      expect(firebaseAuthMock.signOut).toHaveBeenCalledWith(auth)
      expect(isAuthenticated.value).toBe(false)
    })

    it('maps auth/invalid-credential to a friendly message', async () => {
      getFirebaseAuthMock.mockReturnValue({})
      firebaseAuthMock.signInWithEmailAndPassword.mockRejectedValue({
        code: 'auth/invalid-credential',
      })

      const { login } = await loadComposable()
      const result = await login('admin@example.com', 'bad-password')

      expect(result.success).toBe(false)
      expect(result.error).toBe(
        'Неверный email или пароль, либо аккаунт не найден'
      )
    })

    it('maps auth/operation-not-allowed to a friendly message', async () => {
      getFirebaseAuthMock.mockReturnValue({})
      firebaseAuthMock.signInWithEmailAndPassword.mockRejectedValue({
        code: 'auth/operation-not-allowed',
      })

      const { login } = await loadComposable()
      const result = await login('admin@example.com', 'password')

      expect(result.error).toBe(
        'Вход по email/паролю отключён в настройках Firebase'
      )
    })

    it('reports an error when Firebase Auth is not initialized', async () => {
      getFirebaseAuthMock.mockReturnValue(null)

      const { login } = await loadComposable()
      const result = await login('admin@example.com', 'password')

      expect(result).toEqual({
        success: false,
        error: 'Firebase Auth не инициализирован',
      })
    })
  })
})
