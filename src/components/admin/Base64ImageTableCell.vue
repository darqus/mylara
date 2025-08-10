<script setup lang="ts">
import { computed } from 'vue'

import { useBase64Image } from 'src/composables/useBase64Image'

defineOptions({ name: 'Base64ImageTableCell' })

type Props = {
  base64Src?: string | null
  base64?: string | null // Для обратной совместимости
  alt?: string
  size?: number
  clickable?: boolean
  showAs?: 'thumbnail' | 'image' | 'icon'
  rounded?: boolean
}

type Emits = {
  (e: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  base64Src: null,
  base64: null,
  alt: 'Изображение',
  size: 60,
  clickable: true,
  showAs: 'thumbnail',
  rounded: false,
})

const emit = defineEmits<Emits>()

const { isValidBase64Image } = useBase64Image()

// Используем base64Src с fallback на base64 для совместимости
const imageSource = computed(() => props.base64Src ?? props.base64)

const hasValidImage = computed(() =>
  Boolean(imageSource.value && isValidBase64Image(imageSource.value))
)

const imageSize = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  minWidth: `${props.size}px`,
  minHeight: `${props.size}px`,
}))

function handleClick() {
  if (props.clickable && hasValidImage.value) {
    emit('click')
  }
}
</script>

<template>
  <div class="base64-image-table-cell">
    <q-img
      v-if="hasValidImage"
      :alt="alt"
      :class="{
        'base64-image-table-cell__image--clickable': clickable,
        'base64-image-table-cell__image--rounded': rounded,
      }"
      :src="imageSource || undefined"
      :style="imageSize"
      class="base64-image-table-cell__image"
      fit="cover"
      loading="lazy"
      @click="handleClick"
    >
      <div
        v-if="clickable"
        class="base64-image-table-cell__overlay"
      >
        <q-icon
          color="white"
          name="zoom_in"
          size="20px"
        />
      </div>

      <template #error>
        <div
          :style="imageSize"
          class="base64-image-table-cell__error"
        >
          <q-icon
            color="grey-5"
            name="broken_image"
            size="24px"
          />
        </div>
      </template>
    </q-img>

    <div
      v-else
      :class="{
        'base64-image-table-cell__placeholder--rounded': rounded,
      }"
      :style="imageSize"
      class="base64-image-table-cell__placeholder"
    >
      <q-icon
        :name="showAs === 'icon' ? 'link' : 'image'"
        color="grey-5"
        size="24px"
      />
    </div>
  </div>
</template>

<style lang="scss">
// Styles moved to /src/css/components/_base64-image-table-cell.scss
</style>
