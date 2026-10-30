import type { TableState } from '@/types/admin'
import type { MaybeRefOrGetter } from 'vue'

import { useQuasar } from 'quasar'
import { ref, toValue } from 'vue'

import { firestoreService } from '@/services/firestore.service'

/**
 * Composable для управления коллекцией в админке.
 *
 * Владеет состоянием таблицы и всеми CRUD-операциями (с уведомлениями).
 * `tableState.items` хранит «сырые» данные из Firestore; фильтрация и
 * сортировка — зона ответственности `useTableFilterSort`, настройки в
 * localStorage — `useTableSettings`.
 *
 * @param collectionName - Реактивное имя коллекции (в админке берётся из маршрута)
 */
export function useAdminCollection(collectionName: MaybeRefOrGetter<string>) {
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

  function currentCollectionName(): string {
    return toValue(collectionName)
  }

  /**
   * Загрузка данных коллекции (перезаполняет `tableState.items`)
   */
  async function loadData() {
    const name = currentCollectionName()

    if (!name) {
      $q.notify({
        type: 'negative',
        message: 'Конфигурация коллекции не найдена',
        position: 'top',
      })

      return
    }

    tableState.value.loading = true

    try {
      const response =
        await firestoreService.getCollection<Record<string, unknown>>(name)

      if (response.error) {
        $q.notify({
          type: 'negative',
          message: response.error,
          position: 'top',
        })
      } else {
        tableState.value.items = response.items
      }
    } finally {
      tableState.value.loading = false
    }
  }

  /**
   * Создание нового элемента
   *
   * @returns `true`, если запись создана и таблица перезагружена
   */
  async function createItem(data: Record<string, unknown>) {
    formLoading.value = true

    try {
      const response = await firestoreService.createDocument(
        currentCollectionName(),
        data
      )

      if (response.error) {
        $q.notify({
          type: 'negative',
          message: response.error,
          position: 'top',
        })

        return false
      }

      $q.notify({
        type: 'positive',
        message: 'Запись успешно создана',
        position: 'top',
      })
      await loadData()

      return true
    } finally {
      formLoading.value = false
    }
  }

  /**
   * Обновление элемента
   *
   * @returns `true`, если запись обновлена и таблица перезагружена
   */
  async function updateItem(id: string, data: Record<string, unknown>) {
    formLoading.value = true

    try {
      const response = await firestoreService.updateDocument(
        currentCollectionName(),
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
      }

      $q.notify({
        type: 'positive',
        message: 'Запись успешно обновлена',
        position: 'top',
      })
      await loadData()

      return true
    } finally {
      formLoading.value = false
    }
  }

  /**
   * Удаление элементов
   *
   * @returns `true`, если все записи удалены без ошибок
   */
  async function deleteItems(items: Array<Record<string, unknown>>) {
    try {
      const deletePromises = items.map((item) =>
        firestoreService.deleteDocument(
          currentCollectionName(),
          item.id as string
        )
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
      clearSelection()

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
    clearSelection,
  }
}
