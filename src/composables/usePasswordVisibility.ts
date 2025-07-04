import { ref, } from 'vue'

/**
 * Composable для управления видимостью пароля
 */
export function usePasswordVisibility() {
  const isPasswordVisible = ref(false)

  /**
   * Переключает видимость пароля
   */
  function togglePasswordVisibility() {
    isPasswordVisible.value = !isPasswordVisible.value
  }

  /**
   * Возвращает тип поля input на основе видимости пароля
   */
  function getInputType() {
    return isPasswordVisible.value ? 'text' : 'password'
  }

  /**
   * Возвращает иконку для показа/скрытия пароля
   */
  function getToggleIcon() {
    return isPasswordVisible.value ? 'o_visibility_off' : 'o_visibility'
  }

  /**
   * Сбрасывает видимость пароля
   */
  function resetPasswordVisibility() {
    isPasswordVisible.value = false
  }

  return {
    isPasswordVisible,
    togglePasswordVisibility,
    getInputType,
    getToggleIcon,
    resetPasswordVisibility,
  }
}
