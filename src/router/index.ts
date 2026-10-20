import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

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

  // Обновляем канонический URL при изменении маршрута
  Router.afterEach((to) => {
    // Используем setTimeout для доступа к приложению после монтирования
    setTimeout(() => {
      // Получаем доступ к глобальным свойствам через app
      const appElement = document.querySelector('#q-app')
      // biome-ignore lint/suspicious/noExplicitAny: Vue app instance is not typed on the DOM node
      const app = (appElement as any)?.__vue_app__

      if (app?.config?.globalProperties?.$updateCanonicalUrl) {
        // Router.resolve() returns the href including the history base (/mylara/)
        app.config.globalProperties.$updateCanonicalUrl(
          Router.resolve(to.fullPath).href
        )
      }

      // Добавляем базовые структурированные данные для страницы
      if (app?.config?.globalProperties?.$addJsonLd) {
        const pageJsonLd = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          url: window.location.href,
          name: document.title,
          description:
            document
              .querySelector('meta[name="description"]')
              ?.getAttribute('content') ?? '',
        }

        app.config.globalProperties.$addJsonLd(pageJsonLd)
      }
    }, 0)
  })

  return Router
})
