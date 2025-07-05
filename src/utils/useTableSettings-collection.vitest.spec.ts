import { ref } from 'vue'

import { describe, it, expect, beforeEach, vi } from 'vitest'

import { useTableSettings } from 'src/composables/useTableSettings'

// Мокаем LocalStorage от Quasar
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  getAllKeys: vi.fn(),
  has: vi.fn(),
  set: vi.fn(),
  remove: vi.fn(),
}

vi.mock('quasar', () => ({
  LocalStorage: mockLocalStorage,
}))

describe('useTableSettings - Reactive Collection Name', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should reload settings when collection name changes', async () => {
    // Настройка для первой коллекции
    const carouselSettings = {
      page: 2,
      rowsPerPage: 25,
      filter: 'carousel test',
    }

    // Настройка для второй коллекции
    const slidesSettings = {
      page: 1,
      rowsPerPage: 10,
      filter: 'slides test',
    }

    // Мокируем возврат разных настроек в зависимости от ключа
    mockLocalStorage.getItem.mockImplementation((key: string) => {
      if (key === 'table-settings-carousel') {
        return carouselSettings
      }
      if (key === 'table-settings-slides') {
        return slidesSettings
      }

      return null
    })

    // Создаем реактивное имя коллекции
    const collectionName = ref('carousel')

    const { settings } = useTableSettings(collectionName)

    // Проверяем, что загружены настройки для carousel
    expect(settings.value.page).toBe(2)
    expect(settings.value.rowsPerPage).toBe(25)
    expect(settings.value.filter).toBe('carousel test')

    // Имитируем смену маршрута
    collectionName.value = 'slides'

    // Даем время для выполнения watcher
    await new Promise((resolve) => {
      setTimeout(resolve, 0)
    })

    // Проверяем, что загружены настройки для slides
    expect(settings.value.page).toBe(1)
    expect(settings.value.rowsPerPage).toBe(10)
    expect(settings.value.filter).toBe('slides test')
  })

  it('should work with computed collection name from route', () => {
    const routeParams = ref({
      collection: 'carousel',
    })

    // Имитируем computed из роутера
    const collectionName = () => routeParams.value.collection

    mockLocalStorage.getItem.mockReturnValue({
      page: 3,
      rowsPerPage: 50,
      filter: 'carousel computed',
    })

    const { settings } = useTableSettings(collectionName)

    expect(settings.value.page).toBe(3)
    expect(settings.value.rowsPerPage).toBe(50)
    expect(settings.value.filter).toBe('carousel computed')
  })
})
