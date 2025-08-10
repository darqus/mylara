<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'ImageTableCell' })

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

<template>
  <div class="image-table-cell">
    <q-img
      v-if="imageUrl"
      :alt="alt"
      :src="imageUrl"
      class="image-table-cell__thumbnail"
      fit="cover"
      loading="lazy"
      @click="showFullImage"
    >
      <div class="image-table-cell__overlay">
        <q-icon
          color="white"
          name="zoom_in"
          size="20px"
        />
      </div>

      <template #error>
        <div class="image-table-cell__error">
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
      class="image-table-cell__placeholder"
    >
      <q-icon
        color="grey-5"
        name="image"
        size="24px"
      />
    </div>

    <!-- Диалог для полноразмерного просмотра -->
    <q-dialog v-model="showDialog">
      <q-card class="image-table-cell__dialog">
        <q-card-section class="q-pa-none">
          <q-img
            :alt="alt"
            :src="imageUrl || undefined"
            fit="contain"
            style="max-width: 80vw; max-height: 80vh"
          >
            <template #error>
              <div class="image-table-cell__error-full">
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

<style lang="scss">
// Styles moved to /src/css/components/_image-table-cell.scss
</style>
