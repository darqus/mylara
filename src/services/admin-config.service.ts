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
        type: 'base64-image',
        required: true,
        placeholder: 'Загрузите изображение продукта',
        base64ImageOptions: {
          maxSizeKB: 2000, // 2MB для base64
          maxWidth: 1200,
          maxHeight: 800,
          quality: 0.85,
          allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
          showPreview: true,
          allowCopy: false,
        },
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
        name: 'info',
        label: 'Информация',
        type: 'editor',
        required: true,
        placeholder: 'Инновационные технологические решения завтрашнего дня',
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
        style: 'width: 80px; min-width: 80px;',
        headerStyle: 'width: 80px; min-width: 80px;',
      },
      {
        name: 'label',
        label: 'Название продукта',
        field: 'label',
        required: true,
        align: 'left',
        sortable: true,
        style: 'max-width: 350px; white-space: normal; line-height: 1.4;',
        headerStyle: 'width: 40%;',
        format: (val: unknown) => {
          if (val === null || val === undefined) {
            return ''
          }
          let str: string
          if (typeof val === 'string') {
            str = val
          } else if (typeof val === 'number' || typeof val === 'boolean') {
            str = String(val)
          } else {
            str = JSON.stringify(val)
          }
          return str.length > 60 ? `${str.substring(0, 60)}...` : str
        },
      },
      {
        name: 'info',
        label: 'Описание',
        field: 'info',
        required: true,
        align: 'left',
        sortable: true,
        style: 'max-width: 280px; white-space: normal; line-height: 1.3;',
        headerStyle: 'width: 30%;',
        format: (val: unknown) => {
          if (val === null || val === undefined) {
            return ''
          }
          let str: string
          if (typeof val === 'string') {
            str = val
          } else if (typeof val === 'number' || typeof val === 'boolean') {
            str = String(val)
          } else {
            str = JSON.stringify(val)
          }

          // Удаляем HTML теги для отображения в таблице
          let cleanText = str.replace(/<[^>]*>/g, '')

          // Декодируем HTML entities используя DOM API
          const textArea = document.createElement('textarea')
          textArea.innerHTML = cleanText
          cleanText = textArea.value

          cleanText = cleanText.trim()
          return cleanText.length > 80
            ? `${cleanText.substring(0, 80)}...`
            : cleanText
        },
      },
      {
        name: 'link',
        label: 'Ссылка',
        field: 'link',
        align: 'center',
        sortable: false,
        style: 'width: 80px; min-width: 80px;',
        headerStyle: 'width: 80px; min-width: 80px;',
        format: (val: unknown) => (val ? '🔗' : ''),
      },
      {
        name: 'actions',
        label: 'Действия',
        field: 'actions',
        align: 'center',
        style: 'width: 120px; min-width: 120px;',
        headerStyle: 'width: 120px; min-width: 120px;',
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
        type: 'base64-image',
        required: true,
        placeholder: 'Загрузите изображение слайда',
        base64ImageOptions: {
          maxSizeKB: 2500, // 2.5MB для слайдов
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.9,
          allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
          showPreview: true,
          allowCopy: false,
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

          return str.length > 40 ? `${str.substring(0, 40)}...` : str
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
      {
        name: 'image',
        label: 'Изображение слогана',
        type: 'base64-image',
        required: false,
        placeholder: 'Загрузите изображение для отображения рядом со слоганом',
      },
      {
        name: 'layout',
        label: 'Расположение текста',
        type: 'select',
        required: false,
        options: [
          { label: 'Текст слева, изображение справа', value: 'text-left' },
          { label: 'Текст справа, изображение слева', value: 'text-right' },
        ],
        defaultValue: 'text-left',
        placeholder: 'Выберите расположение текста относительно изображения',
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

          return str.length > 100 ? `${str.substring(0, 100)}...` : str
        },
      },
      {
        name: 'image',
        label: 'Изображение',
        field: 'image',
        align: 'center',
        sortable: false,
      },
      {
        name: 'layout',
        label: 'Расположение',
        field: 'layout',
        align: 'center',
        sortable: false,
        format: (val: unknown) => {
          const layoutMap = {
            'text-left': 'Текст слева',
            'text-right': 'Текст справа',
          }

          return layoutMap[val as keyof typeof layoutMap] ?? 'Не указано'
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
