import { ref, } from 'vue'

const isAuthenticated = ref(false)
const adminPassword = 'admin123' // В реальном проекте используйте более безопасную аутентификацию

/**
 * Composable для аутентификации в админке
 */
export function useAdminAuth() {
  /**
   * Проверка аутентификации
   */
  function checkAuth(): boolean {
    // Проверяем localStorage на наличие токена
    const token = localStorage.getItem('admin-token')

    if (token === 'authenticated') {
      isAuthenticated.value = true

      return true
    }

    return false
  }

  /**
   * Вход в админку
   */
  function login(password: string): boolean {
    if (password === adminPassword) {
      isAuthenticated.value = true
      localStorage.setItem('admin-token', 'authenticated')

      return true
    }

    return false
  }

  /**
   * Выход из админки
   */
  function logout() {
    isAuthenticated.value = false
    localStorage.removeItem('admin-token')
  }

  /**
   * Проверка при загрузке
   */
  function initAuth() {
    checkAuth()
  }

  return {
    isAuthenticated,
    login,
    logout,
    checkAuth,
    initAuth,
  }
}
