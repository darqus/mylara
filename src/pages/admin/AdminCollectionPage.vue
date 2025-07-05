<template>
  <q-page class="q-pa-md">
    <div class="row items-center justify-between q-mb-md">
      <div>
        <div class="text-h4">
          {{ config?.label || collectionName }}
        </div>
        <div class="text-subtitle1 text-grey-7">
          Управление записями в коллекции
        </div>
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
              @update:model-value="performSearch(String($event || ''))"
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
      :rows="tableState.items"
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

      <template #no-data>
        <div class="full-width row flex-center text-grey-7 q-gutter-sm">
          <q-icon
            name="inbox"
            size="2em"
          />
          <span> Нет данных для отображения </span>
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
  </q-page>
</template>

<script setup lang="ts">
import {
  ref, onMounted, computed, watch,
} from 'vue'
import { useRoute, } from 'vue-router'

import { useQuasar, } from 'quasar'

import type { TableState, } from 'src/types/admin'

import AdminFormDialog from 'src/components/admin/AdminFormDialog.vue'

import { getCollectionConfig, } from 'src/services/admin-config.service'
import { firestoreService, } from 'src/services/firestore.service'

defineOptions({
  name: 'AdminCollectionPage',
})

const $q = useQuasar()
const route = useRoute()

const collectionName = computed(() => route.params.collection as string)
const config = computed(() => getCollectionConfig(collectionName.value))

const tableState = ref<TableState>({
  items: [],
  loading: false,
  pagination: {
    page: 1,
    rowsPerPage: 10,
    rowsNumber: 0,
  },
  filter: '',
  selected: [],
})

// Состояние для поиска
const allItems = ref<Record<string, unknown>[]>([])
const filteredItems = ref<Record<string, unknown>[]>([])

const showCreateDialog = ref(false)
const showDeleteDialog = ref(false)
const formLoading = ref(false)
const editingItem = ref<Record<string, unknown> | null>(null)
const itemToDelete = ref<Record<string, unknown> | null>(null)

// Вычисляемое свойство для отображения информации о поиске
const searchInfo = computed(() => {
  if (!tableState.value.filter.trim()) {
    return `Всего записей: ${allItems.value.length}`
  }

  return `Найдено: ${filteredItems.value.length} из ${allItems.value.length}`
})

const deleteDialogText = computed(() => {
  if (tableState.value.selected.length > 1) {
    return `Вы действительно хотите удалить ${tableState.value.selected.length} записей?`
  }

  return 'Вы действительно хотите удалить эту запись?'
})

onMounted(() => {
  void loadData()
})

// Отслеживаем изменения коллекции и автоматически перезагружаем данные
watch(
  () => collectionName.value,
  (newCollection, oldCollection) => {
    // Проверяем, что коллекция действительно изменилась
    if (newCollection !== oldCollection && newCollection) {
      // Сброс состояния при переключении коллекции
      resetTableState()

      // Показываем уведомление о переключении
      if (oldCollection && config.value?.label) {
        $q.notify({
          type: 'info',
          message: `Переключено на: ${config.value.label}`,
          position: 'top',
          timeout: 1000,
        })
      }

      // Загрузка данных новой коллекции
      void loadData()
    }
  }
)

function resetTableState() {
  tableState.value = {
    items: [],
    loading: true, // Показываем загрузку при переключении коллекции
    pagination: {
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0,
    },
    filter: '',
    selected: [],
  }

  // Сбрасываем данные поиска
  allItems.value = []
  filteredItems.value = []

  // Закрываем все диалоги
  showCreateDialog.value = false
  showDeleteDialog.value = false
  editingItem.value = null
  itemToDelete.value = null
}

