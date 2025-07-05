<template>
  <div class="image-cell">
    <q-img
      v-if="imageUrl"
      :alt="alt"
      :src="imageUrl"
      class="image-thumbnail"
      fit="cover"
      loading="lazy"
      @click="showFullImage"
    >
      <div class="image-overlay">
        <q-icon
          color="white"
          name="zoom_in"
          size="20px"
        />
      </div>

      <template #error>
        <div class="image-error">
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
      class="image-placeholder"
    >
      <q-icon
        color="grey-5"
        name="image"
        size="24px"
      />
    </div>

    <!-- Диалог для полноразмерного просмотра -->
    <q-dialog v-model="showDialog">
      <q-card class="image-dialog">
        <q-card-section class="q-pa-none">
          <q-img
            :alt="alt"
            :src="imageUrl || undefined"
            fit="contain"
            style="max-height: 80vh; max-width: 80vw"
          >
            <template #error>
              <div class="image-error-full">
                <q-icon
                  color="grey-5"
                  name="broken_image"
                  size="48px"
                />
                <div class="text-grey-7 q-mt-sm">
                  Ошибка загрузки изображения
                </div>
              </div>
            </template>
          </q-img>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Закрыть"
            flat
            @click="showDialog = false"
          />
          <q-btn
            v-if="imageUrl"
            color="primary"
            icon="download"
            label="Скачать"
            flat
            @click="downloadImage"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue'

defineOptions({
  name: 'ImageTableCell',
})

type Props = {
  imageUrl?: string | null
  alt?: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  imageUrl: null,
  alt: 'Image',
  size: 40,
})

const showDialog = ref(false)

function showFullImage() {
  if (props.imageUrl) {
    showDialog.value = true
  }
}

function downloadImage() {
  if (!props.imageUrl) {
    return
  }

  const link = document.createElement('a')

  link.href = props.imageUrl
  link.download = props.alt || 'image'
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style scoped lang="scss">
.image-cell {
  position: relative;
  display: inline-block;
}

.image-thumbnail {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);

    .image-overlay {
      opacity: 1;
    }
  }
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 4px;
}

.image-placeholder,
.image-error {
  width: 40px;
  height: 40px;
  border: 1px dashed var(--q-grey-5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--q-grey-1);
}

.image-dialog {
  min-width: 300px;
}

.image-error-full {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
}
</style>
