export type Card = {
  id: number;
  imgLink: string;
  description: string;
  externalLink: string;
}

export const LANDING_CARDS: Card[] = [
  {
    id: 1,
    imgLink: 'https://cdn.quasar.dev/img/mountains.jpg',
    description: 'Красивые горы и природа',
    externalLink: 'https://example.com/mountains',
  },
  {
    id: 2,
    imgLink: 'https://cdn.quasar.dev/img/parallax1.jpg',
    description: 'Городской пейзаж',
    externalLink: 'https://example.com/city',
  },
  {
    id: 3,
    imgLink: 'https://cdn.quasar.dev/img/parallax2.jpg',
    description: 'Технологии будущего',
    externalLink: 'https://example.com/tech',
  },
  {
    id: 4,
    imgLink: 'https://cdn.quasar.dev/img/parallax2.jpg',
    description: 'Тропический пляж',
    externalLink: 'https://example.com/beach',
  },
  {
    id: 5,
    imgLink: 'https://cdn.quasar.dev/img/mountains.jpg',
    description: 'Зеленый лес',
    externalLink: 'https://example.com/forest',
  },
  {
    id: 6,
    imgLink: 'https://cdn.quasar.dev/img/parallax1.jpg',
    description: 'Песчаная пустыня',
    externalLink: 'https://example.com/desert',
  },
]
