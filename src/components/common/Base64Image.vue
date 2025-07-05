<script setup lang="ts">
import { computed } from 'vue'

import { useBase64Image } from 'src/composables/useBase64Image'

defineOptions({ name: 'Base64Image' })

type Props = {
  src?: string | null
  alt?: string
  // eslint-disable-next-line vue/require-default-prop
  width?: number | string
  // eslint-disable-next-line vue/require-default-prop
  height?: number | string
  fit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'
  loading?: 'lazy' | 'eager'
  fallbackIcon?: string
  fallbackText?: string
  showInfo?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  src: null,
  alt: 'Image',
  fit: 'cover',
  loading: 'lazy',
  fallbackIcon: 'broken_image',
  fallbackText: 'Изображение недоступно',
  showInfo: false,
  clickable: false,
})

type Emits = {
  (e: 'click'): void
}

const emit = defineEmits<Emits>()

const { isValidBase64Image, formatFileSize, getMimeTypeFromBase64 } =
  useBase64Image()

// Вычисляемые свойства
const isValidImage = computed(() =>
  Boolean(props.src && isValidBase64Image(props.src))
)

const imageInfo = computed(() => {
  if (!props.src || !isValidImage.value) {
    return null
  }

  const size = Math.round((props.src.length * 3) / 4)
  const mimeType = getMimeTypeFromBase64(props.src)

  return {
    size,
    formattedSize: formatFileSize(size),
    mimeType,
    format: mimeType?.split('/')[1]?.toUpperCase() ?? 'UNKNOWN',
  }
})

const imageStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.width) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  if (props.height) {
    style.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height
  }

  return style
})

function handleClick() {
  if (props.clickable) {
    emit('click')
  }
}
</script>

<template>
  <div
    :class="{
      'base64-image--clickable': clickable,
    }"
    class="base64-image"
  >
    <!-- Изображение -->
    <q-img
      v-if="isValidImage"
      :alt="alt"
      :fit="fit"
      :loading="loading"
      :src="src || undefined"
      :style="imageStyle"
      class="base64-image__img"
      @click="handleClick"
    >
      <template #error>
        <div class="base64-image__fallback">
          <q-icon
            :name="fallbackIcon"
            color="grey-5"
            size="48px"
          />
          <div class="text-grey-7 q-mt-sm">
            {{ fallbackText }}
          </div>
        </div>
      </template>
    </q-img>

    <!-- Заглушка для невалидного изображения -->
    <div
      v-else
      :style="imageStyle"
      class="base64-image__placeholder"
    >
      <q-icon
        :name="fallbackIcon"
        color="grey-5"
        size="48px"
      />
      <div class="text-grey-7 q-mt-sm">
        {{ fallbackText }}
      </div>
    </div>

    <!-- Информация об изображении -->
    <div
      v-if="showInfo && imageInfo"
      class="base64-image__info"
    >
      <q-chip
        :label="`${imageInfo.format} • ${imageInfo.formattedSize}`"
        color="primary"
        size="sm"
        outline
      />
    </div>
  </div>
</template>

<style lang="scss">
// Styles moved to /src/css/components/_base64-image.scss
</style>
