import { ref, } from 'vue'

import { getSlogan, } from 'src/services/slogan.service'

export const useSlogan = () => {
  const slogan = ref('')
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchSlogan = async () => {
    loading.value = true
    error.value = null

    try {
      const result = await getSlogan()

      if (result.error) {
        error.value = result.error
      } else if (result.title) {
        slogan.value = result.title
      }
    } catch (err) {
      console.error('Error in fetchSlogan:', err)
      error.value = 'Произошла ошибка при загрузке слогана'
    } finally {
      loading.value = false
    }
  }

  // Запускаем загрузку данных
  void fetchSlogan()

  return {
    slogan,
    loading,
    error,
    refresh: fetchSlogan,
  }
}
