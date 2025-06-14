import type { MetaData, } from 'src/services/seo.service'

export const SEO_HOME: MetaData = {
  title: 'MYLARA | Косметика по уходу за лицом',
  description:
    'Инновационная косметика по уходу за лицом от MYLARA. Натуральные ингредиенты и эффективные формулы для вашей красоты.',
  keywords: 'косметика, уход за лицом, натуральная косметика, MYLARA, красота',
  ogImage: '/logo.svg',
}

export const SEO_404: MetaData = {
  title: '404 | Страница не найдена | MYLARA',
  description: 'Запрашиваемая страница не найдена',
  robots: 'noindex, nofollow',
}
