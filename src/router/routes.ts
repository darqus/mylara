import { type RouteRecordRaw } from 'vue-router'

import { ROUTE_PATH } from 'src/types/route-paths'
import { ROUTER_BASE } from 'src/utils/constants'

// import { ROUTER_BASE, } from 'src/utils/constants'

const routes: RouteRecordRaw[] = [
  {
    path: ROUTER_BASE,
    component: async () => await import('layouts/LandingLayout.vue'),
    children: [
      {
        path: '',
        component: async () => await import('pages/home/HomePage.vue'),
      },
      {
        path: ':catchAll(.*)*',
        component: async () =>
          await import('pages/error/ErrorNotFoundPage.vue'),
      },
    ],
  },
  {
    path: ROUTE_PATH.ADMIN,
    children: [
      {
        path: ROUTE_PATH.ADMIN_LOGIN.replace(`${ROUTE_PATH.ADMIN}/`, ''),
        component: async () => await import('pages/admin/AdminLoginPage.vue'),
      },
      {
        path: '',
        component: async () => await import('layouts/AdminLayout.vue'),
        children: [
          {
            path: '',
            component: async () =>
              await import('pages/admin/AdminDashboardPage.vue'),
          },
          {
            path: ROUTE_PATH.ADMIN_COLLECTION_PATTERN.replace(
              `${ROUTE_PATH.ADMIN}/`,
              ''
            ),
            component: async () =>
              await import('pages/admin/AdminCollectionPage.vue'),
          },
        ],
      },
    ],
  },
]

export default routes
