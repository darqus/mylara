// NOTE: env access here MUST stay static (`import.meta.env.VITE_X`).
// Dynamic access (`import.meta.env[key]`, spreading or destructuring the whole
// object) stops Vite from replacing values at build time and forces the ENTIRE
// client env (every VITE_* variable, including dev-only secrets) into the
// bundle. Verified with a prod build: the whole env object was inlined into
// dist/spa/assets/constants-*.js until this was fixed.
const VITE_NAME_FULL: string = import.meta.env.VITE_NAME_FULL ?? 'MYLARA'

export const VITE_DESCRIPTION: string = import.meta.env.VITE_DESCRIPTION ?? ''

export const VITE_KEYWORDS: string = import.meta.env.VITE_KEYWORDS ?? ''

export const ROUTER_BASE: string = import.meta.env.VITE_ROUTER_BASE ?? '/'

// Версия приложения (задаётся через rawDefine в quasar.config.ts)
export const APP_VERSION =
  typeof VITE_APP_VERSION !== 'undefined' ? VITE_APP_VERSION : '0.1.56'

// Public URL of the site. The former mylara.ru domain is retired
// (it does not resolve in DNS anymore), the site lives on GitHub Pages.
export const SITE_URL = 'https://darqus.github.io/mylara'

export const getLink = (str: string) => `${SITE_URL}/${str}`

export const META = {
  NAME: {
    APP: VITE_NAME_FULL,
    DESCRIPTION: 'description',
    KEYWORDS: 'keywords',
  },
  TITLE: VITE_NAME_FULL,
  KEYWORDS: VITE_KEYWORDS,
  NOSCRIPT: {
    default: 'Это содержимое для браузеров без JS (или с отключенным JS)',
  },
  EQUIV: {
    'http-equiv': 'Content-Type',
    content: 'text/html; charset=UTF-8',
  },
}
