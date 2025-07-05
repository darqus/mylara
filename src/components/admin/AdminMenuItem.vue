<template>
  <q-item
    v-ripple
    :active="isActive"
    :to="link"
    active-class="text-primary bg-primary-1"
    class="menu-item"
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
  // Для главной страницы лендинга
  if (props.link === '/' && route.path === '/') {
    return true
  }

  // Для главной страницы админки
  if (props.link === '/admin' && route.path === '/admin') {
    return true
  }

  // Для админских коллекций - точное совпадение
  if (props.link.includes('/admin/collection/')) {
    return route.path === props.link
  }

  // Для других ссылок (исключаем корневые пути чтобы избежать ложных срабатываний)
  if (props.link !== '/' && props.link !== '/admin') {
    return route.path.startsWith(props.link)
  }

  return false
})
</script>

<style lang="scss" scoped>
.menu-item {
  border-radius: 8px;
  margin: 2px 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(var(--q-primary-rgb), 0.08);
  }

  &.q-item--active {
    font-weight: 600;
    border-left: 3px solid var(--q-primary);
    background-color: rgba(var(--q-primary-rgb), 0.12);

    .q-icon {
      color: var(--q-primary);
    }
  }
}
</style>
