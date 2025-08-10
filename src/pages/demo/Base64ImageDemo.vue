<script setup lang="ts">
import { ref } from 'vue'

import Base64Image from 'src/components/common/Base64Image.vue'
import Base64ImageUploader from 'src/components/common/Base64ImageUploader.vue'

defineOptions({ name: 'Base64ImageDemo' })

const base64Image1 = ref<string | null>(null)
const base64Image2 = ref<string | null>(null)
const base64Image3 = ref<string | null>(null)

const showDialog = ref(false)
const selectedImage = ref<string | null>(null)

function showImageDialog(image: string) {
  selectedImage.value = image
  showDialog.value = true
}

function handleUploadSuccess(base64: string) {
  console.warn('Изображение успешно загружено:', {
    size: Math.round((base64.length * 3) / 4),
    format: base64.match(/^data:image\/([^;]+);base64,/)?.[1] ?? 'unknown',
    preview: `${base64.substring(0, 50)}...`,
  })
}

function handleUploadError(error: string) {
  console.error('Ошибка загрузки:', error)
}
</script>

<template>
  <q-page class="q-pa-md">
    <div class="row q-gutter-md">
      <div class="col-12">
        <h3 class="text-h3 q-mb-md">Base64 Image Demo</h3>
        <p class="text-body1 text-grey-8 q-mb-lg">
          Демонстрация компонентов для работы с изображениями в формате base64
        </p>
      </div>

      <!-- Основной загрузчик с полным функционалом -->
      <div class="col-12 col-md-6">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6">Полнофункциональный загрузчик</div>
            <div class="text-caption text-grey-7 q-mb-md">
              Максимум 2MB, сжатие до 800x600px, качество 80%
            </div>
          </q-card-section>

          <q-card-section>
            <Base64ImageUploader
              v-model="base64Image1"
              :max-height="600"
              :max-size-k-b="2000"
              :max-width="800"
              :quality="0.8"
              placeholder="Загрузите изображение (макс. 2MB)"
              @upload-error="handleUploadError"
              @upload-success="handleUploadSuccess"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Компактный загрузчик -->
      <div class="col-12 col-md-6">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6">Компактный загрузчик</div>
            <div class="text-caption text-grey-7 q-mb-md">
              Максимум 500KB, без сжатия, только PNG/JPEG
            </div>
          </q-card-section>

          <q-card-section>
            <Base64ImageUploader
              v-model="base64Image2"
              :allow-copy="false"
              :allowed-types="['image/png', 'image/jpeg']"
              :max-size-k-b="500"
              :show-preview="false"
              placeholder="PNG/JPEG до 500KB"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Загрузчик с ограничениями -->
      <div class="col-12 col-md-6">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6">С ограничениями размера</div>
            <div class="text-caption text-grey-7 q-mb-md">
              Максимум 1MB, сжатие до 400x400px, качество 90%
            </div>
          </q-card-section>

          <q-card-section>
            <Base64ImageUploader
              v-model="base64Image3"
              :max-height="400"
              :max-size-k-b="1000"
              :max-width="400"
              :quality="0.9"
              placeholder="Квадратное изображение 400x400"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Отображение загруженных изображений -->
      <div class="col-12 col-md-6">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6">Галерея загруженных изображений</div>
            <div class="text-caption text-grey-7 q-mb-md">
              Кликните на изображение для просмотра в полный размер
            </div>
          </q-card-section>

          <q-card-section>
            <div class="row q-gutter-sm">
              <div
                v-if="base64Image1"
                class="col-auto"
              >
                <Base64Image
                  :src="base64Image1"
                  alt="Изображение 1"
                  height="100"
                  width="100"
                  clickable
                  show-info
                  @click="showImageDialog(base64Image1)"
                />
              </div>

              <div
                v-if="base64Image2"
                class="col-auto"
              >
                <Base64Image
                  :src="base64Image2"
                  alt="Изображение 2"
                  height="100"
                  width="100"
                  clickable
                  show-info
                  @click="showImageDialog(base64Image2)"
                />
              </div>

              <div
                v-if="base64Image3"
                class="col-auto"
              >
                <Base64Image
                  :src="base64Image3"
                  alt="Изображение 3"
                  height="100"
                  width="100"
                  clickable
                  show-info
                  @click="showImageDialog(base64Image3)"
                />
              </div>

              <div
                v-if="!base64Image1 && !base64Image2 && !base64Image3"
                class="col-12 text-center text-grey-6 q-py-lg"
              >
                Загрузите изображения, чтобы увидеть их здесь
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Информация о функциональности -->
      <div class="col-12">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6">Возможности компонентов</div>
          </q-card-section>

          <q-card-section>
            <div class="row q-gutter-lg">
              <div class="col-12 col-md-4">
                <h6 class="text-h6 text-primary">Base64ImageUploader</h6>
                <ul class="text-body2">
                  <li>Drag & Drop загрузка</li>
                  <li>Валидация типов файлов</li>
                  <li>Ограничение размера файла</li>
                  <li>Автоматическое сжатие</li>
                  <li>Предварительный просмотр</li>
                  <li>Копирование base64 в буфер</li>
                  <li>Скачивание изображения</li>
                  <li>Показ/скрытие base64 строки</li>
                </ul>
              </div>

              <div class="col-12 col-md-4">
                <h6 class="text-h6 text-primary">Base64Image</h6>
                <ul class="text-body2">
                  <li>Отображение base64 изображений</li>
                  <li>Настраиваемые размеры</li>
                  <li>Различные режимы fit</li>
                  <li>Обработка ошибок</li>
                  <li>Информация о файле</li>
                  <li>Клик-события</li>
                  <li>Ленивая загрузка</li>
                </ul>
              </div>

              <div class="col-12 col-md-4">
                <h6 class="text-h6 text-primary">useBase64Image</h6>
                <ul class="text-body2">
                  <li>Преобразование файлов в base64</li>
                  <li>Валидация изображений</li>
                  <li>Сжатие с сохранением пропорций</li>
                  <li>Получение информации об изображении</li>
                  <li>Проверка валидности base64</li>
                  <li>Извлечение MIME-типа</li>
                  <li>Форматирование размеров</li>
                </ul>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Диалог для просмотра изображения в полный размер -->
    <q-dialog
      v-model="showDialog"
      maximized
    >
      <q-card class="bg-black">
        <q-card-section class="text-center">
          <Base64Image
            v-if="selectedImage"
            :src="selectedImage"
            alt="Полноразмерное изображение"
            fit="contain"
            style="max-width: 90vw; max-height: 90vh"
          />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            color="white"
            label="Закрыть"
            outline
            @click="showDialog = false"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style lang="scss" scoped>
h6 {
  margin-top: 0;
  margin-bottom: 8px;
}

ul {
  padding-left: 20px;
  margin: 0;

  li {
    margin-bottom: 4px;
  }
}
</style>
