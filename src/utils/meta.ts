import { META } from './constants'

// Static accesses on purpose: destructuring `import.meta.env` wholesale makes
// Vite inline every VITE_* variable into the client bundle (see the note in
// constants.ts).
const VITE_NAME_FULL: string = import.meta.env.VITE_NAME_FULL ?? ''
const VITE_DESCRIPTION: string = import.meta.env.VITE_DESCRIPTION ?? ''
const VITE_APP_VERSION: string = import.meta.env.VITE_APP_VERSION ?? ''
const VITE_BUILD_DATE: string = import.meta.env.VITE_BUILD_DATE ?? ''

export const TITLE = `${VITE_NAME_FULL} | ${VITE_DESCRIPTION}`

export const APP_NAME = VITE_NAME_FULL

export const DESCRIPTION = VITE_DESCRIPTION

export const APP_VERSION = VITE_APP_VERSION

export const BUILD_DATE = VITE_BUILD_DATE

export const meta = {
  title: TITLE,
  meta: {
    description: {
      name: META.NAME.DESCRIPTION,
      content: VITE_DESCRIPTION,
    },
    keywords: {
      name: META.NAME.KEYWORDS,
      content: VITE_DESCRIPTION,
    },

    // if site to be done, remove this
    robots: {
      name: 'robots',
      content: 'noindex',
    },
    equiv: META.EQUIV,
    noscript: META.NOSCRIPT,
  },
}
