import { ref, } from 'vue'

import { getSlogan, } from 'src/services/slogan.service'

// Fallback slogan if Firebase fails
const fallbackSlogan = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const useSlogan = () => {
  const slogan = ref(fallbackSlogan)
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchSlogan = async () => {
    loading.value = true
    error.value = null

    try {
      const result = await getSlogan()

      if (result.error) {
        error.value = result.error
        slogan.value = fallbackSlogan
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
