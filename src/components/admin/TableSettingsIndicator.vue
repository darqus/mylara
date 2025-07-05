<script setup lang="ts">
import { computed } from 'vue'

import type { TableSettings } from 'src/composables/useTableSettings'

type Props = {
  settings: TableSettings
}

const props = defineProps<Props>()

/**
 * Проверяем, есть ли кастомные настройки
 */
const hasCustomSettings = computed(() => {
  return (
    (props.settings.sortBy ?? false) ||
    (props.settings.filter ?? false) ||
    props.settings.rowsPerPage !== 10 ||
    props.settings.page > 1
  )
})
</script>

<template>
  <div
    v-if="hasCustomSettings"
    class="text-caption text-grey-6 q-ml-sm"
  >
    <q-icon
      class="q-mr-xs"
      name="settings"
      size="12px"
    />
    Настройки сохранены
    <q-tooltip>
      <div class="text-body2">
        <div>Сохраненные настройки:</div>
        <ul class="q-mt-xs q-mb-none">
          <li v-if="settings.sortBy">
            Сортировка: {{ settings.sortBy }}
            {{ settings.descending ? '(убыв.)' : '(возр.)' }}
          </li>
          <li v-if="settings.filter">Фильтр: "{{ settings.filter }}"</li>
          <li>Записей на странице: {{ settings.rowsPerPage }}</li>
          <li v-if="settings.page > 1">
            Текущая страница: {{ settings.page }}
          </li>
        </ul>
      </div>
    </q-tooltip>
  </div>
</template>
