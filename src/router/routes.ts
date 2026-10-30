import type { RouteRecordRaw } from 'vue-router'

import { ROUTE_PATH } from '@/types/route-paths'
import { ROUTER_BASE } from '@/utils/constants'

const routes: RouteRecordRaw[] = [
  {
    path: ROUTER_BASE,
    name: 'landing',
    component: async () => await import('@/layouts/LandingLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: async () => await import('@/pages/home/HomePage.vue'),
      },
      {
        path: ':catchAll(.*)*',
        name: 'not-found',
        component: async () =>
          await import('@/pages/error/ErrorNotFoundPage.vue'),
      },
    ],
  },
  {
    path: ROUTE_PATH.ADMIN,
    name: 'admin',
    children: [
      {
        path: ROUTE_PATH.ADMIN_LOGIN.replace(`${ROUTE_PATH.ADMIN}/`, ''),
        name: 'admin-login',
        component: async () => await import('@/pages/admin/AdminLoginPage.vue'),
      },
      {
        path: '',
        component: async () => await import('@/layouts/AdminLayout.vue'),
        children: [
          {
            path: '',
            name: 'admin-dashboard',
            component: async () =>
              await import('@/pages/admin/AdminDashboardPage.vue'),
          },
          {
            path: ROUTE_PATH.ADMIN_COLLECTION_PATTERN.replace(
              `${ROUTE_PATH.ADMIN}/`,
              ''
            ),
            name: 'admin-collection',
            component: async () =>
              await import('@/pages/admin/AdminCollectionPage.vue'),
          },
        ],
      },
    ],
  },
]

export default routes
