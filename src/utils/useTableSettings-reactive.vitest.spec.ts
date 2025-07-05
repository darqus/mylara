import { describe, it, expect, beforeEach, vi } from 'vitest'

import {
  useTableSettings,
  useColumnSettings,
} from 'src/composables/useTableSettings'

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

describe('useTableSettings (reactive)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('loadSettings', () => {
    it('should return default settings when no data in localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue(null)

      const { loadSettings } = useTableSettings(() => 'test-collection')
      const settings = loadSettings()

      expect(settings).toEqual({
        page: 1,
        rowsPerPage: 10,
        filter: '',
      })
    })

    it('should validate and load correct settings from localStorage', () => {
      const validSettings = {
        page: 2,
        rowsPerPage: 25,
        sortBy: 'name',
        descending: true,
        filter: 'test',
        visibleColumns: ['id', 'name'],
      }

      mockLocalStorage.getItem.mockReturnValue(validSettings)

      const { loadSettings } = useTableSettings(() => 'test-collection')
      const settings = loadSettings()

      expect(settings).toEqual({
        page: 2,
        rowsPerPage: 25,
        sortBy: 'name',
        descending: true,
        filter: 'test',
        visibleColumns: ['id', 'name'],
      })
    })

    it('should handle localStorage errors gracefully', () => {
      mockLocalStorage.getItem.mockImplementation(() => {
        throw new Error('LocalStorage error')
      })

      const { loadSettings } = useTableSettings(() => 'test-collection')
      const settings = loadSettings()

      expect(settings).toEqual({
        page: 1,
        rowsPerPage: 10,
        filter: '',
      })
    })
  })

  describe('useColumnSettings', () => {
    it('should validate column settings properly', () => {
      const validColumnSettings = {
        col1: {
          width: 100,
          visible: true,
        },
        col2: { width: 200 },
        col3: { visible: false },
      }

      mockLocalStorage.getItem.mockReturnValue(validColumnSettings)

      const { columnSettings } = useColumnSettings(() => 'test-collection')

      // Проверяем, что валидные настройки загружены корректно
      expect(columnSettings.value).toEqual({
        col1: {
          width: 100,
          visible: true,
        },
        col2: { width: 200 },
        col3: { visible: false },
      })
    })
  })
})
