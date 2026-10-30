<script setup lang="ts">
import './scss/admin-collection-page.scss'

import { useQuasar } from 'quasar'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import AdminFormDialog from '@/components/admin/AdminFormDialog.vue'
import Base64ImageTableCell from '@/components/admin/Base64ImageTableCell.vue'
import ImageTableCell from '@/components/admin/ImageTableCell.vue'
import TableSettingsIndicator from '@/components/admin/TableSettingsIndicator.vue'
import { useAdminCollection } from '@/composables/useAdminCollection'
import { useTableFilterSort } from '@/composables/useTableFilterSort'
import { useTableSettings } from '@/composables/useTableSettings'
import { getCollectionConfig } from '@/services/admin-config.service'

import { getCellText, getFieldType, getLayoutLabel } from './admin-cell-formatters'

defineOptions({ name: 'AdminCollectionPage' })

const $q = useQuasar()
const route = useRoute()

const collectionName = computed(() => route.params.collection as string)
const config = computed(() => getCollectionConfig(collectionName.value))

// Настройки таблицы (persist в localStorage)
const {
  settings: tableSettings,
  paginationSettings,
  updatePagination,
  updateFilter,
  resetSettings,
} = useTableSettings(collectionName)

// CRUD-операции и состояние таблицы
const { tableState, formLoading, loadData, createItem, updateItem, deleteItems } = useAdminCollection(collectionName)

// Поиск и сортировка — чисто производные значения
const { filteredItems, visibleItems } = useTableFilterSort({
  items: () => tableState.value.items,
  filter: () => tableState.value.filter,
  sortBy: () => tableState.value.pagination.sortBy,
  descending: () => tableState.value.pagination.descending,
  searchableFields: () => config.value?.fields.map((field) => field.name) ?? [],
})

const showCreateDialog = ref(false)
const showDeleteDialog = ref(false)
const showImageDialogState = ref(false)
const selectedImageUrl = ref('')
const editingItem = ref<Record<string, unknown> | null>(null)
const itemToDelete = ref<Record<string, unknown> | null>(null)

const searchInfo = computed(() => {
  if (!tableState.value.filter.trim()) {
    return `Всего записей: ${tableState.value.items.length}`
  }

  return `Найдено: ${filteredItems.value.length} из ${tableState.value.items.length}`
})

const deleteDialogText = computed(() => {
  if (tableState.value.selected.length > 1) {
    return `Вы действительно хотите удалить ${tableState.value.selected.length} записей?`
  }

  return 'Вы действительно хотите удалить эту запись?'
})

onMounted(() => {
  applySettingsToTableState()
  void loadData()
})

// Переключение коллекции: перезагружаем настройки и данные
watch(collectionName, (newCollection, oldCollection) => {
  if (newCollection === oldCollection || !newCollection) {
    return
  }

  applySettingsToTableState()

  if (config.value?.label) {
    $q.notify({
      type: 'info',
      message: `Переключено на: ${config.value.label}`,
      position: 'top',
      timeout: 1000,
    })
  }

  void loadData()
})

// Синхронизация фильтра с настройками
watch(
  () => tableState.value.filter,
  (newFilter) => {
    updateFilter(newFilter)

    // При изменении фильтра возвращаемся на первую страницу
    tableState.value.pagination.page = 1
  }
)

// Синхронизация пагинации с настройками
watch(
  () => tableState.value.pagination,
  (newPagination) => {
    updatePagination(newPagination)
  },
  { deep: true }
)

/**
 * Переносит сохранённые настройки таблицы в состояние страницы.
 */
function applySettingsToTableState() {
  tableState.value.pagination = {
    page: paginationSettings.value.page,
    rowsPerPage: paginationSettings.value.rowsPerPage,
    rowsNumber: 0,
    ...(paginationSettings.value.sortBy && {
      sortBy: paginationSettings.value.sortBy,
    }),
    ...(paginationSettings.value.descending !== undefined && {
      descending: paginationSettings.value.descending,
    }),
  }
  tableState.value.filter = tableSettings.value.filter
  tableState.value.selected = []

  // Закрываем все диалоги
  showCreateDialog.value = false
  showDeleteDialog.value = false
  editingItem.value = null
  itemToDelete.value = null
}

