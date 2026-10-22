import type { NavigationGuardWithThis } from 'vue-router'
import { useAdminAuth, whenReady } from '@/composables/useAdminAuth'
import { ROUTE_PATH } from '@/types/route-paths'

const ADMIN_PATH = String(ROUTE_PATH.ADMIN)
const ADMIN_LOGIN_PATH = String(ROUTE_PATH.ADMIN_LOGIN)

/**
 * Auth guard for admin routes.
 *
 * Any route under `/admin` except the login page itself requires an
 * authenticated admin. This is the ONLY auth gate in the app:
 *
 * - initialization is awaited through the shared `whenReady()` promise instead
 *   of watching `initializing` (a hard reload makes Firebase emit
 *   `onAuthStateChanged` asynchronously, so a snapshot check would race);
 * - `AdminLayout` and `AdminLoginPage` do NOT duplicate this check, so each
 *   navigation is validated exactly once.
 */
export const adminAuthGuard: NavigationGuardWithThis<undefined> = async (
  to
) => {
  const isAdminRoute =
    to.path.startsWith(ADMIN_PATH) && to.path !== ADMIN_LOGIN_PATH

  if (!isAdminRoute) {
    return true
  }

  await whenReady()

  const { isAuthenticated } = useAdminAuth()

  if (isAuthenticated.value) {
    return true
  }

  return {
    path: ADMIN_LOGIN_PATH,
    query: {
      redirect: to.path === ADMIN_PATH ? ADMIN_PATH : to.fullPath,
    },
  }
}
