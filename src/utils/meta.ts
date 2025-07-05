import { META } from './constants'

const {
  VITE_NAME_FULL, VITE_DESCRIPTION, VITE_APP_VERSION, VITE_BUILD_DATE
} =
  import.meta.env

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

export const META_UI_KIT = {
  title: `${META.TITLE} - UI Kit`,
  meta: {
    description: {
      name: META.NAME.DESCRIPTION,
      content: `${META.TITLE} - UI Kit`,
    },
    keywords: {
      name: META.NAME.KEYWORDS,
      content: META.KEYWORDS,
    },
    equiv: META.EQUIV,
  },
  noscript: META.NOSCRIPT,
}

export const META_BLOGS = {
  title: `${META.TITLE} - Blogs`,
  meta: {
    description: {
      name: META.NAME.DESCRIPTION,
      content: `${META.TITLE} - Blogs`,
    },
    keywords: {
      name: META.NAME.KEYWORDS,
      content: META.KEYWORDS,
    },
    equiv: META.EQUIV,
  },
  noscript: META.NOSCRIPT,
}