/**
 * Обработчик запроса q-table (смена страницы / сортировки).
 * Данные клиентские, поэтому достаточно зафиксировать настройки.
 */
function onRequest(props: {
  pagination: {
    page: number
    rowsPerPage: number
    sortBy?: string
    descending?: boolean
  }
}) {
  updatePagination(props.pagination)
}

function editItem(item: Record<string, unknown>) {
  editingItem.value = { ...item }
  showCreateDialog.value = true
}

function confirmDelete(item: Record<string, unknown>) {
  itemToDelete.value = item
  tableState.value.selected = [item]
  showDeleteDialog.value = true
}

function confirmBulkDelete() {
  showDeleteDialog.value = true
}

function handleResetSettings() {
  resetSettings()

  tableState.value.pagination = {
    page: 1,
    rowsPerPage: 10,
    rowsNumber: 0,
  }
  tableState.value.filter = ''
  tableState.value.selected = []

  $q.notify({
    type: 'positive',
    message: 'Настройки таблицы сброшены',
    position: 'top',
  })
}

async function handleSave(data: Record<string, unknown>) {
  const id = editingItem.value?.id
  const success = typeof id === 'string' && id.length > 0 ? await updateItem(id, data) : await createItem(data)

  if (success) {
    handleCancel()
  }
}

function handleCancel() {
  showCreateDialog.value = false
  editingItem.value = null
}

async function handleDelete() {
  const itemsToDelete =
    tableState.value.selected.length > 0 ? tableState.value.selected : itemToDelete.value ? [itemToDelete.value] : []

  if (itemsToDelete.length === 0) {
    return
  }

  await deleteItems(itemsToDelete)

  showDeleteDialog.value = false
  itemToDelete.value = null
}

// Функция для показа диалога с изображением
function showImageDialog(imageUrl: string) {
  selectedImageUrl.value = imageUrl
  showImageDialogState.value = true
}
</script>

