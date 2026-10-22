/**
 * DOM side-effects for SEO tags.
 *
 * Kept outside of the Quasar boot file and the router so both can call the
 * same implementation without reaching into the Vue app instance
 * (`__vue_app__`) or waiting for a `setTimeout` tick.
 */

const CANONICAL_SELECTOR = 'link[rel="canonical"]'
const JSON_LD_SELECTOR = 'script[type="application/ld+json"]'

/**
 * Replaces the canonical link with the given href.
 *
 * @param href - Absolute or root-relative URL of the current page
 */
export function updateCanonicalUrl(href: string): void {
  if (typeof document === 'undefined') {
    return
  }

  document.querySelector(CANONICAL_SELECTOR)?.remove()

  const link = document.createElement('link')

  link.rel = 'canonical'
  link.href = href
  document.head.appendChild(link)
}

/**
 * Replaces the page-level JSON-LD script.
 *
 * @param jsonLd - Schema.org payload for the current page
 */
export function addJsonLd(jsonLd: object): void {
  if (typeof document === 'undefined') {
    return
  }

  document.querySelector(JSON_LD_SELECTOR)?.remove()

  const script = document.createElement('script')

  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(script)
}

/**
 * Builds the `Organization` structured data payload for the whole site.
 *
 * Values come from static `import.meta.env.VITE_*` reads (not dynamic key
 * access) so Vite can inline them and no unrelated env leaks into the bundle.
 */
export function buildOrganizationJsonLd(): object {
  const baseUrl =
    import.meta.env.VITE_SITE_URL ?? 'https://darqus.github.io/mylara'
  const orgName = import.meta.env.VITE_NAME_FULL ?? 'MYLARA'
  const orgDescription =
    import.meta.env.VITE_DESCRIPTION ?? 'Косметика по уходу за лицом'

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgName,
    description: orgDescription,
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        import.meta.env.VITE_CONTACT_ADDRESS ??
        'ул. Мещанская, д. 9/14, строение 1',
      addressLocality: import.meta.env.VITE_ADDRESS_LOCALITY ?? 'Москва',
      postalCode: import.meta.env.VITE_POSTAL_CODE ?? '129090',
      addressCountry: import.meta.env.VITE_ADDRESS_COUNTRY ?? 'RU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: import.meta.env.VITE_CONTACT_PHONE ?? '+7-999-677-90-67',
      contactType: 'customer service',
    },
  }
}

/**
 * Builds the `WebPage` structured data payload for the current document.
 */
export function buildPageJsonLd(url: string, title: string): object {
  const description =
    typeof document === 'undefined'
      ? ''
      : (document
          .querySelector('meta[name="description"]')
          ?.getAttribute('content') ?? '')

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    name: title,
    description,
  }
}
