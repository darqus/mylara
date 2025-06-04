import { type RouteRecordRaw, } from 'vue-router'

import { APP_BASE, } from 'src/utils/constants'

const routes: RouteRecordRaw[] = [
  {
    path: APP_BASE,
    component: async () => await import('layouts/LandingLayout.vue'),
    children: [
      {
        path: APP_BASE,
        component: async () => await import('pages/home/HomePage.vue'),
      },
      {
        path: `${APP_BASE}:catchAll(.*)*`,
        children: [
          {
            path: '',
            component: async () =>
              await import('pages/error/ErrorNotFoundPage.vue'),
          },
        ],
      },
    ],
  },
]

export default routes
