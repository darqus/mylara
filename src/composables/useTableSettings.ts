import {
  ref, computed, watch,
} from 'vue'

import { LocalStorage, } from 'quasar'

/**
 * Настройки таблицы для сохранения в localStorage
 */
export type TableSettings = {

  /** Текущая страница */
  page: number

  /** Количество записей на странице */
  rowsPerPage: number

  /** Поле для сортировки */
  sortBy?: string

  /** Направление сортировки */
  descending?: boolean

  /** Поисковый запрос */
  filter: string

  /** Видимые колонки */
  visibleColumns?: string[]
}

/**
 * Настройки по умолчанию для таблицы
 */
const defaultSettings: TableSettings = {
  page: 1,
  rowsPerPage: 10,
  filter: '',
}

/**
 * Composable для работы с настройками таблиц в localStorage
 */
export function useTableSettings(collectionName: string) {
  const storageKey = `table-settings-${collectionName}`

  /**
   * Загрузить настройки из localStorage
   */
  function loadSettings(): TableSettings {
    try {
      const stored = LocalStorage.getItem(storageKey)

      if (stored && typeof stored === 'object') {
        return {
          ...defaultSettings,
          ...stored,
        }
      }
    } catch (error) {
      console.warn(`Failed to load table settings for ${collectionName}:`, error)
    }

    return {
      ...defaultSettings,
    }
  }

  /**
   * Сохранить настройки в localStorage
   */
  function saveSettings(settings: TableSettings): void {
    try {
      LocalStorage.set(storageKey, settings)
    } catch (error) {
      console.warn(`Failed to save table settings for ${collectionName}:`, error)
    }
  }

  /**
   * Очистить настройки из localStorage
   */
  function clearSettings(): void {
    try {
      LocalStorage.remove(storageKey)
    } catch (error) {
      console.warn(`Failed to clear table settings for ${collectionName}:`, error)
    }
  }

  /**
   * Проверить наличие сохраненных настроек
   */
  function hasSettings(): boolean {
    return LocalStorage.has(storageKey)
  }

  /**
   * Получить размер данных в localStorage (в байтах)
   */
  function getStorageSize(): number {
    try {
      const data = LocalStorage.getItem(storageKey)

      if (data) {
        return JSON.stringify(data).length
      }
    } catch (error) {
      console.warn(`Failed to calculate storage size for ${collectionName}:`, error)
    }

    return 0
  }

  /**
   * Реактивные настройки таблицы
   */
  const settings = ref<TableSettings>(loadSettings())

  /**
   * Автоматическое сохранение при изменении настроек
   */
  watch(
    settings,
    (newSettings) => {
      saveSettings(newSettings)
    },
    {
      deep: true,
    }
  )

  /**
   * Обновить настройки пагинации
   */
  function updatePagination(pagination: {
    page: number
    rowsPerPage: number
    sortBy?: string
    descending?: boolean
  }): void {
    settings.value.page = pagination.page
    settings.value.rowsPerPage = pagination.rowsPerPage

    if (pagination.sortBy !== undefined) {
      settings.value.sortBy = pagination.sortBy
    }

    if (pagination.descending !== undefined) {
      settings.value.descending = pagination.descending
    }
  }

  /**
   * Обновить поисковый фильтр
   */
  function updateFilter(filter: string): void {
    settings.value.filter = filter

    // При изменении фильтра сбрасываем на первую страницу
    settings.value.page = 1
  }

  /**
   * Обновить видимые колонки
   */
  function updateVisibleColumns(columns: string[]): void {
    settings.value.visibleColumns = columns
  }

  /**
   * Сбросить настройки к значениям по умолчанию
   */
  function resetSettings(): void {
    settings.value = {
      ...defaultSettings,
    }
  }

  /**
   * Получить настройки пагинации в формате для q-table
   */
  const paginationSettings = computed(() => ({
    page: settings.value.page,
    rowsPerPage: settings.value.rowsPerPage,
    rowsNumber: 0, // Будет обновлено при загрузке данных
    sortBy: settings.value.sortBy,
    descending: settings.value.descending,
  }))

  return {
    settings,
    paginationSettings,
    updatePagination,
    updateFilter,
    updateVisibleColumns,
    resetSettings,
    clearSettings,
    hasSettings,
    getStorageSize,
    loadSettings,
    saveSettings,
  }
}

/**
 * Управление настройками колонок таблицы
 */
