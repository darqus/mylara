import type { CollectionConfig, } from 'src/types/admin'

/**
 * Конфигурация коллекций для админки
 */
export const collectionsConfig: Record<string, CollectionConfig> = {
  // Коллекция carousel из carousel.service.ts
  carousel: {
    name: 'carousel',
    label: 'Продукты',
    icon: 'inventory_2',
    searchable: true,
    sortable: true,
    fields: [
      {
        name: 'img',
        label: 'Изображение',
        type: 'url',
        required: true,
        placeholder: 'https://cdn.quasar.dev/img/parallax1.jpg',
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
        placeholder: 'Крем - гель подтягивающий для век с ботулоподобным нейропептидом, 30 мл аромат Blanche (по мотивам BYREDO BLANCHE)',
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
        format: (val: unknown) => val ? '🖼️' : '',
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
        format: (val: unknown) => val ? '🔗' : '',
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
        type: 'url',
        required: true,
        placeholder: 'https://cdn.quasar.dev/img/mountains.jpg',
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
        format: (val: unknown) => val ? '🖼️' : '',
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

  // Пример коллекции пользователей
  users: {
    name: 'users',
    label: 'Пользователи',
    icon: 'people',
    searchable: true,
    sortable: true,
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'user@example.com',
      },
      {
        name: 'name',
        label: 'Имя',
        type: 'text',
        required: true,
        placeholder: 'Введите имя пользователя',
      },
      {
        name: 'phone',
        label: 'Телефон',
        type: 'text',
        placeholder: '+7 (999) 123-45-67',
      },
      {
        name: 'role',
        label: 'Роль',
        type: 'text',
        placeholder: 'user, admin, moderator',
      },
      {
        name: 'active',
        label: 'Активный',
        type: 'boolean',
      },
    ],
    columns: [
      {
        name: 'email',
        label: 'Email',
        field: 'email',
        required: true,
        align: 'left',
        sortable: true,
      },
      {
        name: 'name',
        label: 'Имя',
        field: 'name',
        align: 'left',
        sortable: true,
      },
      {
        name: 'role',
        label: 'Роль',
        field: 'role',
        align: 'center',
        sortable: true,
      },
      {
        name: 'active',
        label: 'Активный',
        field: 'active',
        align: 'center',
        format: (val: unknown) => (val ? 'Да' : 'Нет'),
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
