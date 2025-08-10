import { ref, computed, watch, unref } from 'vue'
import type { MaybeRefOrGetter } from 'vue'

import { LocalStorage } from 'quasar'

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
export function useTableSettings(collectionName: MaybeRefOrGetter<string>) {
  // Создаем computed для реактивного storageKey
  const storageKey = computed(
    () => `table-settings-${String(unref(collectionName))}`
  )

  /**
   * Загрузить настройки из localStorage
   */
  function loadSettings(): TableSettings {
    try {
      const stored = LocalStorage.getItem(storageKey.value)

      if (stored && typeof stored === 'object' && stored !== null) {
        // Валидируем структуру данных
        const settings = stored as Partial<TableSettings>

        return {
          ...defaultSettings,

          // Валидируем и применяем сохраненные настройки
          ...(typeof settings.page === 'number' &&
            settings.page > 0 && { page: settings.page }),
          ...(typeof settings.rowsPerPage === 'number' &&
            settings.rowsPerPage > 0 && { rowsPerPage: settings.rowsPerPage }),
          ...(typeof settings.sortBy === 'string' &&
            settings.sortBy.length > 0 && { sortBy: settings.sortBy }),
          ...(typeof settings.descending === 'boolean' && {
            descending: settings.descending,
          }),
          ...(typeof settings.filter === 'string' && {
            filter: settings.filter,
          }),
          ...(Array.isArray(settings.visibleColumns) && {
            visibleColumns: settings.visibleColumns,
          }),
        }
      }
    } catch (error) {
      console.warn(
        `Failed to load table settings for ${String(unref(collectionName))}:`,
        error
      )
    }

    return { ...defaultSettings }
  }

  /**
   * Сохранить настройки в localStorage
   */
  function saveSettings(settings: TableSettings): void {
    try {
      LocalStorage.set(storageKey.value, settings)
    } catch (error) {
      console.warn(
        `Failed to save table settings for ${String(unref(collectionName))}:`,
        error
      )
    }
  }

  /**
   * Очистить настройки из localStorage
   */
  function clearSettings(): void {
    try {
      LocalStorage.remove(storageKey.value)
    } catch (error) {
      console.warn(
        `Failed to clear table settings for ${String(unref(collectionName))}:`,
        error
      )
    }
  }

  /**
   * Проверить наличие сохраненных настроек
   */
  function hasSettings(): boolean {
    return LocalStorage.has(storageKey.value)
  }

  /**
   * Получить размер данных в localStorage (в байтах)
   */
  function getStorageSize(): number {
    try {
      const data = LocalStorage.getItem(storageKey.value)

      if (data) {
        return JSON.stringify(data).length
      }
    } catch (error) {
      console.warn(
        `Failed to calculate storage size for ${String(unref(collectionName))}:`,
        error
      )
    }

    return 0
  }

  /**
   * Реактивные настройки таблицы
   */
  const settings = ref<TableSettings>(loadSettings())

  /**
   * Отслеживаем изменения названия коллекции и перезагружаем настройки
   */
  watch(
    () => unref(collectionName),
    () => {
      const freshSettings = loadSettings()

      Object.assign(settings.value, freshSettings)
    }
  )

  /**
   * Автоматическое сохранение при изменении настроек
   */
  watch(
    settings,
    (newSettings) => {
      saveSettings(newSettings)
    },
    { deep: true }
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
    settings.value = { ...defaultSettings }
  }

  /**
   * Получить настройки пагинации в формате для q-table
   */
  const paginationSettings = computed(() => ({
    page: settings.value.page,
    rowsPerPage: settings.value.rowsPerPage,
    rowsNumber: undefined, // Будет обновлено при загрузке данных
    sortBy: settings.value.sortBy,
    descending: settings.value.descending,
  }))

  /**
   * Принудительно перезагрузить настройки из localStorage
   */
  function reloadSettings(): void {
    const freshSettings = loadSettings()

    // Обновляем реактивные настройки
    Object.assign(settings.value, freshSettings)
  }

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
    reloadSettings,
  }
}

