<script setup lang="ts">
import { computed, } from 'vue'

type Props = {
  title: string
  formData: Record<string, unknown>
  isFormValid: boolean
  showDebugData?: boolean
}

const props = defineProps<Props>()

defineEmits<{
  (e: 'submit'): void
}>()

const formStatus = computed(() => props.isFormValid ? 'валидна' : 'не валидна')
const statusColor = computed(() => props.isFormValid ? 'positive' : 'negative')
const statusIcon = computed(() => props.isFormValid ? 'check_circle' : 'error')
</script>

<template>
  <div>
    <h2 class="section-title q-mb-lg">
      {{ title }}
    </h2>

    <div class="row q-col-gutter-md">
      <!-- Left column (width 4) -->
      <div
        v-if="showDebugData"
        class="col-12 col-md-4"
      >
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6 text-primary q-mb-sm">
              <!-- Слот для заголовка левой колонки -->
              <slot name="left-column-title">
                Данные формы
              </slot>
            </div>
            <div class="q-mb-md">
              <div class="text-subtitle2">
                Текущее состояние валидации формы:
              </div>
              <q-chip
                :color="statusColor"
                :icon="statusIcon"
                text-color="white"
              >
                Форма {{ formStatus }}
              </q-chip>
            </div>
            <div class="text-subtitle2">
              Данные формы для отправки:
            </div>
            <pre class="form-data-display">{{ formData }}</pre>
            <!-- Дополнительный контент для левой колонки -->
            <slot name="left-column-content" />
          </q-card-section>
        </q-card>
      </div>

      <!-- Right column (width 8) -->
      <div
        :class="{
          'col-12': true,
          'col-md-8': showDebugData
        }"
      >
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6 text-primary q-mb-sm">
              <!-- Слот для заголовка правой колонки -->
              <slot name="right-column-title">
                Заголовок формы
              </slot>
            </div>
            <div class="text-subtitle2">
              <!-- Слот для подзаголовка правой колонки -->
              <slot name="right-column-subtitle">
                Заполните форму
              </slot>
            </div>
          </q-card-section>

          <q-form @submit.prevent="$emit('submit')">
            <q-card-section>
              <!-- Слот для полей формы -->
              <slot name="form-fields" />

              <!-- Слот для дополнительного контента в форме -->
              <slot name="form-content" />
            </q-card-section>

            <q-card-actions
              align="right"
              class="q-px-md q-pb-md"
            >
              <!-- Слот для кнопок действий формы -->
              <slot name="form-actions" />
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './scss/validation-form.scss';
</style>
