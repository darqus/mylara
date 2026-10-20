import { useQuasar } from 'quasar'
import { computed } from 'vue'

export const useDevice = () => {
  const $q = useQuasar()

  // Проверка, является ли устройство мобильным
  const isMobile = computed(() => $q.screen.lt.sm)

  return { isMobile }
}
