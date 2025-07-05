import { ref, computed } from 'vue'

import {
  describe, it, expect, beforeEach, vi
} from 'vitest'

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

vi.mock('quasar', () => ({ LocalStorage: mockLocalStorage }))

describe('useTableSettings (route switching)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should load different settings when collection changes', () => {
    // Мокаем localStorage с разными настройками для разных коллекций
    mockLocalStorage.getItem.mockImplementation((key: string) => {
      if (key === 'table-settings-carousel') {
        return {
          page: 2,
          rowsPerPage: 25,
          filter: 'carousel-filter',
          sortBy: 'title',
          descending: false,
        }
      }
      if (key === 'table-settings-slides') {
        return {
          page: 3,
          rowsPerPage: 50,
          filter: 'slides-filter',
          sortBy: 'order',
          descending: true,
        }
      }

      return null
    })

    // Создаем реактивную переменную для имени коллекции
    const collectionName = ref('carousel')

    const { settings } = useTableSettings(collectionName)

    // Проверяем начальные настройки для carousel
    expect(settings.value).toEqual({
      page: 2,
      rowsPerPage: 25,
      filter: 'carousel-filter',
      sortBy: 'title',
      descending: false,
    })

    // Переключаемся на slides
    collectionName.value = 'slides'

    // Проверяем, что настройки автоматически обновились
    expect(settings.value).toEqual({
      page: 3,
      rowsPerPage: 50,
      filter: 'slides-filter',
      sortBy: 'order',
      descending: true,
    })

    // Проверяем, что localStorage вызывался с правильными ключами
    expect(mockLocalStorage.getItem).toHaveBeenCalledWith(
      'table-settings-carousel'
    )
    expect(mockLocalStorage.getItem).toHaveBeenCalledWith(
      'table-settings-slides'
    )
  })

  it('should use default settings when no data exists for new collection', () => {
    // Мокаем localStorage только для одной коллекции
    mockLocalStorage.getItem.mockImplementation((key: string) => {
      if (key === 'table-settings-carousel') {
        return {
          page: 2,
          rowsPerPage: 25,
          filter: 'carousel-filter',
        }
      }

      // Для других коллекций возвращаем null
      return null
    })

    const collectionName = ref('carousel')

    const { settings } = useTableSettings(collectionName)

    // Проверяем настройки для carousel
    expect(settings.value).toEqual({
      page: 2,
      rowsPerPage: 25,
      filter: 'carousel-filter',
    })

    // Переключаемся на коллекцию без сохраненных настроек
    collectionName.value = 'new-collection'

    // Проверяем, что используются настройки по умолчанию
    expect(settings.value).toEqual({
      page: 1,
      rowsPerPage: 10,
      filter: '',
    })
  })

  it('should preserve settings when switching back to previous collection', () => {
    // Мокаем localStorage с настройками для двух коллекций
    const storageData: Record<string, unknown> = {
      'table-settings-carousel': {
        page: 2,
        rowsPerPage: 25,
        filter: 'carousel-filter',
      },
      'table-settings-slides': {
        page: 3,
        rowsPerPage: 50,
        filter: 'slides-filter',
      },
    }

    mockLocalStorage.getItem.mockImplementation((key: string) => {
      return storageData[key] ?? null
    })

    const collectionName = ref('carousel')

    const { settings } = useTableSettings(collectionName)

    // Проверяем настройки для carousel
    expect(settings.value.page).toBe(2)
    expect(settings.value.filter).toBe('carousel-filter')

    // Переключаемся на slides
    collectionName.value = 'slides'

    // Проверяем настройки для slides
    expect(settings.value.page).toBe(3)
    expect(settings.value.filter).toBe('slides-filter')

    // Возвращаемся к carousel
    collectionName.value = 'carousel'

    // Проверяем, что настройки carousel восстановились
    expect(settings.value.page).toBe(2)
    expect(settings.value.filter).toBe('carousel-filter')
  })

  it('should save settings for current collection when data changes', () => {
    mockLocalStorage.getItem.mockReturnValue(null)

    const collectionName = ref('test-collection')

    const { settings } = useTableSettings(collectionName)

    // Изменяем настройки
    settings.value.page = 5
    settings.value.filter = 'new-filter'

    // Проверяем, что localStorage.set был вызван с правильным ключом
    expect(mockLocalStorage.set).toHaveBeenCalledWith(
      'table-settings-test-collection',
      expect.objectContaining({
        page: 5,
        filter: 'new-filter',
      })
    )
  })

  it('should handle computed collection names', () => {
    // Мокаем localStorage
    mockLocalStorage.getItem.mockImplementation((key: string) => {
      if (key === 'table-settings-computed-collection') {
        return {
          page: 7,
          rowsPerPage: 15,
          filter: 'computed-filter',
        }
      }

      return null
    })

    // Создаем computed для имени коллекции
    const baseCollection = ref('computed')
    const collectionName = computed(() => `${baseCollection.value}-collection`)

    const { settings } = useTableSettings(collectionName)

    // Проверяем, что настройки загрузились корректно
    expect(settings.value).toEqual({
      page: 7,
      rowsPerPage: 15,
      filter: 'computed-filter',
    })

    // Изменяем базовое значение
    baseCollection.value = 'new-computed'

    // Проверяем, что используются настройки по умолчанию для новой коллекции
    expect(settings.value).toEqual({
      page: 1,
      rowsPerPage: 10,
      filter: '',
    })
  })
})
