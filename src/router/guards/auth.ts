import { watch } from 'vue'

import { useAdminAuth } from 'src/composables/useAdminAuth'
import { ROUTE_PATH } from 'src/types/route-paths'

import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

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
  if (
    to.path.startsWith(String(ROUTE_PATH.ADMIN)) &&
    to.path !== String(ROUTE_PATH.ADMIN_LOGIN)
  ) {
    const { isAuthenticated, initializing } = useAdminAuth()

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
                path: String(ROUTE_PATH.ADMIN_LOGIN),
                query: {
                  redirect:
                    to.path === String(ROUTE_PATH.ADMIN)
                      ? String(ROUTE_PATH.ADMIN)
                      : to.fullPath,
                },
              })
            }
          }
        },
        { immediate: false }
      )

      return
    }

    // Если инициализация завершена, проверяем аутентификацию
    if (!isAuthenticated.value) {
      next({
        path: String(ROUTE_PATH.ADMIN_LOGIN),
        query: {
          redirect:
            to.path === String(ROUTE_PATH.ADMIN)
              ? String(ROUTE_PATH.ADMIN)
              : to.fullPath,
        },
      })

      return
    }
  }

  next()
}
