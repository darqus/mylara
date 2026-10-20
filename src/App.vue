<script setup lang="ts">
import { useMeta } from 'quasar'
import { onMounted } from 'vue'

import '@/utils/images-migration'

import { useAdminAuth } from '@/composables/useAdminAuth'
import { meta } from '@/utils/meta'

defineOptions({ name: 'App' })

const { initAuth } = useAdminAuth()

onMounted(() => {
  // Инициализируем слежение за состоянием аутентификации
  initAuth()
})

useMeta(meta)
</script>

<template>
  <router-view />
</template>
