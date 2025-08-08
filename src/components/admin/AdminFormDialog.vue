<script setup lang="ts">
import { ref, watch, computed } from 'vue'

import type { QForm } from 'quasar'

import Base64ImageUploader from 'src/components/common/Base64ImageUploader.vue'
import type { CollectionConfig, FormField } from 'src/types/admin'

import ImageUploader from './ImageUploader.vue'

defineOptions({ name: 'AdminFormDialog' })

type Props = {
  modelValue: boolean
  config: CollectionConfig | undefined
  item: Record<string, unknown> | null
  loading?: boolean
}

type Emits = {
  (e: 'update:modelValue', value: boolean): void
  (e: 'save', data: Record<string, unknown>): void
  (e: 'cancel'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const formRef = ref<QForm>()
const formData = ref<Record<string, unknown>>({})

const isEditing = computed(() => Boolean(props.item?.id))

// Вспомогательная функция для получения base64 опций
function getBase64ImageOptions(field: FormField) {
  const options = field.base64ImageOptions ?? {}
  const result: Record<string, unknown> = {
    maxSizeKB: options.maxSizeKB ?? 2000,
    quality: options.quality ?? 0.8,
    showPreview: options.showPreview ?? true,
    allowCopy: options.allowCopy ?? true,
    placeholder: field.placeholder ?? `Загрузите ${field.label.toLowerCase()}`,
  }

  if (options.allowedTypes) {
    result.allowedTypes = options.allowedTypes
  }
  if (options.maxWidth) {
    result.maxWidth = options.maxWidth
  }
  if (options.maxHeight) {
    result.maxHeight = options.maxHeight
  }

  return result
}

// Следим за изменениями элемента для редактирования
watch(
  () => props.item,
  (newItem) => {
    if (newItem) {
      // Копируем данные для редактирования
      formData.value = { ...newItem }
    } else {
      // Сбрасываем форму для создания нового элемента
      resetForm()
    }
  },
  { immediate: true }
)

// Следим за закрытием диалога
watch(
  () => props.modelValue,
  (isOpen) => {
    if (!isOpen) {
      resetForm()
    }
  }
)

function resetForm() {
  formData.value = {}

  if (props.config?.fields) {
    props.config.fields.forEach((field) => {
      // Устанавливаем значения по умолчанию в зависимости от типа
      switch (field.type) {
        case 'boolean':
          formData.value[field.name] = false
          break

        case 'number':
          formData.value[field.name] = 0
          break

        case 'editor':
          formData.value[field.name] = ''
          break

        default:
          formData.value[field.name] = ''
      }
    })
  }
}

function getFieldRules(field: FormField) {
  const rules: Array<(val: unknown) => boolean | string> = []

  if (field.required) {
    rules.push((val: unknown) => {
      if (field.type === 'boolean') {
        return true // Булевы поля не требуют валидации на обязательность
      }

      return (
        (val !== null &&
          val !== undefined &&
          String(val as string | number).trim() !== '') ||
        'Поле обязательно для заполнения'
      )
    })
  }

  if (field.type === 'email') {
    rules.push((val: unknown) => {
      if (!val) {
        return true
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      return (
        emailPattern.test(String(val as string)) || 'Введите корректный email'
      )
    })
  }

  if (field.type === 'url') {
    rules.push((val: unknown) => {
      if (!val) {
        return true
      }

      try {
        new URL(String(val as string))

        return true
      } catch {
        return 'Введите корректный URL'
      }
    })
  }

  if (field.rules) {
    rules.push(...field.rules)
  }

  return rules
}

function getInputType(fieldType: string): 'text' | 'email' | 'url' {
  if (fieldType === 'email') {
    return 'email'
  }

  if (fieldType === 'url') {
    return 'url'
  }

  return 'text'
}

async function handleSubmit() {
  if (!formRef.value) {
    return
  }

  const isValid = await formRef.value.validate()

  if (!isValid) {
    return
  }

  // Подготавливаем данные для сохранения
  const dataToSave = { ...formData.value }

  // Удаляем служебные поля при создании
  if (!isEditing.value) {
    delete dataToSave.id
    delete dataToSave.createdAt
    delete dataToSave.updatedAt
  }

  emit('save', dataToSave)
}
</script>

<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <q-card style="min-width: 500px; max-width: 800px">
      <q-card-section>
        <div class="text-h6">
          {{ isEditing ? 'Редактировать запись' : 'Создать запись' }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form
          ref="formRef"
          @submit="handleSubmit"
        >
          <div class="row">
            <div
              v-for="field in config?.fields || []"
              :key="field.name"
              class="col-12"
            >
              <!-- Текстовые поля -->
              <q-input
                v-if="['text', 'email', 'url'].includes(field.type)"
                :label="field.label"
                :model-value="String(formData[field.name] || '')"
                :placeholder="field.placeholder"
                :required="field.required"
                :rules="getFieldRules(field)"
                :type="getInputType(field.type)"
                filled
                @update:model-value="formData[field.name] = $event"
              />

              <!-- Числовые поля -->
              <q-input
                v-else-if="field.type === 'number'"
                :label="field.label"
                :model-value="Number(formData[field.name] || 0)"
                :placeholder="field.placeholder"
                :required="field.required"
                :rules="getFieldRules(field)"
                type="number"
                filled
                @update:model-value="formData[field.name] = Number($event)"
              />

              <!-- Текстовая область -->
              <q-input
                v-else-if="field.type === 'textarea'"
                :label="field.label"
                :model-value="String(formData[field.name] || '')"
                :placeholder="field.placeholder"
                :required="field.required"
                :rules="getFieldRules(field)"
                rows="4"
                type="textarea"
                filled
                @update:model-value="formData[field.name] = $event"
              />

              <!-- Редактор богатого текста -->
              <div
                v-else-if="field.type === 'editor'"
                class="q-mb-md"
              >
                <div class="text-subtitle2 q-mb-sm">
                  {{ field.label }}
                  <span
                    v-if="field.required"
                    class="text-negative"
                  >
                    *
                  </span>
                </div>
                <q-editor
                  :model-value="String(formData[field.name] || '')"
                  :placeholder="field.placeholder"
                  :toolbar="[
                    ['bold', 'italic', 'underline', 'strike'],
                    ['quote', 'unordered', 'ordered'],
                    ['left', 'center', 'right', 'justify'],
                    ['undo', 'redo'],
                    ['removeFormat', 'hr'],
                  ]"
                  min-height="200px"
                  @update:model-value="formData[field.name] = $event"
                />
              </div>

              <!-- Дата -->
              <q-input
                v-else-if="field.type === 'date'"
                :label="field.label"
                :model-value="String(formData[field.name] || '')"
                :required="field.required"
                :rules="getFieldRules(field)"
                type="date"
                filled
                @update:model-value="formData[field.name] = $event"
              />

              <!-- Булево значение -->
              <q-checkbox
                v-else-if="field.type === 'boolean'"
                :label="field.label"
                :model-value="Boolean(formData[field.name])"
                @update:model-value="formData[field.name] = $event"
              />

              <!-- Загрузка изображений -->
              <div
                v-else-if="field.type === 'image'"
                class="q-mb-md"
              >
                <div class="text-subtitle2 q-mb-sm">
                  {{ field.label }}
                  <span
                    v-if="field.required"
                    class="text-negative"
                  >
                    *
                  </span>
                </div>
                <ImageUploader
                  :model-value="
                    formData[field.name] ? String(formData[field.name]) : null
                  "
                  @update:model-value="formData[field.name] = $event"
                />
              </div>

              <!-- Загрузка Base64 изображений -->
              <div
                v-else-if="field.type === 'base64-image'"
                class="q-mb-md"
              >
                <div class="text-subtitle2 q-mb-sm">
                  {{ field.label }}
                  <span
                    v-if="field.required"
                    class="text-negative"
                  >
                    *
                  </span>
                </div>
                <Base64ImageUploader
                  :model-value="
                    formData[field.name] ? String(formData[field.name]) : null
                  "
                  v-bind="getBase64ImageOptions(field)"
                  @update:model-value="formData[field.name] = $event"
                />
              </div>
            </div>
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions
        align="right"
        class="text-primary"
      >
        <q-btn
          color="grey-6"
          label="Отмена"
          outline
          @click="$emit('cancel')"
        />
        <q-btn
          :loading="loading"
          color="positive"
          label="Сохранить"
          outline
          @click="handleSubmit"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
