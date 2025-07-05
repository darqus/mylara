import type { CollectionConfig } from 'src/types/admin'

/**
 * Конфигурация коллекций для админки
 */
export const collectionsConfig: Record<string, CollectionConfig> = {
  // Коллекция carousel из carousel.service.ts
  carousel: {
    name: 'carousel',
    label: 'Продукты',
    icon: 'o_inventory_2',
    searchable: true,
    sortable: true,
    fields: [
      {
        name: 'img',
        label: 'Изображение',
        type: 'image',
        required: true,
        placeholder: 'Загрузите изображение продукта',
        imageOptions: {
          maxSizeKB: 3000, // 3MB
          allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
          path: 'carousel',
        },
      },
      {
        name: 'info',
        label: 'Информация',
        type: 'text',
        required: true,
        placeholder: 'Инновационные технологические решения завтрашнего дня',
      },
      {
        name: 'label',
        label: 'Название продукта',
        type: 'textarea',
        required: true,
        placeholder:
          'Крем - гель подтягивающий для век с ботулоподобным нейропептидом, 30 мл аромат Blanche (по мотивам BYREDO BLANCHE)',
      },
      {
        name: 'link',
        label: 'Ссылка',
        type: 'url',
        required: true,
        placeholder: 'https://example.com/tech',
      },
    ],
    columns: [
      {
        name: 'img',
        label: 'Изображение',
        field: 'img',
        align: 'center',
        sortable: false,
        format: (val: unknown) => (val ? (val as string) : ''),
      },
      {
        name: 'info',
        label: 'Информация',
        field: 'info',
        required: true,
        align: 'left',
        sortable: true,
        format: (val: unknown) => {
          const str = String(val)

          return str.length > 35 ? str.substring(0, 35) + '...' : str
        },
      },
      {
        name: 'label',
        label: 'Название',
        field: 'label',
        required: true,
        align: 'left',
        sortable: true,
        format: (val: unknown) => {
          const str = String(val)

          return str.length > 30 ? str.substring(0, 30) + '...' : str
        },
      },
      {
        name: 'link',
        label: 'Ссылка',
        field: 'link',
        align: 'center',
        sortable: false,
        format: (val: unknown) => (val ? '🔗' : ''),
      },
      {
        name: 'actions',
        label: 'Действия',
        field: 'actions',
        align: 'center',
      },
    ],
  },

  // Коллекция slides из slides.service.ts
  slides: {
    name: 'slides',
    label: 'Слайды',
    icon: 'slideshow',
    searchable: true,
    sortable: true,
    fields: [
      {
        name: 'img',
        label: 'Изображение',
        type: 'image',
        required: true,
        placeholder: 'Загрузите изображение слайда',
        imageOptions: {
          maxSizeKB: 3000, // 3MB
          allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
          path: 'slides',
        },
      },
      {
        name: 'title',
        label: 'Заголовок',
        type: 'text',
        required: true,
        placeholder: 'Mountains3',
      },
      {
        name: 'subtitle',
        label: 'Подзаголовок',
        type: 'text',
        required: true,
        placeholder: 'Majestic peaks and valleys',
      },
    ],
    columns: [
      {
        name: 'img',
        label: 'Изображение',
        field: 'img',
        align: 'center',
        sortable: false,
        format: (val: unknown) => (val ? (val as string) : ''),
      },
      {
        name: 'title',
        label: 'Заголовок',
        field: 'title',
        required: true,
        align: 'left',
        sortable: true,
      },
      {
        name: 'subtitle',
        label: 'Подзаголовок',
        field: 'subtitle',
        required: true,
        align: 'left',
        sortable: true,
        format: (val: unknown) => {
          const str = String(val)

          return str.length > 40 ? str.substring(0, 40) + '...' : str
        },
      },
      {
        name: 'actions',
        label: 'Действия',
        field: 'actions',
        align: 'center',
      },
    ],
  },

  // Коллекция slogan из slogan.service.ts
  slogan: {
    name: 'slogan',
    label: 'Слоган',
    icon: 'o_campaign',
    searchable: true,
    sortable: false,
    fields: [
      {
        name: 'title',
        label: 'Текст слогана',
        type: 'textarea',
        required: true,
        placeholder:
          '4673771782657 тоник-лосьон для лица Lorem ipsum dolor sit amet...',
      },
    ],
    columns: [
      {
        name: 'title',
        label: 'Текст слогана',
        field: 'title',
        required: true,
        align: 'left',
        sortable: false,
        format: (val: unknown) => {
          const str = String(val)

          return str.length > 100 ? str.substring(0, 100) + '...' : str
        },
      },
      {
        name: 'actions',
        label: 'Действия',
        field: 'actions',
        align: 'center',
      },
    ],
  },
}

/**
 * Получить конфигурацию коллекции по имени
 */
export const getCollectionConfig = (
  name: string
): CollectionConfig | undefined => {
  return collectionsConfig[name]
}

/**
 * Получить список всех коллекций
 */
export const getAllCollections = (): CollectionConfig[] => {
  return Object.values(collectionsConfig)
}
