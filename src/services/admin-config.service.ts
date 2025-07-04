import type { CollectionConfig, } from 'src/types/admin'

/**
 * Конфигурация коллекций для админки
 */
export const collectionsConfig: Record<string, CollectionConfig> = {
  // Пример коллекции продуктов
  products: {
    name: 'products',
    label: 'Продукты',
    icon: 'inventory_2',
    searchable: true,
    sortable: true,
    fields: [
      {
        name: 'name',
        label: 'Название',
        type: 'text',
        required: true,
        placeholder: 'Введите название продукта',
      },
      {
        name: 'description',
        label: 'Описание',
        type: 'textarea',
        placeholder: 'Введите описание продукта',
      },
      {
        name: 'price',
        label: 'Цена',
        type: 'number',
        required: true,
        placeholder: '0',
      },
      {
        name: 'category',
        label: 'Категория',
        type: 'text',
        placeholder: 'Категория продукта',
      },
      {
        name: 'available',
        label: 'В наличии',
        type: 'boolean',
      },
      {
        name: 'imageUrl',
        label: 'URL изображения',
        type: 'url',
        placeholder: 'https://example.com/image.jpg',
      },
    ],
    columns: [
      {
        name: 'name',
        label: 'Название',
        field: 'name',
        required: true,
        align: 'left',
        sortable: true,
      },
      {
        name: 'price',
        label: 'Цена',
        field: 'price',
        align: 'right',
        sortable: true,
        format: (val: unknown) => `${String(val)} ₽`,
      },
      {
        name: 'category',
        label: 'Категория',
        field: 'category',
        align: 'left',
        sortable: true,
      },
      {
        name: 'available',
        label: 'В наличии',
        field: 'available',
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

  // Пример коллекции статей
  articles: {
    name: 'articles',
    label: 'Статьи',
    icon: 'article',
    searchable: true,
    sortable: true,
    fields: [
      {
        name: 'title',
        label: 'Заголовок',
        type: 'text',
        required: true,
        placeholder: 'Введите заголовок статьи',
      },
      {
        name: 'content',
        label: 'Содержание',
        type: 'textarea',
        required: true,
        placeholder: 'Введите текст статьи',
      },
      {
        name: 'author',
        label: 'Автор',
        type: 'text',
        placeholder: 'Имя автора',
      },
      {
        name: 'published',
        label: 'Опубликовано',
        type: 'boolean',
      },
      {
        name: 'publishDate',
        label: 'Дата публикации',
        type: 'date',
      },
      {
        name: 'tags',
        label: 'Теги',
        type: 'text',
        placeholder: 'Введите теги через запятую',
      },
    ],
    columns: [
      {
        name: 'title',
        label: 'Заголовок',
        field: 'title',
        required: true,
        align: 'left',
        sortable: true,
      },
      {
        name: 'author',
        label: 'Автор',
        field: 'author',
        align: 'left',
        sortable: true,
      },
      {
        name: 'published',
        label: 'Опубликовано',
        field: 'published',
        align: 'center',
        format: (val: unknown) => (val ? 'Да' : 'Нет'),
      },
      {
        name: 'publishDate',
        label: 'Дата публикации',
        field: 'publishDate',
        align: 'center',
        sortable: true,
        format: (val: unknown) => {
          if (!val) {
            return ''
          }

          const date = val as { toDate?: () => Date }

          if (date.toDate) {
            return date.toDate().toLocaleDateString('ru-RU')
          }

          return JSON.stringify(val)
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
