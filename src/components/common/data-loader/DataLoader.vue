<script setup lang="ts">
import {
  ref, onMounted,
} from 'vue'

type DataResponse = Record<string, unknown>

type DataLoaderProps = {
  error?: boolean
  isEmpty?: boolean
  loading?: boolean
  emptyText?: string
  errorText?: string
  loadingText?: string
  fetchData?: (() => Promise<DataResponse>) | undefined
  dataKey?: string
}

const props = withDefaults(
  defineProps<DataLoaderProps>(),
  {
    error: false,
    isEmpty: false,
    loading: false,
    emptyText: 'Нет доступных данных',
    errorText: 'Произошла ошибка при загрузке данных',
    loadingText: '',
    fetchData: () => Promise.resolve({}),
    dataKey: '',
  }
)

const emit = defineEmits([ 'retry', 'data-loaded', ])

const internalLoading = ref(false)
const internalError = ref('')
const internalData = ref<unknown>(null)

const loadData = async (): Promise<void> => {
  internalLoading.value = true
  internalError.value = ''

  try {
    const response = await props.fetchData()

    internalData.value = props.dataKey && typeof response === 'object' && response !== null
      ? (response as Record<string, unknown>)[props.dataKey]
      : response
    emit('data-loaded', internalData.value)
  } catch (error) {
    internalError.value = error instanceof Error ? error.message : 'Произошла ошибка при загрузке данных'
  } finally {
    internalLoading.value = false
  }
}

const refresh = () => {
  void loadData()
  emit('retry')
}

onMounted(() => {
  void loadData()
})
</script>

<template>
  <!-- Отображение загрузки -->
  <q-inner-loading :showing="loading || internalLoading">
    <div>
      <slot name="loading">
        <q-spinner-dots
          color="primary"
          size="40px"
        />
        <div v-if="loadingText">
          {{ $props['loadingText'] }}
        </div>
      </slot>
    </div>
  </q-inner-loading>

  <!-- Отображение ошибки -->
  <div
    v-if="!(loading || internalLoading) && (error || internalError)"
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
        {{ internalError || $props['errorText'] }}
        <template #action>
          <q-btn
            color="white"
            label="Попробовать снова"
            flat
            @click="refresh"
          />
        </template>
      </q-banner>
    </slot>
  </div>

  <!-- Отображение контента или пустого состояния -->
  <template v-if="!(loading || internalLoading) && !(error || internalError)">
    <!-- Отображение данных -->
    <template v-if="!$props['isEmpty'] && (internalData || $slots.content)">
      <slot
        :data="internalData"
        name="content"
      >
        <!-- Если есть внутренние данные и нет слота, показываем данные -->
        <div v-if="internalData">
          {{ internalData }}
        </div>
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
            @click="refresh"
          />
        </q-card>
      </slot>
    </template>
  </template>
</template>
