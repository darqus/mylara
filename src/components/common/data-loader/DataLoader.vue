<script setup lang="ts">
withDefaults(
  defineProps<{
    error?: boolean
    isEmpty?: boolean
    loading?: boolean
    emptyText?: string
    errorText?: string
    loadingText?: string
  }>(),
  {
    error: false,
    isEmpty: false,
    loading: false,
    emptyText: 'Нет доступных данных',
    errorText: 'Произошла ошибка при загрузке данных',
    loadingText: 'Загрузка данных...',
  }
)

defineEmits([ 'retry', ])
</script>

<template>
  <div class="data-loader">
    <!-- Отображение загрузки -->
    <q-inner-loading :showing="loading">
      <div>
        <slot name="loading">
          <q-spinner-dots
            color="primary"
            size="40px"
          />
          <div>
            {{ $props['loadingText'] }}
          </div>
        </slot>
      </div>
    </q-inner-loading>

    <!-- Отображение ошибки -->
    <div
      v-if="!loading && error"
      class="q-my-md"
    >
      <slot name="error">
        <q-banner
          class="bg-negative text-white"
          rounded
        >
          <template #avatar>
            <q-icon name="error" />
          </template>
          {{ $props['errorText'] }}
          <template #action>
            <q-btn
              color="white"
              label="Попробовать снова"
              flat
              @click="$emit('retry')"
            />
          </template>
        </q-banner>
      </slot>
    </div>

    <!-- Отображение контента или пустого состояния -->
    <div v-if="!loading && !error">
      <!-- Отображение данных -->
      <template v-if="!$props['isEmpty']">
        <slot name="content">
          <!-- Здесь будут отображаться данные -->
        </slot>
      </template>

      <!-- Отображение пустого состояния -->
      <template v-else>
        <slot name="empty">
          <q-card class="q-pa-md">
            <q-icon
              color="grey-6"
              name="o_info"
              size="4em"
            />
            <div class="text-h6 q-mt-md text-secondary">
              {{ $props['emptyText'] }}
            </div>
            <q-btn
              class="q-mt-md"
              color="primary"
              label="Обновить"
              outline
              @click="$emit('retry')"
            />
          </q-card>
        </slot>
      </template>
    </div>
  </div>
</template>