export function useColumnSettings(collectionName: string) {
  const storageKey = `column-settings-${collectionName}`

  /**
   * Загрузить настройки колонок из localStorage
   */
  function loadColumnSettings(): Record<string, { width?: number; visible?: boolean }> {
    try {
      const stored = LocalStorage.getItem(storageKey)

      if (stored && typeof stored === 'object') {
        return stored as Record<string, { width?: number; visible?: boolean }>
      }
    } catch (error) {
      console.warn(`Failed to load column settings for ${collectionName}:`, error)
    }

    return {}
  }

  /**
   * Сохранить настройки колонок в localStorage
   */
  function saveColumnSettings(settings: Record<string, { width?: number; visible?: boolean }>): void {
    try {
      LocalStorage.set(storageKey, settings)
    } catch (error) {
      console.warn(`Failed to save column settings for ${collectionName}:`, error)
    }
  }

  /**
   * Реактивные настройки колонок
   */
  const columnSettings = ref(loadColumnSettings())

  /**
   * Автоматическое сохранение при изменении настроек колонок
   */
  watch(
    columnSettings,
    (newSettings) => {
      saveColumnSettings(newSettings)
    },
    {
      deep: true,
    }
  )

  /**
   * Обновить ширину колонки
   */
  function updateColumnWidth(columnName: string, width: number): void {
    columnSettings.value[columnName] ??= {}
    columnSettings.value[columnName].width = width
  }

  /**
   * Обновить видимость колонки
   */
  function updateColumnVisibility(columnName: string, visible: boolean): void {
    columnSettings.value[columnName] ??= {}
    columnSettings.value[columnName].visible = visible
  }

  /**
   * Получить ширину колонки
   */
  function getColumnWidth(columnName: string): number | undefined {
    return columnSettings.value[columnName]?.width
  }

  /**
   * Проверить видимость колонки
   */
  function isColumnVisible(columnName: string): boolean {
    return columnSettings.value[columnName]?.visible ?? true
  }

  /**
   * Сбросить настройки колонок
   */
  function resetColumnSettings(): void {
    columnSettings.value = {}
  }

  /**
   * Проверить наличие сохраненных настроек колонок
   */
  function hasColumnSettings(): boolean {
    return LocalStorage.has(storageKey)
  }

  /**
   * Очистить настройки колонок из localStorage
   */
  function clearColumnSettings(): void {
    try {
      LocalStorage.remove(storageKey)
      columnSettings.value = {}
    } catch (error) {
      console.warn(`Failed to clear column settings for ${collectionName}:`, error)
    }
  }

  return {
    columnSettings,
    updateColumnWidth,
    updateColumnVisibility,
    getColumnWidth,
    isColumnVisible,
    resetColumnSettings,
    hasColumnSettings,
    clearColumnSettings,
  }
}

/**
 * Утилиты для управления всеми настройками таблиц
 */
export function useTableSettingsManager() {
  /**
   * Получить все ключи настроек таблиц в localStorage
   */
  function getAllTableSettingsKeys(): string[] {
    const allKeys = LocalStorage.getAllKeys()

    return allKeys.filter((key) =>
      key.startsWith('table-settings-') || key.startsWith('column-settings-')
    )
  }

  /**
   * Очистить все настройки таблиц
   */
  function clearAllTableSettings(): void {
    const keys = getAllTableSettingsKeys()

    keys.forEach((key) => {
      try {
        LocalStorage.remove(key)
      } catch (error) {
        console.warn(`Failed to remove ${key}:`, error)
      }
    })
  }

  /**
   * Получить общий размер всех настроек таблиц
   */
  function getTotalStorageSize(): number {
    const keys = getAllTableSettingsKeys()
    let totalSize = 0

    keys.forEach((key) => {
      try {
        const data = LocalStorage.getItem(key)

        if (data) {
          totalSize += JSON.stringify(data).length
        }
      } catch (error) {
        console.warn(`Failed to calculate size for ${key}:`, error)
      }
    })

    return totalSize
  }

  /**
   * Экспортировать все настройки в объект
   */
  function exportAllSettings(): Record<string, unknown> {
    const keys = getAllTableSettingsKeys()
    const exported: Record<string, unknown> = {}

    keys.forEach((key) => {
      try {
        const data = LocalStorage.getItem(key)

        if (data) {
          exported[key] = data
        }
      } catch (error) {
        console.warn(`Failed to export ${key}:`, error)
      }
    })

    return exported
  }

  /**
   * Импортировать настройки из объекта
   */
  function importAllSettings(settings: Record<string, unknown>): void {
    Object.entries(settings).forEach(([ key, value, ]) => {
      if (key.startsWith('table-settings-') || key.startsWith('column-settings-')) {
        try {
          LocalStorage.set(key, value)
        } catch (error) {
          console.warn(`Failed to import ${key}:`, error)
        }
      }
    })
  }

  return {
    getAllTableSettingsKeys,
    clearAllTableSettings,
    getTotalStorageSize,
    exportAllSettings,
    importAllSettings,
  }
}
