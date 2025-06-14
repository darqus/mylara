import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import { route, } from 'quasar/wrappers'

import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: (to, from, savedPosition) => {
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
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })

  // Обновляем канонический URL при изменении маршрута
  Router.afterEach((to) => {
    // Используем setTimeout для доступа к приложению после монтирования
    setTimeout(() => {
      // Получаем доступ к глобальным свойствам через app
      const appElement = document.querySelector('#q-app')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const app = (appElement as any)?.__vue_app__

      if (app?.config?.globalProperties?.$updateCanonicalUrl) {
        app.config.globalProperties.$updateCanonicalUrl(to.fullPath)
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
              ?.getAttribute('content') || '',
        }

        app.config.globalProperties.$addJsonLd(pageJsonLd)
      }
    }, 0)
  })

  return Router
})
