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
        <div class="row q-gutter-md items-end">
          <div class="col-12 col-md-6">
            <q-input
              v-model="tableState.filter"
              debounce="300"
              label="Поиск"
              clearable
              filled
              @update:model-value="loadData"
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
              label="Обновить"
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
              @click="confirmBulkDelete"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Таблица данных -->
    <q-table
      v-model:pagination="tableState.pagination"
      v-model:selected="tableState.selected"
      :columns="config?.columns || []"
      :filter="tableState.filter"
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
  ref, onMounted, computed,
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

const showCreateDialog = ref(false)
const showDeleteDialog = ref(false)
const formLoading = ref(false)
const editingItem = ref<Record<string, unknown> | null>(null)
const itemToDelete = ref<Record<string, unknown> | null>(null)

const deleteDialogText = computed(() => {
  if (tableState.value.selected.length > 1) {
    return `Вы действительно хотите удалить ${tableState.value.selected.length} записей?`
  }

  return 'Вы действительно хотите удалить эту запись?'
})

onMounted(() => {
  void loadData()
})

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
      tableState.value.items = response.items
      tableState.value.pagination.rowsNumber = response.items.length
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
