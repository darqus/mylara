<script setup lang="ts">
import {
  computed, ref,
} from 'vue'

import {
  FIELD_TYPE,
  INPUT_TYPE,
  PASSWORD_VISIBILITY_ICON,
  DATE_MASK,
  INPUT_MASK,
  INPUT_DEBOUNCE,
} from 'src/types/form'
import type {
  BaseFormFieldDefinition,
  ColumnWidth,
  InputFieldProperties,
} from 'src/types/form-types'

type ModelValue = string | number | FileList | null | undefined

const props = defineProps<{
  field: BaseFormFieldDefinition
  modelValue: ModelValue
  colWidth?: ColumnWidth
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: unknown): void
}>()

// For password visibility toggle
const passwordVisible = ref(false)

// Compute column classes based on field definition or props
const columnClasses = computed(() => {
  const width = props.colWidth || props.field.colWidth || {
    xs: 12,
  }

  return Object.entries(width)
    .map(([ breakpoint, size, ]) => `col-${breakpoint}-${size}`)
    .join(' ')
})

// Toggle password visibility
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
}

// Type guard to check if field is an input field
const isInputField = (field: BaseFormFieldDefinition): field is InputFieldProperties => {
  return field.type === FIELD_TYPE.INPUT
}

// Compute input type for password fields
const computedInputType = computed(() => {
  if (isInputField(props.field) && props.field.inputType === INPUT_TYPE.PASSWORD) {
    return passwordVisible.value ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD
  }

  return isInputField(props.field) ? props.field.inputType : INPUT_TYPE.TEXT
})

// Update model value with trim for string values
const updateValue = (value: string | number | FileList | null | undefined) => {
  // If value is string, trim whitespace from beginning and end
  if (typeof value === 'string') {
    emit('update:modelValue', value.trim())
  } else if (typeof value === 'number' && isInputField(props.field)) {
    // Check if value is within min/max range for number inputs
    if (props.field.min !== undefined && value < props.field.min) {
      emit('update:modelValue', props.field.min)
    } else if (props.field.max !== undefined && value > props.field.max) {
      emit('update:modelValue', props.field.max)
    } else {
      emit('update:modelValue', value)
    }
  } else {
    emit('update:modelValue', value)
  }
}

// Function to prevent non-numeric characters input for number fields and enforce min/max values
const onlyNumbers = (event: KeyboardEvent) => {
  // Allow only digits, dot (for decimal numbers) and some control keys like backspace
  if (!/[\d.]/.test(event.key) &&

    // Allow navigation and modification keys
    ![ 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', ].includes(event.key)) {
    event.preventDefault()
  }

  // Prevent multiple dots in the number
  if (event.key === '.' &&
    ((typeof props.modelValue === 'string' || typeof props.modelValue === 'number') &&
      props.modelValue.toString().includes('.') || !props.modelValue)) {
    event.preventDefault()
  }
}
</script>

<template>
  <div :class="`col-12 ${columnClasses}`">
    <!-- Input field -->
    <template v-if="field.type === FIELD_TYPE.INPUT">
      <q-input
        :autocomplete="isInputField(field) ? field.autocomplete : undefined"
        :clearable="field.clearable"
        :debounce="INPUT_DEBOUNCE"
        :hint="field.hint"
        :label="field.label"
        :mask="isInputField(field) ? field.mask : undefined"
        :max="isInputField(field) ? field.max : undefined"
        :min="isInputField(field) ? field.min : undefined"
        :model-value="modelValue"
        :required="field.required"
        :rules="field.rules"
        :type="computedInputType"
        dense
        outlined
        @keypress="isInputField(field) && field.inputType === INPUT_TYPE.NUMBER ? onlyNumbers($event) : null"
        @update:model-value="updateValue"
      >
        <!-- Password visibility toggle -->
        <template
          v-if="isInputField(field) && field.inputType === INPUT_TYPE.PASSWORD"
          #append
        >
          <q-icon
            :name="passwordVisible ? PASSWORD_VISIBILITY_ICON.ON : PASSWORD_VISIBILITY_ICON.OFF"
            class="cursor-pointer"
            @click="togglePasswordVisibility"
          />
        </template>
      </q-input>
    </template>

    <!-- Select field -->
    <template v-else-if="field.type === FIELD_TYPE.SELECT">
      <q-select
        :clearable="field.clearable"
        :label="field.label"
        :model-value="modelValue"
        :options="field.options || []"
        :required="field.required"
        :rules="field.rules"
        dense
        emit-value
        map-options
        outlined
        @update:model-value="updateValue"
      />
    </template>

    <!-- Date picker field -->
    <template v-else-if="field.type === FIELD_TYPE.DATE_PICKER">
      <q-input
        :clearable="field.clearable"
        :debounce="INPUT_DEBOUNCE"
        :hint="field.hint"
        :label="field.label"
        :mask="INPUT_MASK"
        :model-value="modelValue"
        :required="field.required"
        :rules="field.rules"
        dense
        outlined
        @update:model-value="updateValue"
      >
        <template #append>
          <q-icon
            class="cursor-pointer"
            name="event"
          >
            <q-popup-proxy
              transition-hide="scale"
              transition-show="scale"
              cover
            >
              <q-date
                :mask="DATE_MASK"
                :model-value="modelValue"
                :options="field.optionsFn || (() => true)"
                today-btn
                @update:model-value="updateValue"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </template>

    <!-- Textarea field -->
    <template v-else-if="field.type === FIELD_TYPE.TEXTAREA">
      <q-input
        :clearable="field.clearable"
        :debounce="INPUT_DEBOUNCE"
        :label="field.label"
        :model-value="modelValue"
        :required="field.required"
        :rules="field.rules"
        type="textarea"
        autogrow
        dense
        outlined
        @update:model-value="updateValue"
      />
    </template>
  </div>
</template>
