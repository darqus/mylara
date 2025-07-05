<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">Управление настройками таблиц</div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6 q-mb-md">Информация о хранилище</div>

        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <q-list bordered>
              <q-item>
                <q-item-section>
                  <q-item-label>Всего ключей настроек</q-item-label>
                  <q-item-label caption>
                    {{ settingsKeys.length }}
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label>Размер данных</q-item-label>
                  <q-item-label caption>
                    {{ formatBytes(totalStorageSize) }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-6">
            <q-list
              v-if="settingsKeys.length > 0"
              bordered
            >
              <q-item
                v-for="key in settingsKeys"
                :key="key"
              >
                <q-item-section>
                  <q-item-label>{{ key }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <div
              v-else
              class="text-grey-6 text-center q-pa-md"
            >
              Нет сохраненных настроек
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <div class="text-h6 q-mb-md">Действия</div>

        <div class="row q-gutter-md">
          <q-btn
            color="primary"
            icon="download"
            label="Экспорт настроек"
            @click="exportSettings"
          />

          <q-btn
            color="secondary"
            icon="upload"
            label="Импорт настроек"
            @click="showImportDialog = true"
          />

          <q-btn
            color="negative"
            icon="delete_sweep"
            label="Очистить все"
            @click="clearAllSettings"
          />

          <q-btn
            color="info"
            icon="refresh"
            label="Обновить"
            @click="updateData"
          />
        </div>
      </q-card-section>
    </q-card>

    <!-- Диалог импорта -->
    <q-dialog v-model="showImportDialog">
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">Импорт настроек</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="importData"
            label="JSON данные"
            rows="10"
            type="textarea"
            outlined
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Отмена"
            flat
            @click="showImportDialog = false"
          />
          <q-btn
            color="primary"
            label="Импорт"
            @click="importSettings"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { useQuasar } from 'quasar'

import { useTableSettingsManager } from 'src/composables/useTableSettings'

defineOptions({
  name: 'TableSettingsManagerPage',
})

const $q = useQuasar()

const {
  getAllTableSettingsKeys,
  clearAllTableSettings,
  getTotalStorageSize,
  exportAllSettings,
  importAllSettings,
} = useTableSettingsManager()

const settingsKeys = ref<string[]>([])
const totalStorageSize = ref(0)
const showImportDialog = ref(false)
const importData = ref('')

onMounted(() => {
  updateData()
})

function updateData() {
  settingsKeys.value = getAllTableSettingsKeys()
  totalStorageSize.value = getTotalStorageSize()
}

function formatBytes(bytes: number): string {
  if (bytes === 0) {
    return '0 Bytes'
  }

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

function exportSettings() {
  try {
    const exported = exportAllSettings()
    const jsonString = JSON.stringify(exported, null, 2)

    // Создаем файл для скачивания
    const blob = new Blob([jsonString], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = `table-settings-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    $q.notify({
      type: 'positive',
      message: 'Настройки экспортированы',
      position: 'top',
    })
  } catch (error) {
    console.error('Export error:', error)
    $q.notify({
      type: 'negative',
      message: 'Ошибка экспорта настроек',
      position: 'top',
    })
  }
}

function importSettings() {
  try {
    const settings = JSON.parse(importData.value)

    importAllSettings(settings)
    updateData()
    showImportDialog.value = false
    importData.value = ''

    $q.notify({
      type: 'positive',
      message: 'Настройки импортированы',
      position: 'top',
    })
  } catch (error) {
    console.error('Import error:', error)
    $q.notify({
      type: 'negative',
      message: 'Ошибка импорта: неверный JSON',
      position: 'top',
    })
  }
}

function clearAllSettings() {
  $q.dialog({
    title: 'Подтверждение',
    message: 'Вы действительно хотите удалить все настройки таблиц?',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    clearAllTableSettings()
    updateData()

    $q.notify({
      type: 'positive',
      message: 'Все настройки удалены',
      position: 'top',
    })
  })
}
</script>
