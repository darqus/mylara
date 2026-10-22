import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import { addJsonLd, buildPageJsonLd, updateCanonicalUrl } from '@/utils/seo-dom'

import { adminAuthGuard } from './guards/auth'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route((/* { store, ssrContext } */) => {
  const createHistory = import.meta.env.QUASAR_SERVER
    ? createMemoryHistory
    : import.meta.env.VUE_ROUTER_MODE === 'history' ||
        import.meta.env.VITE_ROUTER_MODE === 'history' ||
        import.meta.env.DEV
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: (_to, _from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          left: 0,
          top: 0,
        }
      }
    },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      import.meta.env.BASE_URL ||
        import.meta.env.VITE_ROUTER_BASE ||
        import.meta.env.VUE_ROUTER_BASE ||
        '/'
    ),
  })

  // Добавляем navigation guard для защиты админских маршрутов
  Router.beforeEach(adminAuthGuard)

  // Обновляем канонический URL и структурированные данные при смене маршрута.
  // Router.resolve() возвращает href с учётом history base (/mylara/).
  Router.afterEach((to) => {
    const href = Router.resolve(to.fullPath).href

    updateCanonicalUrl(new URL(href, window.location.origin).href)
    addJsonLd(buildPageJsonLd(window.location.href, document.title))
  })

  return Router
})
