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

<style lang="scss" scoped>
.base64-image-table-cell {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &__image {
    position: relative;
    border-radius: 6px;
    // border: 1px solid var(--q-grey-4);
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &--clickable {
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

        .base64-image-table-cell__overlay {
          opacity: 1;
        }
      }
    }

    &--rounded {
      border-radius: 50%;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &__placeholder,
  &__error {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--q-grey-2);
    border: 1px solid var(--q-grey-4);
    border-radius: 6px;
    transition: all 0.2s ease;

    &--rounded {
      border-radius: 50%;
    }
  }

  &__error {
    background-color: var(--q-red-1);
    border-color: var(--q-red-3);
  }
}
</style>
