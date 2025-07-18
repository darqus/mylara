// https://wiki.mylara.ru/pages/viewpage.action?pageId=63963614

// Безопасное получение переменных окружения
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  return import.meta?.env?.[key] ?? defaultValue
}

const VITE_NAME_FULL = getEnvVar('VITE_NAME_FULL', 'MYLARA')
const VITE_REDIRECT_PATH = getEnvVar('VITE_REDIRECT_PATH', '')
const VITE_REDIRECT_PATH_DEV = getEnvVar('VITE_REDIRECT_PATH_DEV', '')

export const VITE_DESCRIPTION = getEnvVar('VITE_DESCRIPTION', '')

export const VITE_KEYWORDS = getEnvVar('VITE_KEYWORDS', '')

export const ROUTER_BASE = getEnvVar('VITE_ROUTER_BASE', '/')

export const APP_BASE = getEnvVar('VITE_APP_BASE', '/')

export const API_HOST = getEnvVar('VITE_API_HOST', '')

export const API_BASE_HOST = getEnvVar('VITE_API_BASE_HOST', '')

// Версия приложения
export const APP_VERSION = getEnvVar('VITE_APP_VERSION', '0.1.39')

export const NO_IMG = 'img/no-image.svg'

export const COMPONENT_KEY_DELIMITER = '-'

export const OFFSET_POPUP_PROXY = [ 0, 5 ]

export const CURRENT_YEAR = new Date().getFullYear()

export const ID_PREFIX = '#'

export const REDIRECT_PATH =
  process.env.NODE_ENV === 'production'
    ? VITE_REDIRECT_PATH
    : VITE_REDIRECT_PATH_DEV

const getPhoneLink = (str: string) => `tel:${str.replace(/\\D/g, '')}`

export const PHONES = {
  HOT_LINE: {
    LABEL: '+7 999 677-90-67',
    LINK: getPhoneLink('+7 999 677-90-67'), // tel:9996779067
  },
}

export const DOMAIN = 'mylara.ru'

const getEmailLabel = (str: string) => `${str}@${DOMAIN}`
const getEmailLink = (str: string) => `mailto:${getEmailLabel(str)}`

export const getLink = (str: string) => `https://${DOMAIN}/${str}`

export const EMAILS = {
  INFO: {
    LABEL: getEmailLabel('info'), // info@mylara.ru
    LINK: getEmailLink('info'), // mailto:info@mylara.ru
  },
  SUPPORT: {
    LABEL: getEmailLabel('support'), // support@mylara.ru
    LINK: getEmailLink('support'), // mailto:support@mylara.ru
  },
}

export const SOCIALS = {
  VK: 'https://vk.com/mylara',
  TELEGRAM: 'https://t.me/mylara',
}

export const LINKS = {
  PRIVACY: {
    LABEL: 'Политика конфиденциальности',
    LINK: getLink('privacy-policy'),
  },
  TERMS: {
    LABEL: 'Условия использования',
    LINK: getLink('site_terms'),
  },
  ENTERPRISE: {
    LABEL: 'Для бизнеса',
    LINK: getLink('enterprise'),
  },
  OFFER: {
    LABEL: 'Оферта',
    LINK: getLink('offer'),
  },
  ADDRESS: {
    LABEL: '129090, Москва, ул. Мещанская, д. 9/14, строение 1',
    LINK: 'https://www.google.com/maps/place/%D0%9C%D0%B5%D1%89%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+9%2F14+%D1%81%D1%82%D1%80.1,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+129090/@55.7762848,37.6265983,19z/data=!3m1!4b1!4m6!3m5!1s0x46b54a6d9742cab3:0xc7d4a5303b54fdaa!8m2!3d55.776284!4d37.627242!16s%2Fg%2F11q2n7wr2v?entry=ttu',
  },
}

// https://dadata.ru/find/party/1197746540155/
export const COMPANY_DETAILS = {
  OGRN: '1197746540155',
  INN: '7743314440',
}

export const COPYRIGHTS = `© 2019-${CURRENT_YEAR} mylara. Все права защищены`

export const PRIVACY_POLICY = {
  LABEL: 'Политика конфиденциальности',
  LINK: 'https://mylara.ru/site_privacy',
}

export const TERMS_OF_USE = {
  LABEL: 'Условия использования',
  LINK: 'https://mylara.ru/site_terms',
}

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
