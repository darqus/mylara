# Base64 Image Components

Набор компонентов и утилит для работы с изображениями в формате base64 в Vue 3 + Quasar проекте.

## Компоненты

### 1. `useBase64Image` - Composable

Composable для работы с изображениями в формате base64.

#### Основные методы

- `fileToBase64(file, options)` - Преобразует файл в base64 с возможностью сжатия
- `getImageInfo(base64)` - Получает информацию об изображении из base64
- `isValidBase64Image(base64)` - Проверяет валидность base64 изображения
- `getMimeTypeFromBase64(base64)` - Извлекает MIME-тип из base64
- `formatFileSize(bytes)` - Форматирует размер файла

#### Пример использования

```typescript
import { useBase64Image } from 'src/composables/useBase64Image'

const { fileToBase64, loading, error } = useBase64Image()

const result = await fileToBase64(file, {
  maxSizeKB: 2000,
  maxWidth: 800,
  maxHeight: 600,
  quality: 0.8,
})
```

### 2. `Base64ImageUploader` - Компонент загрузки

Интерактивный компонент для загрузки и преобразования изображений в base64.

#### Основные возможности

- Drag & Drop загрузка
- Валидация типов файлов и размера
- Автоматическое сжатие изображений
- Предварительный просмотр
- Копирование base64 в буфер обмена
- Скачивание изображения
- Показ/скрытие base64 строки

#### Пропсы

```typescript
type Props = {
  modelValue?: string | null // Base64 строка изображения
  disabled?: boolean // Блокировка компонента
  maxSizeKB?: number // Максимальный размер файла в KB
  allowedTypes?: string[] // Разрешенные MIME-типы
  maxWidth?: number // Максимальная ширина (для сжатия)
  maxHeight?: number // Максимальная высота (для сжатия)
  quality?: number // Качество сжатия (0.1-1.0)
  placeholder?: string // Текст-подсказка
  showPreview?: boolean // Показывать предварительный просмотр
  allowCopy?: boolean // Разрешить копирование base64
}
```

#### События

- `@update:modelValue` - Изменение base64 значения
- `@upload-start` - Начало загрузки
- `@upload-success` - Успешная загрузка
- `@upload-error` - Ошибка загрузки

#### Пример использования

```vue
<template>
  <Base64ImageUploader
    v-model="base64Image"
    :max-size-k-b="2000"
    :max-width="800"
    :max-height="600"
    :quality="0.8"
    placeholder="Загрузите изображение"
    @upload-success="handleSuccess"
    @upload-error="handleError"
  />
</template>

<script setup>
import { ref } from 'vue'
import Base64ImageUploader from 'src/components/common/Base64ImageUploader.vue'

const base64Image = ref(null)

function handleSuccess(base64) {
  console.log('Изображение загружено:', base64.substring(0, 50) + '...')
}

function handleError(error) {
  console.error('Ошибка:', error)
}
</script>
```

### 3. `Base64Image` - Компонент отображения

Компонент для отображения изображений из base64 строк.

#### Основные возможности

- Отображение base64 изображений
- Настраиваемые размеры
- Различные режимы fit
- Обработка ошибок загрузки
- Информация о файле
- Клик-события

#### Пропсы

```typescript
type Props = {
  src?: string | null // Base64 строка изображения
  alt?: string // Альтернативный текст
  width?: number | string // Ширина изображения
  height?: number | string // Высота изображения
  fit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'
  loading?: 'lazy' | 'eager' // Тип загрузки
  fallbackIcon?: string // Иконка для заглушки
  fallbackText?: string // Текст для заглушки
  showInfo?: boolean // Показывать информацию о файле
  clickable?: boolean // Разрешить клики
}
```

#### События

- `@click` - Клик по изображению (если clickable=true)

#### Пример использования

```vue
<template>
  <Base64Image
    :src="base64Image"
    alt="Пример изображения"
    width="200"
    height="200"
    fit="cover"
    clickable
    show-info
    @click="showFullImage"
  />
</template>

<script setup>
import Base64Image from 'src/components/common/Base64Image.vue'

function showFullImage() {
  // Показать изображение в полный размер
}
</script>
```

## Интеграция с формами

Компонент `Base64ImageUploader` можно легко интегрировать с формами:

```vue
<template>
  <q-form @submit="onSubmit">
    <!-- Другие поля формы -->

    <Base64ImageUploader
      v-model="form.avatar"
      :max-size-k-b="1000"
      :max-width="400"
      :max-height="400"
      placeholder="Загрузите аватар"
    />

    <q-btn
      type="submit"
      label="Сохранить"
    />
  </q-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  avatar: null, // base64 строка
})

function onSubmit() {
  // Отправить форму с base64 изображением
  console.log(form)
}
</script>
```

## Интеграция с админкой

Обновление `AdminFormDialog.vue` для поддержки base64 изображений:

```vue
<!-- В AdminFormDialog.vue добавить новый тип поля -->
<Base64ImageUploader
  v-else-if="field.type === 'base64-image'"
  :model-value="formData[field.name]"
  :max-size-k-b="field.maxSizeKB || 2000"
  :max-width="field.maxWidth"
  :max-height="field.maxHeight"
  :quality="field.quality || 0.8"
  @update:model-value="formData[field.name] = $event"
/>
```

## Демо и тестирование

Для тестирования функциональности доступна демо-страница:

```
/demo/base64-image
```

На демо-странице можно:

- Протестировать различные настройки загрузчика
- Посмотреть на работу компонента отображения
- Изучить возможности сжатия и валидации
- Скопировать base64 строки в буфер обмена

## Преимущества использования

1. **Простота хранения** - не требуется файловое хранилище
2. **Встроенная валидация** - проверка типов и размеров файлов
3. **Автоматическое сжатие** - оптимизация размера изображений
4. **Готовый UI** - красивые компоненты с drag & drop
5. **TypeScript поддержка** - типизированные интерфейсы
6. **Reusable** - переиспользуемые компоненты
7. **Кроссплатформенность** - работает везде, где есть браузер

## Ограничения

1. **Размер данных** - base64 увеличивает размер файла на ~33%
2. **Память браузера** - большие изображения могут занимать много памяти
3. **Производительность** - обработка больших файлов может быть медленной
4. **Кэширование** - base64 изображения сложнее кэшировать

## Рекомендации

1. Используйте сжатие для больших изображений
2. Устанавливайте разумные ограничения по размеру (1-2MB)
3. Показывайте индикаторы загрузки для лучшего UX
4. Предоставляйте возможность предварительного просмотра
5. Добавляйте валидацию на стороне сервера
