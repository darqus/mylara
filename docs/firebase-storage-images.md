# Firebase Storage - Загрузка изображений в админке

Данный документ описывает реализацию функциональности загрузки изображений на Firebase Storage в админ-панели.

## Структура реализации

### 1. Сервис Firebase Storage (`firebase-storage.service.ts`)

Основной сервис для работы с Firebase Storage:

**Основные методы:**

- `uploadImage(file, options)` - загрузка изображения
- `uploadImageWithProgress(file, options, onProgress)` - загрузка с отслеживанием прогресса
- `deleteImageByUrl(url)` - удаление изображения по URL
- `validateImageFile(file, options)` - валидация файла

**Опции загрузки:**

```typescript
{
  path?: string          // путь для сохранения (по умолчанию 'images')
  filename?: string      // имя файла (если не указано, генерируется автоматически)
  maxSizeKB?: number     // максимальный размер в KB (по умолчанию 5000)
  allowedTypes?: string[] // разрешенные MIME-типы
}
```

### 2. Компонент загрузки изображений (`ImageUploader.vue`)

Интерактивный компонент для загрузки изображений с поддержкой:

- Drag & Drop
- Предварительный просмотр
- Индикатор загрузки
- Валидация файлов
- Удаление изображений

**Пропсы:**

- `modelValue` - URL текущего изображения
- `disabled` - блокировка компонента
- `maxSizeKB` - максимальный размер файла
- `allowedTypes` - разрешенные типы файлов
- `path` - путь для сохранения в Storage
- `placeholder` - подсказка

**События:**

- `@update:modelValue` - изменение URL изображения
- `@upload-start` - начало загрузки
- `@upload-success` - успешная загрузка
- `@upload-error` - ошибка загрузки

### 3. Компонент отображения изображений в таблице (`ImageTableCell.vue`)

Компонент для отображения миниатюр изображений в таблицах с возможностью:

- Просмотра полноразмерного изображения
- Скачивания изображения
- Обработки ошибок загрузки

### 4. Интеграция с формами (`AdminFormDialog.vue`)

Обновленный компонент формы с поддержкой типа поля `'image'`:

```vue
<ImageUploader
  :model-value="formData[field.name]"
  @update:model-value="formData[field.name] = $event"
/>
```

## Конфигурация полей

### Добавление поля изображения в конфигурацию коллекции

```typescript
{
  name: 'img',
  label: 'Изображение',
  type: 'image',
  required: true,
  placeholder: 'Загрузите изображение',
  imageOptions: {
    maxSizeKB: 3000,
    allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    path: 'products'
  }
}
```

### Конфигурация колонки таблицы

```typescript
{
  name: 'img',
  label: 'Изображение',
  field: 'img',
  align: 'center',
  sortable: false,
  format: (val: unknown) => val ? val as string : ''
}
```

## Обновление Firebase configuration

Убедитесь, что в `.env` файле настроен `VITE_FIREBASE_STORAGE_BUCKET`:

```env
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
```

## Использование в существующих коллекциях

### Обновление конфигурации carousel

```typescript
{
  name: 'img',
  label: 'Изображение',
  type: 'image', // изменено с 'url'
  required: true,
  placeholder: 'Загрузите изображение продукта',
  imageOptions: {
    maxSizeKB: 3000,
    allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    path: 'carousel'
  }
}
```

### Обновление конфигурации slides

```typescript
{
  name: 'img',
  label: 'Изображение',
  type: 'image', // изменено с 'url'
  required: true,
  placeholder: 'Загрузите изображение слайда',
  imageOptions: {
    maxSizeKB: 3000,
    allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    path: 'slides'
  }
}
```

## Особенности реализации

### Автоматическое удаление изображений

При удалении записи из базы данных, связанное изображение в Storage НЕ удаляется автоматически. Это сделано для безопасности данных. При необходимости можно добавить логику очистки.

### Генерация имен файлов

Имена файлов генерируются автоматически в формате: `{timestamp}_{randomId}.{extension}`

### Валидация

- Проверка типа файла (MIME-type)
- Проверка размера файла
- Проверка корректности изображения

### Обработка ошибок

- Ошибки валидации отображаются пользователю
- Ошибки загрузки логируются в консоль
- Graceful fallback для поврежденных изображений

## Расширение функциональности

### Добавление новых типов файлов

Обновите `allowedTypes` в конфигурации поля:

```typescript
allowedTypes: [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
]
```

### Изменение лимитов размера

Обновите `maxSizeKB` в конфигурации поля:

```typescript
maxSizeKB: 5000 // 5MB
```

### Кастомные пути сохранения

Используйте параметр `path` для организации файлов:

```typescript
path: 'products/categories/electronics'
```

## Требования

- Firebase SDK v9+
- Vue 3
- Quasar Framework
- TypeScript

## Безопасность

- Валидация файлов на клиенте
- Ограничения размера файлов
- Проверка MIME-типов
- Использование Firebase Security Rules для Storage

Рекомендуется настроить Firebase Security Rules для дополнительной защиты:

```javascript
// Firebase Storage Security Rules
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
    }
  }
}
```
