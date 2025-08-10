<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ROUTE_PATH } from 'src/types/route-paths'

defineOptions({ name: 'AdminMenuItem' })

type Props = {
  title: string
  icon: string
  link: string
}

const props = defineProps<Props>()
const route = useRoute()

// Проверяем, является ли текущий пункт меню активным
const isActive = computed(() => {
  // Для главной страницы лендинга
  if (
    props.link === String(ROUTE_PATH.ROOT) &&
    route.path === String(ROUTE_PATH.ROOT)
  ) {
    return true
  }

  // Для главной страницы админки
  if (
    props.link === String(ROUTE_PATH.ADMIN) &&
    route.path === String(ROUTE_PATH.ADMIN)
  ) {
    return true
  }

  // Для админских коллекций - точное совпадение
  if (props.link.includes(ROUTE_PATH.ADMIN_COLLECTION_PREFIX)) {
    return route.path === props.link
  }

  // Для других ссылок (исключаем корневые пути чтобы избежать ложных срабатываний)
  if (
    props.link !== String(ROUTE_PATH.ROOT) &&
    props.link !== String(ROUTE_PATH.ADMIN)
  ) {
    return route.path.startsWith(props.link)
  }

  return false
})
</script>

<template>
  <q-item
    v-ripple
    :active="isActive"
    :class="{ 'admin-menu-item--active': isActive }"
    :to="link"
    active-class="text-primary bg-primary-1"
    class="admin-menu-item"
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

<style lang="scss">
// Styles moved to /src/css/components/_admin-menu-item.scss
</style>
