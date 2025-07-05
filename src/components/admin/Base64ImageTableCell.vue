<script setup lang="ts">
import { computed } from 'vue'

import { useBase64Image } from 'src/composables/useBase64Image'

defineOptions({ name: 'Base64ImageTableCell' })

type Props = {
  base64?: string | null
  alt?: string
  size?: number
  clickable?: boolean
}

type Emits = {
  (e: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  base64: null,
  alt: 'Image',
  size: 40,
  clickable: false,
})

const emit = defineEmits<Emits>()

const { isValidBase64Image } = useBase64Image()

const hasValidImage = computed(() =>
  Boolean(props.base64 && isValidBase64Image(props.base64))
)

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
      :src="base64 || undefined"
      :style="{ width: `${size}px`, height: `${size}px` }"
      class="base64-image-table-cell__thumbnail"
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
        <div class="base64-image-table-cell__error">
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
      :style="{ width: `${size}px`, height: `${size}px` }"
      class="base64-image-table-cell__placeholder"
    >
      <q-icon
        color="grey-5"
        name="image"
        size="24px"
      />
    </div>
  </div>
</template>

<style lang="scss">
.base64-image-table-cell {
  &__thumbnail {
    position: relative;
    cursor: pointer;
    border-radius: 4px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);

      .base64-image-table-cell__overlay {
        opacity: 1;
      }
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
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
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
    border-radius: 4px;
  }

  &__error {
    background-color: var(--q-grey-3);
  }
}
</style>
