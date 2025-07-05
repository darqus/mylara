import { watch, } from 'vue'
import type {
  NavigationGuardNext, RouteLocationNormalized, 
} from 'vue-router'

import { useAdminAuth, } from 'src/composables/useAdminAuth'

/**
 * Auth guard for admin routes
 * Uses static import since useAdminAuth is already loaded in App.vue
 */
export function adminAuthGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
): void {
  // Проверяем, является ли маршрут админским (кроме логина)
  if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
    const {
      isAuthenticated, initializing, 
    } = useAdminAuth()

    // Если еще идет инициализация, ждем ее завершения
    if (initializing.value) {
      // Используем watch для ожидания завершения инициализации
      const unwatch = watch(
        () => initializing.value,
        (isInitializing) => {
          if (!isInitializing) {
            unwatch()
            if (isAuthenticated.value) {
              next()
            } else {
              next({
                path: '/admin/login',
                query: {
                  redirect: to.path === '/admin' ? '/admin' : to.fullPath,
                },
              })
            }
          }
        },
        {
          immediate: false,
        }
      )

      return
    }

    // Если инициализация завершена, проверяем аутентификацию
    if (!isAuthenticated.value) {
      next({
        path: '/admin/login',
        query: {
          redirect: to.path === '/admin' ? '/admin' : to.fullPath,
        },
      })

      return
    }
  }

  next()
}
