# Реактивная система настроек таблиц для коллекций

## Проблема

При переходе между разными коллекциями (например, `/admin/collection/carousel` → `/admin/collection/slides`) настройки таблицы не обновлялись, так как `useTableSettings` вызывался с фиксированным значением `collectionName.value`.

## Решение

Сделали систему настроек полностью реактивной, чтобы она автоматически реагировала на изменения названия коллекции.

### Ключевые изменения

#### 1. Обновлена сигнатура функций

```typescript
// Было:
export function useTableSettings(collectionName: string)
export function useColumnSettings(collectionName: string)

// Стало:
export function useTableSettings(collectionName: MaybeRefOrGetter<string>)
export function useColumnSettings(collectionName: MaybeRefOrGetter<string>)
```

#### 2. Добавлена поддержка реактивных значений

- Используется `unref()` для получения актуального значения
- `storageKey` теперь computed значение
- Добавлены watchers для отслеживания изменений названия коллекции

#### 3. Автоматическая перезагрузка настроек

```typescript
watch(
  () => unref(collectionName),
  () => {
    const freshSettings = loadSettings()
    Object.assign(settings.value, freshSettings)
  }
)
```

### Использование

#### В AdminCollectionPage.vue

```typescript
// Теперь можно передавать computed значение
const collectionName = computed(() => route.params.collection as string)
const { settings, paginationSettings, ... } = useTableSettings(collectionName)
```

#### Поддерживаемые типы параметров

```typescript
// Строка
useTableSettings('carousel')

// Ref
const collection = ref('carousel')
useTableSettings(collection)

// Computed
const collection = computed(() => route.params.collection)
useTableSettings(collection)

// Getter функция
useTableSettings(() => route.params.collection)
```

## Автоматические функции

### При смене коллекции

1. ✅ Автоматически загружаются настройки новой коллекции
2. ✅ Обновляется storageKey (`table-settings-${newCollection}`)
3. ✅ Применяются корректные настройки пагинации, фильтров и сортировки
4. ✅ Сохраняется состояние для каждой коллекции отдельно

### Примеры ключей в localStorage

- `table-settings-carousel` - настройки для коллекции carousel
- `table-settings-slides` - настройки для коллекции slides
- `table-settings-gallery` - настройки для коллекции gallery
- `column-settings-carousel` - настройки колонок для carousel

## Обратная совместимость

✅ Полная обратная совместимость с существующим кодом
✅ Все существующие данные в localStorage остаются корректными
✅ API остается неизменным для статических значений

## Тестирование

Добавлены специальные тесты для проверки:

- Реактивности при смене коллекции
- Корректной загрузки настроек для разных коллекций
- Работы с computed значениями из router

## Производительность

- Watchers запускаются только при реальном изменении названия коллекции
- Настройки загружаются из localStorage только при необходимости
- Минимальные изменения в существующем коде

## Результат

Теперь при переходе `/admin/collection/carousel` → `/admin/collection/slides`:

1. Автоматически загружаются настройки таблицы для коллекции "slides"
2. Применяются сохраненные фильтры, сортировка, пагинация
3. Состояние таблицы корректно восстанавливается
4. Нет необходимости в ручной перезагрузке настроек
