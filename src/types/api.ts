/**
 * Базовый интерфейс для ответов API с возможной ошибкой
 */
export type ApiResponse = {
  error: string | null
}

/**
 * Интерфейс для ответа с коллекцией элементов
 */
export type CollectionResponse<T> = {
  items: T[]
} & ApiResponse

/**
 * Интерфейс для ответа с одним документом
 */
export type DocumentResponse<T> = {
  data: T | null
} & ApiResponse

/**
 * Интерфейс для ответа со слоганом
 */
export type SloganResponse = {
  title: string
} & ApiResponse

/**
 * Интерфейс для ответа со слайдами
 */
export type SlidesResponse = {
  slides: Array<{
    id: number
    img: string
    title: string
    subtitle: string
  }>
} & ApiResponse
