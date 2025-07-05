import type { Timestamp, } from 'firebase/firestore'

/**
 * Базовый тип для документа в Firestore
 */
export type BaseDocument = {
  id: string
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

/**
 * Тип для определения поля формы
 */
export type FormField = {
  name: string
  label: string
  type:
    | 'text'
    | 'textarea'
    | 'number'
    | 'email'
    | 'url'
    | 'date'
    | 'boolean'
    | 'image'
  required?: boolean
  placeholder?: string
  rules?: Array<(val: unknown) => boolean | string>

  // Дополнительные опции для изображений
  imageOptions?: {
    maxSizeKB?: number
    allowedTypes?: string[]
    path?: string
  }
}

/**
 * Тип для определения колонки таблицы
 */
export type TableColumn = {
  name: string
  label: string
  field: string | ((row: Record<string, unknown>) => unknown)
  required?: boolean
  align?: 'left' | 'right' | 'center'
  sortable?: boolean
  format?: (val: unknown) => string
}

/**
 * Конфигурация коллекции для админки
 */
export type CollectionConfig = {
  name: string
  label: string
  icon: string
  fields: FormField[]
  columns: TableColumn[]
  searchable?: boolean
  sortable?: boolean
}

/**
 * Состояние формы
 */
export type FormState<T = Record<string, unknown>> = {
  data: T
  loading: boolean
  errors: Record<string, string>
}

/**
 * Состояние таблицы
 */
export type TableState<T = Record<string, unknown>> = {
  items: T[]
  loading: boolean
  pagination: {
    page: number
    rowsPerPage: number
    rowsNumber: number
  }
  filter: string
  selected: T[]
}
