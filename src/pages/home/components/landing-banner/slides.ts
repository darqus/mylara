export type Slide = {
  id: number
  img: string
  title: string
  subtitle: string
}

export const slides: Slide[] = [
  {
    id: 1,
    img: 'https://cdn.quasar.dev/img/mountains.jpg',
    title: 'Mountains',
    subtitle: 'Majestic peaks and valleys',
  },
  {
    id: 2,
    img: 'https://cdn.quasar.dev/img/parallax1.jpg',
    title: 'City',
    subtitle: 'Urban landscapes and architecture',
  },
  {
    id: 3,
    img: 'https://cdn.quasar.dev/img/parallax2.jpg',
    title: 'Technology',
    subtitle: 'Innovation and advancement',
  },
]
