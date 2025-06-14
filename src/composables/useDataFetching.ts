import { ref, } from 'vue'

import type { ApiResponse, } from 'src/types/api'

/**
 * Общий хук для загрузки данных
 * @param fetchFunction Функция для загрузки данных
 * @param initialValue Начальное значение данных
 * @returns Объект с данными, состоянием загрузки, ошибкой и функцией обновления
 */
export const useDataFetching = <T, R extends Record<string, unknown>>(
  fetchFunction: () => Promise<R & ApiResponse>,
  initialValue: T,
  dataKey: keyof R
) => {
  const data = ref<T>(initialValue)
  const loading = ref(true)
  const error = ref<ApiResponse['error']>(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      const result = await fetchFunction()

      if (result.error) {
        error.value = result.error
      } else {
        data.value = result[dataKey] as unknown as T
      }
    } catch (err) {
      console.error('Error in fetchData:', err)
      error.value = 'Произошла ошибка при загрузке данных'
    } finally {
      loading.value = false
    }
  }

  // Запускаем загрузку данных
  void fetchData()

  return {
    data,
    loading,
    error,
    refresh: fetchData,
  }
}