<template>
  <q-page class="q-pa-md admin-collection-page">
    <div class="row items-center justify-between q-mb-md">
      <div>
        <div class="text-h4">
          {{ config?.label || collectionName }}
        </div>
        <div class="text-subtitle1 text-grey-7">Управление записями в коллекции</div>
      </div>

      <q-btn
        color="primary"
        icon="add"
        label="Создать запись"
        @click="showCreateDialog = true"
      />
    </div>

    <!-- Фильтры и поиск -->
    <q-card
      class="q-mb-md"
      bordered
      flat
    >
      <q-card-section>
        <div class="row q-gutter-md items-center">
          <div class="col-12 col-md-6">
            <q-input
              v-model="tableState.filter"
              debounce="300"
              label="Поиск"
              placeholder="Поиск по всем полям..."
              clearable
              filled
            >
              <template #append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>

          <div class="col-auto">
            <q-btn
              color="secondary"
              icon="refresh"
              padding="12px"
              size="md"
              @click="loadData"
            />
          </div>

          <div class="col-auto">
            <q-btn
              color="grey"
              icon="settings_backup_restore"
              padding="12px"
              size="md"
              @click="handleResetSettings"
            >
              <q-tooltip>Сбросить настройки таблицы</q-tooltip>
            </q-btn>
          </div>

          <div
            v-if="tableState.selected.length > 0"
            class="col-auto"
          >
            <q-btn
              :label="`Удалить (${tableState.selected.length})`"
              color="negative"
              icon="delete"
              padding="12px"
              size="md"
              @click="confirmBulkDelete"
            />
          </div>

          <div class="col-auto text-grey-6">
            {{ searchInfo }}
            <TableSettingsIndicator :settings="tableSettings" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Таблица данных -->
    <q-table
      v-model:pagination="tableState.pagination"
      v-model:selected="tableState.selected"
      :columns="config?.columns || []"
      :loading="tableState.loading"
      :rows="visibleItems"
      class="products-table"
      row-key="id"
      selection="multiple"
      @request="onRequest"
    >
      <template #body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            color="primary"
            icon="edit"
            dense
            flat
            round
            @click="editItem(props.row)"
          >
            <q-tooltip>Редактировать</q-tooltip>
          </q-btn>
          <q-btn
            color="negative"
            icon="delete"
            dense
            flat
            round
            @click="confirmDelete(props.row)"
          >
            <q-tooltip>Удалить</q-tooltip>
          </q-btn>
        </q-td>
      </template>

      <template #body-cell-img="props">
        <q-td :props="props">
          <Base64ImageTableCell
            v-if="getFieldType(config, 'img') === 'base64-image'"
            :alt="`${props.row.label || 'Продукт'} - изображение`"
            :base64-src="props.value"
            :clickable="true"
            :size="70"
            show-as="thumbnail"
            @click="showImageDialog(props.value)"
          />
          <ImageTableCell
            v-else
            :alt="`${props.row.label || 'Продукт'} - изображение`"
            :image-url="props.value"
          />
        </q-td>
      </template>

      <template #body-cell-link="props">
        <q-td :props="props">
          <div class="text-center">
            <q-icon
              v-if="props.value"
              color="primary"
              name="link"
              size="20px"
            >
              <q-tooltip>{{ props.value }}</q-tooltip>
            </q-icon>
            <q-icon
              v-else
              color="grey-4"
              name="link_off"
              size="20px"
            >
              <q-tooltip>Нет ссылки</q-tooltip>
            </q-icon>
          </div>
        </q-td>
      </template>

      <template #body-cell-info="props">
        <q-td :props="props">
          <div
            :title="getCellText(props.value)"
            class="info-cell-content"
          >
            {{ getCellText(props.value) }}
          </div>
        </q-td>
      </template>

      <template #body-cell-label="props">
        <q-td :props="props">
          {{ getCellText(props.value, 60) }}
        </q-td>
      </template>

      <template #body-cell-title="props">
        <q-td :props="props">
          {{ getCellText(props.value, 100) }}
        </q-td>
      </template>

      <template #body-cell-subtitle="props">
        <q-td :props="props">
          {{ getCellText(props.value, 40) }}
        </q-td>
      </template>

      <template #body-cell-layout="props">
        <q-td :props="props">
          {{ getLayoutLabel(config, props.value) }}
        </q-td>
      </template>

      <template #body-cell-image="props">
        <q-td :props="props">
          <Base64ImageTableCell
            :alt="`Изображение ${props.row.id}`"
            :base64="props.value"
            :clickable="true"
            :size="60"
            @click="showImageDialog(props.value)"
          />
        </q-td>
      </template>

      <template #body-cell-thumbnail="props">
        <q-td :props="props">
          <Base64ImageTableCell
            :alt="`Миниатюра ${props.row.id}`"
            :base64="props.value"
            :clickable="true"
            :size="40"
            @click="showImageDialog(props.value)"
          />
        </q-td>
      </template>

      <template #no-data>
        <div class="full-width row flex-center text-grey-7 q-gutter-sm">
          <q-icon
            name="inbox"
            size="2em"
          />
          <span>Нет данных для отображения</span>
        </div>
      </template>
    </q-table>

    <!-- Диалог создания/редактирования -->
    <AdminFormDialog
      v-model="showCreateDialog"
      :config="config"
      :item="editingItem"
      :loading="formLoading"
      @cancel="handleCancel"
      @save="handleSave"
    />

    <!-- Диалог подтверждения удаления -->
    <q-dialog v-model="showDeleteDialog">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            color="negative"
            icon="warning"
            text-color="white"
          />
          <span class="q-ml-sm">
            {{ deleteDialogText }}
          </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Отмена"
            flat
            @click="showDeleteDialog = false"
          />
          <q-btn
            color="negative"
            label="Удалить"
            flat
            @click="handleDelete"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Диалог просмотра изображения -->
    <q-dialog
      v-model="showImageDialogState"
      maximized
    >
      <q-card class="bg-dark text-white">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Просмотр изображения</div>
          <q-space />
          <q-btn
            v-close-popup
            icon="close"
            dense
            flat
            round
          />
        </q-card-section>

        <q-card-section class="q-pt-none flex flex-center">
          <img
            :src="selectedImageUrl"
            alt="Просмотр изображения"
            style="max-width: 100%; max-height: 90vh; object-fit: contain"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style lang="scss">
// Styles moved to ./scss/admin-collection-page.scss
</style>
