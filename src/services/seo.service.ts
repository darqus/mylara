import { META } from '@/utils/constants'
import { DESCRIPTION, TITLE } from '@/utils/meta'

export type MetaData = {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonicalUrl?: string
  robots?: string
}

export const DEFAULT_IMAGE = '/logo.svg'

// GitHub Pages project site is served from a sub-path (/mylara/), so absolute
// asset URLs must be prefixed with the router base (same value Quasar injects
// into build.publicPath / import.meta.env.BASE_URL).
const ROUTER_BASE = (
  import.meta.env.BASE_URL ||
  import.meta.env.VITE_ROUTER_BASE ||
  import.meta.env.VUE_ROUTER_BASE ||
  '/'
).replace(/\/$/, '')

export const BASE_URL =
  typeof window !== 'undefined' ? window.location.origin + ROUTER_BASE : ''

/**
 * Сервис для управления SEO метаданными
 */
export const SeoService = {
  /**
   * Установка метаданных для страницы
   */
  setMeta(metaData: MetaData = {}) {
    const meta = []
    const link = []

    // Базовые мета-теги
    const title = metaData.title ?? TITLE
    const description = metaData.description ?? DESCRIPTION
    const keywords = metaData.keywords ?? META.KEYWORDS

    // Добавляем базовые мета-теги
    meta.push(
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      }
    )

    // Добавляем robots мета-тег, если указан
    if (metaData.robots) {
      meta.push({
        name: 'robots',
        content: metaData.robots,
      })
    }

    // Open Graph мета-теги
    const ogTitle = metaData.ogTitle ?? title
    const ogDescription = metaData.ogDescription ?? description
    const ogImage = metaData.ogImage
      ? `${BASE_URL}${metaData.ogImage}`
      : `${BASE_URL}${DEFAULT_IMAGE}`
    const ogUrl = metaData.ogUrl ?? window.location.href

    meta.push(
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: ogTitle,
      },
      {
        property: 'og:description',
        content: ogDescription,
      },
      {
        property: 'og:image',
        content: ogImage,
      },
      {
        property: 'og:url',
        content: ogUrl,
      },
      {
        property: 'og:site_name',
        content: META.NAME.APP,
      }
    )

    // Twitter мета-теги
    const twitterCard = metaData.twitterCard ?? 'summary_large_image'
    const twitterTitle = metaData.twitterTitle ?? title
    const twitterDescription = metaData.twitterDescription ?? description
    const twitterImage = metaData.twitterImage
      ? `${BASE_URL}${metaData.twitterImage}`
      : ogImage

    meta.push(
      {
        name: 'twitter:card',
        content: twitterCard,
      },
      {
        name: 'twitter:title',
        content: twitterTitle,
      },
      {
        name: 'twitter:description',
        content: twitterDescription,
      },
      {
        name: 'twitter:image',
        content: twitterImage,
      }
    )

    // Canonical URL
    if (metaData.canonicalUrl) {
      link.push({
        rel: 'canonical',
        href: metaData.canonicalUrl.startsWith('http')
          ? metaData.canonicalUrl
          : `${BASE_URL}${metaData.canonicalUrl}`,
      })
    } else {
      link.push({
        rel: 'canonical',
        href: window.location.href,
      })
    }

    return {
      title,
      meta,
      link,
    }
  },
}

export default SeoService
