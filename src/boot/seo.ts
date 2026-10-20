import { boot } from 'quasar/wrappers' // keep; type resolved via @quasar/app-vite types

// Этот файл загружается при инициализации приложения
// и настраивает базовые SEO-функции

export default boot((bootContext: { app?: any }) => {
  const app = bootContext.app as any
  const g = app?.config?.globalProperties

  // Добавляем обработчик изменения маршрута для обновления канонического URL
  if (g) {
    g.$updateCanonicalUrl = (path: string) => {
      const existingCanonical = document.querySelector('link[rel="canonical"]')
      if (existingCanonical) {
        existingCanonical.remove()
      }
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = window.location.origin + path
      document.head.appendChild(link)
    }

    g.$addJsonLd = (jsonLd: object) => {
      const existingJsonLd = document.querySelector(
        'script[type="application/ld+json"]'
      )
      if (existingJsonLd) {
        existingJsonLd.remove()
      }
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }

  // Добавляем базовые структурированные данные для организации
  const { env } = import.meta

  const baseUrl =
    (env?.VITE_SITE_URL as string) || 'https://darqus.github.io/mylara'

  const orgName = (env?.VITE_NAME_FULL as string) || 'MYLARA'
  const orgDescription =
    (env?.VITE_DESCRIPTION as string) || 'Косметика по уходу за лицом'
  const orgLogo = `${baseUrl}/logo.svg`
  const orgStreetAddress =
    (env?.VITE_CONTACT_ADDRESS as string) ||
    'ул. Мещанская, д. 9/14, строение 1'
  const orgAddressLocality = (env?.VITE_ADDRESS_LOCALITY as string) || 'Москва'
  const orgPostalCode = (env?.VITE_POSTAL_CODE as string) || '129090'
  const orgAddressCountry = (env?.VITE_ADDRESS_COUNTRY as string) || 'RU'
  const orgTelephone = (env?.VITE_CONTACT_PHONE as string) || '+7-999-677-90-67'

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgName,
    description: orgDescription,
    url: baseUrl,
    logo: orgLogo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: orgStreetAddress,
      addressLocality: orgAddressLocality,
      postalCode: orgPostalCode,
      addressCountry: orgAddressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: orgTelephone,
      contactType: 'customer service',
    },
  }

  if (g && typeof g.$addJsonLd === 'function') {
    ;(g.$addJsonLd as (jsonLd: object) => void)(organizationJsonLd)
  }
})
