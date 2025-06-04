export type Slide = {
  id: number
  image: string
  title: string
  subtitle: string
}

export const slides: Slide[] = [
  {
    id: 1,
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
    title: 'Mountains',
    subtitle: 'Majestic peaks and valleys',
  },
  {
    id: 2,
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    title: 'City',
    subtitle: 'Urban landscapes and architecture',
  },
  {
    id: 3,
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    title: 'Technology',
    subtitle: 'Innovation and advancement',
  },
]
