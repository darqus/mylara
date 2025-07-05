<template>
  <div class="image-uploader">
    <!-- Область для перетаскивания файлов -->
    <div
      :class="{
        'image-uploader__upload-area--dragover': isDragOver,
        'image-uploader__upload-area--disabled': disabled,
      }"
      class="image-uploader__upload-area"
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
        v-if="previewUrl"
        class="image-uploader__preview"
      >
        <q-img
          :alt="fileName"
          :src="previewUrl"
          class="rounded-borders"
          style="max-width: 100%; max-height: 200px"
        />
        <div class="image-uploader__info">
          <div class="text-caption text-grey-7">
            {{ fileName }}
          </div>
          <div class="text-caption text-grey-6">
            {{ formatFileSize(fileSize) }}
          </div>
        </div>
        <q-btn
          v-if="!disabled"
          class="image-uploader__remove-btn"
          color="negative"
          icon="close"
          size="sm"
          dense
          round
          @click.stop="removeImage"
        >
          <q-tooltip>Удалить изображение</q-tooltip>
        </q-btn>
      </div>

      <!-- Placeholder для загрузки -->
      <div
        v-else
        class="image-uploader__placeholder"
      >
        <q-icon
          color="grey-5"
          name="cloud_upload"
          size="48px"
        />
        <div class="text-h6 text-grey-7 q-mt-sm">Загрузить изображение</div>
        <div class="text-caption text-grey-6">
          Перетащите файл сюда или нажмите для выбора
        </div>
        <div class="text-caption text-grey-5 q-mt-sm">
          Поддерживаемые форматы: JPG, PNG, GIF, WebP
        </div>
        <div class="text-caption text-grey-5">
          Максимальный размер: {{ formatFileSize((maxSizeKB ?? 5000) * 1024) }}
        </div>
      </div>

      <!-- Индикатор загрузки -->
      <div
        v-if="uploading"
        class="image-uploader__overlay"
      >
        <q-circular-progress
          :thickness="0.2"
          :value="uploadProgress"
          class="q-ma-md"
          color="primary"
          size="50px"
          track-color="grey-3"
        />
        <div class="text-body2 text-grey-8">
          Загрузка... {{ uploadProgress }}%
        </div>
      </div>
    </div>

    <!-- Сообщения об ошибках -->
    <div
      v-if="errorMessage"
      class="text-negative q-mt-sm"
    >
      <q-icon
        class="q-mr-xs"
        name="error"
      />
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import { firebaseStorageService } from 'src/services/firebase-storage.service'
import type { ImageUploadOptions } from 'src/services/firebase-storage.service'

defineOptions({
  name: 'ImageUploader',
})

type Props = {
  modelValue?: string | null
  disabled?: boolean
  maxSizeKB?: number
  allowedTypes?: string[]
  path?: string
  placeholder?: string
}

type Emits = {
  (e: 'update:modelValue', value: string | null): void
  (e: 'upload-start'): void
  (e: 'upload-success', url: string): void
  (e: 'upload-error', error: string): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  disabled: false,
  maxSizeKB: 5000,
  allowedTypes: () => [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
  ],
  path: 'images',
  placeholder: '',
})

const emit = defineEmits<Emits>()

const fileInput = ref<HTMLInputElement>()
const isDragOver = ref(false)
const uploading = ref(false)
const uploadProgress = ref(0)
const errorMessage = ref('')
const previewUrl = ref<string | null>(null)
const fileName = ref('')
const fileSize = ref(0)

// Вычисляемые свойства
const imageUrl = computed({
  get: () => props.modelValue,
  set: (value: string | null) => emit('update:modelValue', value),
})

// Следим за изменениями URL изображения
watch(
  () => props.modelValue,
  (newUrl) => {
    if (newUrl && newUrl !== previewUrl.value) {
      previewUrl.value = newUrl
      fileName.value = extractFileNameFromUrl(newUrl)
      fileSize.value = 0 // Размер неизвестен для внешних URL
    } else if (!newUrl) {
      resetPreview()
    }
  },
  {
    immediate: true,
  },
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
    void uploadFile(file)
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

  if (file && file.type.startsWith('image/')) {
    void uploadFile(file)
  }
}

async function uploadFile(file: File) {
  errorMessage.value = ''
  uploading.value = true
  uploadProgress.value = 0

  // Создаем предварительный просмотр
  createPreview(file)

  emit('upload-start')

  const options: ImageUploadOptions = {
    path: props.path,
    maxSizeKB: props.maxSizeKB,
    allowedTypes: props.allowedTypes,
  }

  try {
    const result = await firebaseStorageService.uploadImageWithProgress(
      file,
      options,
      (progress) => {
        uploadProgress.value = progress.percentage
      },
    )

    if (result.error) {
      errorMessage.value = result.error
      emit('upload-error', result.error)
      resetPreview()
    } else if (result.url) {
      imageUrl.value = result.url
      emit('upload-success', result.url)
    }
  } finally {
    uploading.value = false
    uploadProgress.value = 0
  }
}

function createPreview(file: File) {
  const reader = new FileReader()

  reader.onload = (e) => {
    previewUrl.value = e.target?.result as string
    fileName.value = file.name
    fileSize.value = file.size
  }

  reader.readAsDataURL(file)
}

function resetPreview() {
  previewUrl.value = null
  fileName.value = ''
  fileSize.value = 0
}

async function removeImage() {
  if (!imageUrl.value) {
    return
  }

  try {
    await firebaseStorageService.deleteImageByUrl(imageUrl.value)
  } catch (error) {
    console.warn('Error deleting image:', error)
  }

  imageUrl.value = null
  resetPreview()
  errorMessage.value = ''
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) {
    return '0 Bytes'
  }

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

function extractFileNameFromUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
    const segments = pathname.split('/')

    return segments[segments.length - 1] ?? 'image'
  } catch {
    return 'image'
  }
}
</script>

<style lang="scss">
// Styles moved to /src/css/components/_image-uploader.scss
</style>
