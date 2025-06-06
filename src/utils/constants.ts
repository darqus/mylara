// https://wiki.mylara.ru/pages/viewpage.action?pageId=63963614

const {
  VITE_NAME_FULL, VITE_REDIRECT_PATH, VITE_REDIRECT_PATH_DEV, VITE_KEYWORDS,
} = import.meta.env

export const {
  VITE_ROUTER_BASE: ROUTER_BASE,
} = import.meta.env

export const {
  VITE_APP_BASE: APP_BASE,
} = import.meta.env

export const {
  VITE_API_HOST: API_HOST,
} = import.meta.env

export const {
  VITE_API_BASE_HOST: API_BASE_HOST,
} = import.meta.env

export const NO_IMG = 'img/no-image.svg'

export const COMPONENT_KEY_DELIMITER = '-'

export const OFFSET_POPUP_PROXY = [ 0, 5, ]

export const CURRENT_YEAR = new Date().getFullYear()

export const ID_PREFIX = '#'

export const REDIRECT_PATH =
  process.env.NODE_ENV === 'production'
    ? VITE_REDIRECT_PATH
    : VITE_REDIRECT_PATH_DEV

const getPhoneLink = (str: string) => `tel:${str.replace(/\D/g, '')}`

export const PHONES = {
  HOT_LINE: {
    LABEL: '+7 495 648-66-73',
    LINK: getPhoneLink('+7 495 648-66-73'), // tel:74956486673
  },

  /* FREE_CALL: {
    LABEL: '8 800 123-45-67',
    LINK: getPhoneLink('8 800 123-45-67'), // tel:88001234567
  }, */
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
  VK: 'https://vk.com/mylaraiva',
  TELEGRAM: 'https://t.me/ivauc',
  RUTUBE: 'https://rutube.ru/channel/46755972/',
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
