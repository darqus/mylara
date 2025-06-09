import { computed, } from 'vue'

import { useQuasar, } from 'quasar'

export const useDevice = () => {
  const $q = useQuasar()

  // Проверка, является ли устройство мобильным
  const isMobile = computed(() => $q.screen.lt.sm)

  return {
    isMobile,
  }
}