/**
 * Управление настройками колонок таблицы
 */
export function useColumnSettings(collectionName: MaybeRefOrGetter<string>) {
  const storageKey = computed(
    () => `column-settings-${String(unref(collectionName))}`
  )

  /**
   * Загрузить настройки колонок из localStorage
   */
  function loadColumnSettings(): Record<
    string,
    { width?: number; visible?: boolean }
    > {
    try {
      const stored = LocalStorage.getItem(storageKey.value)

      if (stored && typeof stored === 'object' && stored !== null) {
        const settings = stored as Record<string, unknown>
        const validatedSettings: Record<
          string,
          { width?: number; visible?: boolean }
        > = {}

        // Валидируем каждую настройку колонки
        Object.entries(settings).forEach(([ key, value ]) => {
          if (typeof value === 'object' && value !== null) {
            const columnSetting = value as {
              width?: unknown
              visible?: unknown
            }
            const validatedSetting: { width?: number; visible?: boolean } = {}

            if (
              typeof columnSetting.width === 'number' &&
              columnSetting.width > 0
            ) {
              validatedSetting.width = columnSetting.width
            }

            if (typeof columnSetting.visible === 'boolean') {
              validatedSetting.visible = columnSetting.visible
            }

            // Добавляем настройку только если есть валидные свойства
            if (Object.keys(validatedSetting).length > 0) {
              validatedSettings[key] = validatedSetting
            }
          }
        })

        return validatedSettings
      }
    } catch (error) {
      console.warn(
        `Failed to load column settings for ${String(unref(collectionName))}:`,
        error
      )
    }

    return {}
  }

  /**
   * Сохранить настройки колонок в localStorage
   */
  function saveColumnSettings(
      settings: Record<string, { width?: number; visible?: boolean }>
  ): void {
    try {
      LocalStorage.set(storageKey.value, settings)
    } catch (error) {
      console.warn(
        `Failed to save column settings for ${String(unref(collectionName))}:`,
        error
      )
    }
  }

  /**
   * Реактивные настройки колонок
   */
  const columnSettings = ref(loadColumnSettings())

  /**
   * Отслеживаем изменения названия коллекции и перезагружаем настройки колонок
   */
  watch(
    () => unref(collectionName),
    () => {
      const freshSettings = loadColumnSettings()

      columnSettings.value = freshSettings
    }
  )

  /**
   * Автоматическое сохранение при изменении настроек колонок
   */
  watch(
    columnSettings,
    (newSettings) => {
      saveColumnSettings(newSettings)
    },
    { deep: true }
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
    return LocalStorage.has(storageKey.value)
  }

  /**
   * Очистить настройки колонок из localStorage
   */
  function clearColumnSettings(): void {
    try {
      LocalStorage.remove(storageKey.value)
      columnSettings.value = {}
    } catch (error) {
      console.warn(
        `Failed to clear column settings for ${String(unref(collectionName))}:`,
        error
      )
    }
  }

  /**
   * Принудительно перезагрузить настройки колонок из localStorage
   */
  function reloadColumnSettings(): void {
    const freshSettings = loadColumnSettings()

    // Полностью заменяем настройки колонок
    columnSettings.value = freshSettings
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
    reloadColumnSettings,
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

    return allKeys.filter(
      (key) =>
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
    if (!settings || typeof settings !== 'object') {
      console.warn('Invalid settings object provided for import')

      return
    }

    Object.entries(settings).forEach(([ key, value ]) => {
      if (
        key.startsWith('table-settings-') ||
        key.startsWith('column-settings-')
      ) {
        try {
          // Валидируем данные перед сохранением
          if (value !== null && value !== undefined) {
            LocalStorage.set(key, value)
          }
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
