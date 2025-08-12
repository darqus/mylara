import { ref } from 'vue'

import { useQuasar } from 'quasar'

import { firestoreService } from 'src/services/firestore.service'
import type { CollectionConfig, TableState } from 'src/types/admin'

/**
 * Composable для управления коллекцией в админке
 */
export function useAdminCollection(config: CollectionConfig) {
  const $q = useQuasar()

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

  const formLoading = ref(false)

  /**
   * Загрузка данных коллекции
   */
  async function loadData() {
    tableState.value.loading = true

    try {
      const response = await firestoreService.getCollection<
        Record<string, unknown>
      >(config.name)

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

  /**
   * Создание нового элемента
   */
  async function createItem(data: Record<string, unknown>) {
    formLoading.value = true

    try {
      const response = await firestoreService.createDocument(config.name, data)

      if (response.error) {
        $q.notify({
          type: 'negative',
          message: response.error,
          position: 'top',
        })

        return false
      } else {
        $q.notify({
          type: 'positive',
          message: 'Запись успешно создана',
          position: 'top',
        })
        await loadData()

        return true
      }
    } finally {
      formLoading.value = false
    }
  }

  /**
   * Обновление элемента
   */
  async function updateItem(id: string, data: Record<string, unknown>) {
    formLoading.value = true

    try {
      const response = await firestoreService.updateDocument(
        config.name,
        id,
        data
      )

      if (response.error) {
        $q.notify({
          type: 'negative',
          message: response.error,
          position: 'top',
        })

        return false
      } else {
        $q.notify({
          type: 'positive',
          message: 'Запись успешно обновлена',
          position: 'top',
        })
        await loadData()

        return true
      }
    } finally {
      formLoading.value = false
    }
  }

  /**
   * Удаление элементов
   */
  async function deleteItems(items: Array<Record<string, unknown>>) {
    try {
      const deletePromises = items.map((item) =>
        firestoreService.deleteDocument(config.name, item.id as string)
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
          message: `Успешно удалено ${items.length} записей`,
          position: 'top',
        })
      }

      await loadData()
      tableState.value.selected = []

      return !hasErrors
    } catch {
      $q.notify({
        type: 'negative',
        message: 'Произошла ошибка при удалении',
        position: 'top',
      })

      return false
    }
  }

  /**
   * Фильтрация данных
   */
  function filterData(query: string) {
    tableState.value.filter = query
  }

  /**
   * Сброс выбранных элементов
   */
  function clearSelection() {
    tableState.value.selected = []
  }

  return {
    tableState,
    formLoading,
    loadData,
    createItem,
    updateItem,
    deleteItems,
    filterData,
    clearSelection,
  }
}
