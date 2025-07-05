# Сохранение настроек таблиц в локальном хранилище (Quasar LocalStorage)

## Обзор

В админ-панели теперь автоматически сохраняются настройки таблиц в локальном хранилище браузера, используя **Quasar LocalStorage API**. Это обеспечивает более надежную и кроссплатформенную работу с локальным хранилищем по сравнению с нативным localStorage.

## Сохраняемые настройки

### Настройки таблицы (`useTableSettings`)

- **Пагинация**: текущая страница и количество записей на странице
- **Сортировка**: поле для сортировки и направление (возрастание/убывание)
- **Фильтры**: текущий поисковый запрос
- **Видимые колонки**: какие колонки отображаются (планируется)

### Настройки колонок (`useColumnSettings`)

- **Ширина колонок**: пользовательские ширины колонок
- **Видимость колонок**: какие колонки скрыты/показаны

## Преимущества Quasar LocalStorage

### Надежность

- **Автоматическая обработка ошибок**: Quasar LocalStorage gracefully обрабатывает ситуации, когда localStorage недоступен
- **Кроссплатформенность**: работает одинаково во всех браузерах и средах
- **Типизация**: встроенная поддержка TypeScript

### Удобство использования

- **Автоматическая сериализация**: не нужно вручную использовать JSON.parse/JSON.stringify
- **Простой API**: единообразные методы для всех операций
- **Проверка доступности**: встроенные методы для проверки наличия данных

## Как это работает

### Автоматическое сохранение

Настройки автоматически сохраняются при каждом изменении:

- При изменении страницы или количества записей на странице
- При применении сортировки
- При вводе текста в поле поиска
- При изменении ширины или видимости колонок

### Ключи хранения

Настройки сохраняются отдельно для каждой коллекции:

```text
table-settings-{collectionName}    # Основные настройки таблицы
column-settings-{collectionName}   # Настройки колонок
```

Например:

- `table-settings-products`
- `table-settings-articles`
- `column-settings-products`

## Использование в коде

### Подключение composable

```typescript
import { useTableSettings } from 'src/composables/useTableSettings'

// Инициализация для конкретной коллекции
const {
  settings,
  paginationSettings,
  updatePagination,
  updateFilter,
  resetSettings,
} = useTableSettings(collectionName.value)
```

### Основные методы

```typescript
// Обновить настройки пагинации
updatePagination({
  page: 2,
  rowsPerPage: 25,
  sortBy: 'name',
  descending: false,
})

// Обновить фильтр
updateFilter('поисковый запрос')

// Сбросить все настройки
resetSettings()
```

### Работа с колонками

```typescript
import { useColumnSettings } from 'src/composables/useTableSettings'

const {
  updateColumnWidth,
  updateColumnVisibility,
  getColumnWidth,
  isColumnVisible,
} = useColumnSettings(collectionName.value)

// Установить ширину колонки
updateColumnWidth('name', 200)

// Скрыть/показать колонку
updateColumnVisibility('description', false)

// Проверить состояние
const width = getColumnWidth('name') // 200
const visible = isColumnVisible('description') // false
```

### Менеджер настроек (`useTableSettingsManager`)

Для управления всеми настройками таблиц сразу:

```typescript
import { useTableSettingsManager } from 'src/composables/useTableSettings'

const {
  getAllTableSettingsKeys,
  clearAllTableSettings,
  getTotalStorageSize,
  exportAllSettings,
  importAllSettings,
} = useTableSettingsManager()

// Получить все ключи настроек
const keys = getAllTableSettingsKeys()
console.log('Сохраненные ключи:', keys)

// Очистить все настройки таблиц
clearAllTableSettings()

// Получить общий размер данных
const size = getTotalStorageSize()
console.log(`Размер данных: ${size} байт`)

// Экспорт/импорт настроек
const exported = exportAllSettings()
const jsonString = JSON.stringify(exported, null, 2)

// Позже импортировать
importAllSettings(exported)
```

## Компоненты

### TableSettingsIndicator

Показывает индикатор сохраненных настроек с детальной информацией в тултипе:

```vue
<TableSettingsIndicator :settings="tableSettings" />
```

## Функциональность в интерфейсе

### Кнопка сброса настроек

В панели фильтров добавлена кнопка для сброса всех настроек таблицы к значениям по умолчанию:

- Иконка: `settings_backup_restore`
- Тултип: "Сбросить настройки таблицы"
- Действие: сбрасывает пагинацию, сортировку и фильтры

### Индикатор настроек

Рядом с информацией о количестве записей отображается индикатор, если есть сохраненные настройки:

- Иконка настроек
- Текст "Настройки сохранены"
- Тултип с детальной информацией о сохраненных настройках

## Преимущества

### Для пользователей

1. **Персонализация**: настройки сохраняются между сессиями
2. **Продуктивность**: не нужно заново настраивать таблицы
3. **Удобство**: автоматическое сохранение без дополнительных действий

### Для разработчиков

1. **Переиспользуемость**: composable можно использовать в любых таблицах
2. **Типизация**: полная поддержка TypeScript
3. **Реактивность**: автоматическая синхронизация с Vue.js реактивной системой
4. **Отказоустойчивость**: graceful fallback при ошибках localStorage

## Технические детали

### Использование Quasar LocalStorage

```typescript
import { LocalStorage } from 'quasar'

// Автоматическая сериализация объектов
LocalStorage.set('my-key', { data: 'value' })
const data = LocalStorage.getItem('my-key') // Объект, не строка

// Проверка наличия
if (LocalStorage.has('my-key')) {
  console.log('Данные найдены')
}

// Удаление
LocalStorage.remove('my-key')

// Получение всех ключей
const allKeys = LocalStorage.getAllKeys()
```

### Структура данных

```typescript
interface TableSettings {
  page: number
  rowsPerPage: number
  sortBy?: string
  descending?: boolean
  filter: string
  visibleColumns?: string[]
}
```

### Обработка ошибок

- Graceful handling ошибок localStorage (квота, отключенное хранилище)
- Fallback к настройкам по умолчанию при ошибках
- Логирование предупреждений в консоль

### Производительность

- **Автоматическая сериализация**: Quasar LocalStorage автоматически обрабатывает JSON
- **Минимальные вычисления**: эффективная инициализация настроек
- **Проверка доступности**: быстрая проверка наличия данных с `LocalStorage.has()`
- **Batch операции**: возможность массовых операций через менеджер настроек

## Расширение функциональности

### Добавление новых настроек

Чтобы добавить новый тип настроек:

1. Расширить интерфейс `TableSettings`
2. Добавить методы в `useTableSettings`
3. Обновить значения по умолчанию

### Интеграция с другими компонентами

Composable можно легко интегрировать с любыми Vue компонентами, использующими таблицы:

```typescript
// В любом компоненте
const tableSettings = useTableSettings('my-table')
```

## Будущие улучшения

1. **Настройки колонок**: полная реализация видимости и ширины колонок
2. **Экспорт/импорт**: возможность экспорта настроек в файл
3. **Профили**: множественные профили настроек для одной таблицы
4. **Синхронизация**: облачная синхронизация настроек между устройствами
