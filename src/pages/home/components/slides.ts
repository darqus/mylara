export type Slide = {
  id: number
  image: string
  title: string
}

export const slides: Slide[] = [
  {
    id: 1,
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
    title: 'Mountains',
  },
  {
    id: 2,
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    title: 'City',
  },
  {
    id: 3,
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    title: 'Technology',
  },
]
