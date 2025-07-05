import type { MetaData } from 'src/services/seo.service'

import { VITE_DESCRIPTION, VITE_KEYWORDS } from './constants'

export const SEO_HOME: MetaData = {
  title: 'MYLARA | Косметика по уходу за лицом',
  description: VITE_DESCRIPTION,
  keywords: VITE_KEYWORDS,
  ogImage: '/logo.svg',
}

export const SEO_404: MetaData = {
  title: '404 | Страница не найдена | MYLARA',
  description: 'Запрашиваемая страница не найдена',
  robots: 'noindex, nofollow',
}
