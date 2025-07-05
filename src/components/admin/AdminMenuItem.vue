<template>
  <q-item
    v-ripple
    :active="isActive"
    :to="link"
    active-class="text-primary bg-grey-2"
    clickable
  >
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { computed, } from 'vue'
import { useRoute, } from 'vue-router'

defineOptions({
  name: 'AdminMenuItem',
})

type Props = {
  title: string
  icon: string
  link: string
}

const props = defineProps<Props>()
const route = useRoute()

// Проверяем, является ли текущий пункт меню активным
const isActive = computed(() => {
  // Для главной страницы
  if (props.link === '/' && route.path === '/') {
    return true
  }

  // Для админских коллекций
  if (props.link.includes('/admin/collection/')) {
    return route.path === props.link
  }

  // Для других ссылок
  return route.path.startsWith(props.link) && props.link !== '/'
})
</script>
