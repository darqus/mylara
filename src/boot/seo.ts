import { boot, } from 'quasar/wrappers'

// Этот файл загружается при инициализации приложения
// и настраивает базовые SEO-функции

export default boot(({
  app, 
}) => {
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
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MYLARA',
    url: 'https://mylara.ru',
    logo: 'https://mylara.ru/logo.svg',
    description: 'Косметика по уходу за лицом',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Мещанская, д. 9/14, строение 1',
      addressLocality: 'Москва',
      postalCode: '129090',
      addressCountry: 'RU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-999-677-90-67',
      contactType: 'customer service',
    },
  }

  app.config.globalProperties.$addJsonLd(organizationJsonLd)
})
