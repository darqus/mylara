<script setup lang="ts">
import { onMounted } from 'vue'

import { useMeta } from 'quasar'

import 'src/utils/images-migration'
import { meta } from 'src/utils/meta'

import { useAdminAuth } from 'src/composables/useAdminAuth'

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
