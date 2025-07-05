<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import {
  useBase64Image,
  type Base64ImageOptions,
} from 'src/composables/useBase64Image'

defineOptions({ name: 'Base64ImageUploader' })

type Props = {
  modelValue?: string | null
  disabled?: boolean
  maxSizeKB?: number
  allowedTypes?: string[]
  maxWidth?: number
  maxHeight?: number
  quality?: number
  placeholder?: string
  showPreview?: boolean
  allowCopy?: boolean
}

type Emits = {
  (e: 'update:modelValue', value: string | null): void
  (e: 'upload-start'): void
  (e: 'upload-success', base64: string): void
  (e: 'upload-error', error: string): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  disabled: false,
  maxSizeKB: 2000,
  allowedTypes: () => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  maxWidth: 1920,
  maxHeight: 1080,
  quality: 0.8,
  placeholder: '',
  showPreview: true,
  allowCopy: true,
})

const emit = defineEmits<Emits>()

const { loading, error, fileToBase64, formatFileSize, isValidBase64Image } =
  useBase64Image()

const fileInput = ref<HTMLInputElement>()
const isDragOver = ref(false)
const previewUrl = ref<string | null>(null)
const fileName = ref('')
const fileSize = ref(0)
const showCopySuccess = ref(false)

// Вычисляемые свойства
const base64Value = computed({
  get: () => props.modelValue,
  set: (value: string | null) => emit('update:modelValue', value),
})

const hasImage = computed(() =>
  Boolean(base64Value.value && isValidBase64Image(base64Value.value))
)

const formattedAllowedTypes = computed(() => {
  const types = props.allowedTypes || ['image/jpeg', 'image/png', 'image/webp']

  return types
    .map((type) => type.split('/')[1]?.toUpperCase() ?? '')
    .filter(Boolean)
    .join(', ')
})

// Следим за изменениями base64 значения
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue && isValidBase64Image(newValue)) {
      previewUrl.value = newValue
      fileName.value = extractFileNameFromBase64(newValue)
      fileSize.value = Math.round((newValue.length * 3) / 4)
    } else {
      resetPreview()
    }
  },
  { immediate: true }
)

function triggerFileInput() {
  if (!props.disabled && fileInput.value) {
    fileInput.value.click()
  }
}

function handleFileSelect(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    void processFile(file)
  }

  // Очищаем input для возможности загрузки того же файла снова
  if (target) {
    target.value = ''
  }
}

function handleDragEnter() {
  if (!props.disabled) {
    isDragOver.value = true
  }
}

function handleDragOver() {
  if (!props.disabled) {
    isDragOver.value = true
  }
}

function handleDragLeave() {
  isDragOver.value = false
}

function handleDrop(event: DragEvent) {
  isDragOver.value = false

  if (props.disabled) {
    return
  }

  const file = event.dataTransfer?.files[0]

  if (file?.type.startsWith('image/')) {
    void processFile(file)
  }
}

async function processFile(file: File) {
  emit('upload-start')

  const options: Base64ImageOptions = {
    maxSizeKB: props.maxSizeKB,
    allowedTypes: props.allowedTypes,
    ...(props.maxWidth && { maxWidth: props.maxWidth }),
    ...(props.maxHeight && { maxHeight: props.maxHeight }),
    quality: props.quality,
  }

  const result = await fileToBase64(file, options)

  if (result) {
    base64Value.value = result.base64
    previewUrl.value = result.base64
    fileName.value = file.name
    fileSize.value = result.compressedSize
    emit('upload-success', result.base64)
  } else {
    emit('upload-error', error.value ?? 'Ошибка загрузки изображения')
  }
}

function removeImage() {
  base64Value.value = null
  resetPreview()
}

function resetPreview() {
  previewUrl.value = null
  fileName.value = ''
  fileSize.value = 0
}

function extractFileNameFromBase64(base64: string): string {
  // Извлекаем тип изображения из base64
  const mimeMatch = base64.match(/^data:image\/([^;]+);base64,/)

  if (mimeMatch) {
    const extension = mimeMatch[1] === 'jpeg' ? 'jpg' : mimeMatch[1]

    return `image.${extension}`
  }

  return 'image.jpg'
}

async function copyToClipboard() {
  if (!base64Value.value) {
    return
  }

  try {
    await navigator.clipboard.writeText(base64Value.value)
    showCopySuccess.value = true
    setTimeout(() => {
      showCopySuccess.value = false
    }, 2000)
  } catch (err) {
    console.error('Ошибка копирования в буфер обмена:', err)
  }
}

