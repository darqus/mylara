# Интеграция Base64 изображений в админ панель

## Обзор

Система base64 изображений полностью интегрирована в админ панель для загрузки, редактирования и отображения изображений в виде строк base64.

## Возможности

### 1. Загрузка изображений в формах

- Загрузка через drag & drop
- Выбор файлов через диалог
- Автоматическое сжатие изображений
- Валидация формата и размера
- Предварительный просмотр
- Копирование base64 строки

### 2. Отображение в таблицах

- Миниатюры изображений в ячейках таблицы
- Клик для просмотра в полном размере
- Обработка ошибок загрузки
- Адаптивный дизайн

### 3. Полноэкранный просмотр

- Модальное окно для просмотра изображений
- Темная тема для лучшего восприятия
- Адаптивный размер изображения

## Конфигурация полей

В `admin-config.service.ts` используйте тип поля `'base64-image'`:

```typescript
{
  name: 'img',
  label: 'Изображение',
  type: 'base64-image',
  required: false,
  showInTable: true,
  showAs: 'image', // или 'thumbnail' для миниатюры
}
```

### Доступные опции showAs

- `'image'` - обычное изображение (200x150px)
- `'thumbnail'` - миниатюра (100x75px)

## Пример коллекции

```typescript
base64Gallery: {
  name: 'base64Gallery',
  label: 'Base64 Галерея',
  fields: [
    {
      name: 'title',
      label: 'Название',
      type: 'text',
      required: true,
      showInTable: true,
    },
    {
      name: 'img',
      label: 'Изображение',
      type: 'base64-image',
      required: false,
      showInTable: true,
      showAs: 'image',
    },
    {
      name: 'thumbnail',
      label: 'Миниатюра',
      type: 'base64-image',
      required: false,
      showInTable: true,
      showAs: 'thumbnail',
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
      required: false,
      showInTable: false,
    },
  ],
},
```

## Технические детали

### Компоненты

1. **Base64ImageUploader** - компонент загрузки
   - Расположение: `src/components/common/Base64ImageUploader.vue`
   - Поддерживает drag & drop
   - Автоматическое сжатие

2. **Base64Image** - компонент отображения
   - Расположение: `src/components/common/Base64Image.vue`
   - Обработка ошибок
   - Событие клика для просмотра

3. **Base64ImageTableCell** - ячейка таблицы
   - Расположение: `src/components/admin/Base64ImageTableCell.vue`
   - Адаптивные размеры
   - Интеграция с диалогом просмотра

### Composable

**useBase64Image** - основная логика обработки

- Расположение: `src/composables/useBase64Image.ts`
- Функции конвертации
- Валидация
- Сжатие изображений

### Интеграция в админ панель

1. **AdminFormDialog.vue** - поддержка редактирования base64 полей
2. **AdminCollectionPage.vue** - отображение в таблицах и диалог просмотра

## Использование

1. Добавьте поле типа `'base64-image'` в конфигурацию коллекции
2. Установите `showAs: 'image'` или `showAs: 'thumbnail'` для отображения в таблице
3. Поле будет автоматически обрабатываться системой админ панели

## Файловые форматы

Поддерживаемые форматы:

- JPEG/JPG
- PNG
- GIF
- WebP

Максимальный размер файла: 10MB
Автоматическое сжатие до качества 80% при размере > 1MB

## API

### События компонентов

```typescript
// Base64ImageUploader
emit('update:modelValue', base64String)

// Base64Image
emit('click', event)
```

### Функции composable

```typescript
const { fileToBase64, isValidBase64Image, getBase64MimeType, formatFileSize } =
  useBase64Image()
```
