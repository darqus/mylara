import { boot } from 'quasar/wrappers'

// Этот файл загружается при инициализации приложения
// и настраивает базовые SEO-функции

export default boot(({ app }) => {
  // Добавляем обработчик изменения маршрута для обновления канонического URL
  app.config.globalProperties.$updateCanonicalUrl = (path: string) => {
    // Удаляем старый канонический URL, если он существует
    const existingCanonical = document.querySelector('link[rel="canonical"]')

    if (existingCanonical) {
      existingCanonical.remove()
    }

    // Создаем новый канонический URL
    const link = document.createElement('link')

    link.rel = 'canonical'
    link.href = window.location.origin + path
    document.head.appendChild(link)
  }

  // Добавляем обработчик для структурированных данных JSON-LD
  app.config.globalProperties.$addJsonLd = (jsonLd: object) => {
    // Удаляем старые данные JSON-LD, если они существуют
    const existingJsonLd = document.querySelector(
      'script[type="application/ld+json"]'
    )

    if (existingJsonLd) {
      existingJsonLd.remove()
    }

    // Добавляем новые данные JSON-LD
    const script = document.createElement('script')

    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
  }

  // Добавляем базовые структурированные данные для организации
  const { env } = import.meta

  const httpsProtocol = (env?.VITE_HTTPS_PROTOCOL as string) || 'https:'
  const domain = (env?.VITE_DOMAIN as string) || 'mylara.ru'
  const baseUrl = `${httpsProtocol}//${domain}`

  const orgName = (env?.VITE_NAME_FULL as string) || 'MYLARA'
  const orgDescription =
    (env?.VITE_DESCRIPTION as string) || 'Косметика по уходу за лицом'
  const orgLogo = `${baseUrl}/logo.svg`
  const orgStreetAddress =
    (env?.VITE_CONTACT_ADDRESS as string) ||
    'ул. Мещанская, д. 9/14, строение 1'
  const orgAddressLocality =
    (env?.VITE_ADDRESS_LOCALITY as string) || 'Москва'
  const orgPostalCode = (env?.VITE_POSTAL_CODE as string) || '129090'
  const orgAddressCountry = (env?.VITE_ADDRESS_COUNTRY as string) || 'RU'
  const orgTelephone = (env?.VITE_CONTACT_PHONE as string) || '+7-999-677-90-67'

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgName,
    url: baseUrl,
    logo: orgLogo,
    description: orgDescription,
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

  app.config.globalProperties.$addJsonLd(organizationJsonLd)
})