// Функция поиска по всем полям
function performSearch(searchTerm: string) {
  if (!searchTerm.trim()) {
    // Если поисковый запрос пустой, показываем все элементы
    filteredItems.value = [ ...allItems.value, ]
    tableState.value.items = filteredItems.value
    tableState.value.pagination.rowsNumber = filteredItems.value.length

    return
  }

  const lowerSearchTerm = searchTerm.toLowerCase()
  const searchableFields = config.value?.fields?.map((field) => field.name) ?? []

  filteredItems.value = allItems.value.filter((item) => {
    return searchableFields.some((fieldName) => {
      const fieldValue = item[fieldName]

      if (fieldValue === null || fieldValue === undefined) {
        return false
      }

      const stringValue = String(fieldValue as string | number | boolean).toLowerCase()

      return stringValue.includes(lowerSearchTerm)
    })
  })

  tableState.value.items = filteredItems.value
  tableState.value.pagination.rowsNumber = filteredItems.value.length
  tableState.value.pagination.page = 1 // Сбрасываем на первую страницу при поиске
}

async function loadData() {
  if (!config.value) {
    $q.notify({
      type: 'negative',
      message: 'Конфигурация коллекции не найдена',
      position: 'top',
    })

    return
  }

  tableState.value.loading = true

  try {
    const response = await firestoreService.getCollection<
      Record<string, unknown>
    >(collectionName.value)

    if (response.error) {
      $q.notify({
        type: 'negative',
        message: response.error,
        position: 'top',
      })
    } else {
      // Сохраняем все данные для поиска
      allItems.value = response.items

      // Применяем текущий фильтр поиска
      performSearch(tableState.value.filter)
    }
  } finally {
    tableState.value.loading = false
  }
}

function onRequest(props: {
  pagination: { page: number; rowsPerPage: number }
}) {
  const {
    page, rowsPerPage,
  } = props.pagination

  tableState.value.pagination.page = page
  tableState.value.pagination.rowsPerPage = rowsPerPage
}

function editItem(item: Record<string, unknown>) {
  editingItem.value = {
    ...item,
  }
  showCreateDialog.value = true
}

function confirmDelete(item: Record<string, unknown>) {
  itemToDelete.value = item
  tableState.value.selected = [ item, ]
  showDeleteDialog.value = true
}

function confirmBulkDelete() {
  showDeleteDialog.value = true
}

async function handleSave(data: Record<string, unknown>) {
  formLoading.value = true

  try {
    if (editingItem.value?.id) {
      // Редактирование
      const response = await firestoreService.updateDocument(
        collectionName.value,
        editingItem.value.id as string,
        data
      )

      if (response.error) {
        $q.notify({
          type: 'negative',
          message: response.error,
          position: 'top',
        })
      } else {
        $q.notify({
          type: 'positive',
          message: 'Запись успешно обновлена',
          position: 'top',
        })
        await loadData()
        handleCancel()
      }
    } else {
      // Создание
      const response = await firestoreService.createDocument(
        collectionName.value,
        data
      )

      if (response.error) {
        $q.notify({
          type: 'negative',
          message: response.error,
          position: 'top',
        })
      } else {
        $q.notify({
          type: 'positive',
          message: 'Запись успешно создана',
          position: 'top',
        })
        await loadData()
        handleCancel()
      }
    }
  } finally {
    formLoading.value = false
  }
}

function handleCancel() {
  showCreateDialog.value = false
  editingItem.value = null
}

async function handleDelete() {
  const itemsToDelete =
    tableState.value.selected.length > 0
      ? tableState.value.selected
      : itemToDelete.value
        ? [ itemToDelete.value, ]
        : []

  if (itemsToDelete.length === 0) {
    return
  }

  try {
    const deletePromises = itemsToDelete.map((item) =>
      firestoreService.deleteDocument(collectionName.value, item.id as string)
    )

    const results = await Promise.all(deletePromises)
    const hasErrors = results.some((result) => result.error)

    if (hasErrors) {
      $q.notify({
        type: 'negative',
        message: 'Произошла ошибка при удалении некоторых записей',
        position: 'top',
      })
    } else {
      $q.notify({
        type: 'positive',
        message: `Успешно удалено ${itemsToDelete.length} записей`,
        position: 'top',
      })
    }

    await loadData()
  } finally {
    showDeleteDialog.value = false
    tableState.value.selected = []
    itemToDelete.value = null
  }
}
</script>
