import { beforeEach, describe, expect, it, vi } from 'vitest'

import {
  useColumnSettings,
  useTableSettings,
  useTableSettingsManager,
} from 'src/composables/useTableSettings'

// Мокаем LocalStorage от Quasar (используем hoisted, чтобы избежать проблем с поднятием)
const mockLocalStorage = vi.hoisted(() => ({
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  getAllKeys: vi.fn(),
  has: vi.fn(),
  set: vi.fn(),
  remove: vi.fn(),
}))

vi.mock('quasar', () => ({ LocalStorage: mockLocalStorage }))

describe('useTableSettings', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('loadSettings', () => {
    it('should return default settings when no data in localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue(null)

      const { loadSettings } = useTableSettings('test-collection')
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

      const { loadSettings } = useTableSettings('test-collection')
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

    it('should filter out invalid data and use defaults', () => {
      const invalidSettings = {
        page: -1, // Invalid
        rowsPerPage: 'invalid', // Invalid
        sortBy: '', // Invalid empty string
        descending: true, // Valid
        filter: 'test', // Valid
        visibleColumns: 'not-array', // Invalid
      }

      mockLocalStorage.getItem.mockReturnValue(invalidSettings)

      const { loadSettings } = useTableSettings('test-collection')
      const settings = loadSettings()

      expect(settings).toEqual({
        page: 1, // Default
        rowsPerPage: 10, // Default
        descending: true, // Valid value
        filter: 'test', // Valid value
      })
    })

    it('should handle localStorage errors gracefully', () => {
      mockLocalStorage.getItem.mockImplementation(() => {
        throw new Error('LocalStorage error')
      })

      const { loadSettings } = useTableSettings('test-collection')
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
        'invalid-col': {
          width: -1,
          visible: 'not-boolean',
        }, // Invalid data
      }

      mockLocalStorage.getItem.mockReturnValue(validColumnSettings)

      const { columnSettings } = useColumnSettings('test-collection')

      // Проверяем, что валидные настройки загружены корректно
      expect(columnSettings.value).toEqual({
        col1: {
          width: 100,
          visible: true,
        },
        col2: { width: 200 },
        col3: { visible: false },

        // invalid-col should be filtered out due to invalid data
      })
    })
  })

  describe('useTableSettingsManager', () => {
    it('should filter keys correctly', () => {
      mockLocalStorage.getAllKeys.mockReturnValue([
        'table-settings-collection1',
        'column-settings-collection1',
        'other-key',
        'table-settings-collection2',
      ])

      const { getAllTableSettingsKeys } = useTableSettingsManager()
      const keys = getAllTableSettingsKeys()

      expect(keys).toEqual([
        'table-settings-collection1',
        'column-settings-collection1',
        'table-settings-collection2',
      ])
    })

    it('should validate settings before importing', () => {
      const { importAllSettings } = useTableSettingsManager()

      // Test with null/undefined
      importAllSettings(null as unknown as Record<string, unknown>)
      expect(mockLocalStorage.set).not.toHaveBeenCalled()

      // Test with valid settings
      const validSettings = {
        'table-settings-test': { page: 1 },
        'other-key': { some: 'data' }, // Should be ignored
      }

      importAllSettings(validSettings)
      expect(mockLocalStorage.set).toHaveBeenCalledWith('table-settings-test', {
        page: 1,
      })
      expect(mockLocalStorage.set).not.toHaveBeenCalledWith(
        'other-key',
        expect.anything()
      )
    })
  })
})