function downloadAsFile() {
  if (!base64Value.value) {
    return
  }

  const link = document.createElement('a')

  link.href = base64Value.value
  link.download = fileName.value || 'image.jpg'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="base64-image-uploader">
    <!-- Область для перетаскивания файлов -->
    <div
      :class="{
        'base64-image-uploader__upload-area--dragover': isDragOver,
        'base64-image-uploader__upload-area--disabled': disabled,
        'base64-image-uploader__upload-area--has-image': hasImage,
      }"
      class="base64-image-uploader__upload-area"
      @click="triggerFileInput"
      @dragenter.prevent="handleDragEnter"
      @dragleave.prevent="handleDragLeave"
      @dragover.prevent="handleDragOver"
      @drop.prevent="handleDrop"
    >
      <!-- Скрытый input для выбора файлов -->
      <input
        ref="fileInput"
        :disabled="disabled"
        accept="image/*"
        style="display: none"
        type="file"
        @change="handleFileSelect"
      />

      <!-- Предварительный просмотр изображения -->
      <div
        v-if="showPreview && previewUrl"
        class="base64-image-uploader__preview"
      >
        <q-img
          :alt="fileName"
          :src="previewUrl"
          class="rounded-borders"
          style="max-width: 100%; max-height: 300px"
        />

        <div class="base64-image-uploader__info">
          <div class="text-caption text-grey-7">
            {{ fileName }}
          </div>
          <div class="text-caption text-grey-6">
            {{ formatFileSize(fileSize) }}
          </div>
        </div>

        <!-- Кнопки действий -->
        <div class="base64-image-uploader__actions">
          <q-btn
            v-if="allowCopy"
            :color="showCopySuccess ? 'positive' : 'primary'"
            :icon="showCopySuccess ? 'check' : 'content_copy'"
            :label="showCopySuccess ? 'Скопировано' : 'Копировать Base64'"
            size="sm"
            dense
            outline
            @click.stop="copyToClipboard"
          >
            <q-tooltip>Копировать base64 строку в буфер обмена</q-tooltip>
          </q-btn>

          <q-btn
            color="secondary"
            icon="download"
            label="Скачать"
            size="sm"
            dense
            outline
            @click.stop="downloadAsFile"
          >
            <q-tooltip>Скачать изображение как файл</q-tooltip>
          </q-btn>

          <q-btn
            v-if="!disabled"
            color="negative"
            icon="delete"
            label="Удалить"
            size="sm"
            dense
            outline
            @click.stop="removeImage"
          >
            <q-tooltip>Удалить изображение</q-tooltip>
          </q-btn>
        </div>
      </div>

      <!-- Placeholder для загрузки -->
      <div
        v-else
        class="base64-image-uploader__placeholder"
      >
        <q-icon
          color="grey-5"
          name="image"
          size="48px"
        />
        <div class="text-h6 text-grey-7 q-mt-sm">
          {{ placeholder || 'Загрузить изображение' }}
        </div>
        <div class="text-caption text-grey-6">
          Перетащите файл сюда или нажмите для выбора
        </div>
        <div class="text-caption text-grey-5 q-mt-sm">
          Поддерживаемые форматы: {{ formattedAllowedTypes }}
        </div>
        <div class="text-caption text-grey-5">
          Максимальный размер: {{ formatFileSize(maxSizeKB * 1024) }}
        </div>
      </div>

      <!-- Индикатор загрузки -->
      <div
        v-if="loading"
        class="base64-image-uploader__overlay"
      >
        <q-circular-progress
          :thickness="0.2"
          class="q-ma-md"
          color="primary"
          size="50px"
          indeterminate
        />
        <div class="text-body2 text-grey-8">Обработка изображения...</div>
      </div>
    </div>

    <!-- Сообщения об ошибках -->
    <div
      v-if="error"
      class="text-negative q-mt-sm"
    >
      <q-icon
        class="q-mr-xs"
        name="error"
      />
      {{ error }}
    </div>

    <!-- Информация о base64 строке -->
    <div
      v-if="hasImage && base64Value"
      class="base64-image-uploader__base64-info q-mt-sm"
    >
      <q-expansion-item
        icon="code"
        label="Base64 строка"
        dense
      >
        <div class="q-pa-md bg-grey-1">
          <q-input
            :model-value="base64Value"
            label="Base64 данные"
            rows="3"
            type="textarea"
            filled
            readonly
          >
            <template #append>
              <q-btn
                v-if="allowCopy"
                :color="showCopySuccess ? 'positive' : 'primary'"
                :icon="showCopySuccess ? 'check' : 'content_copy'"
                dense
                flat
                round
                @click="copyToClipboard"
              >
                <q-tooltip>Копировать в буфер обмена</q-tooltip>
              </q-btn>
            </template>
          </q-input>
        </div>
      </q-expansion-item>
    </div>
  </div>
</template>

<style lang="scss">
// Styles moved to /src/css/components/_base64-image-uploader.scss
</style>
