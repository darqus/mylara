<script lang="ts" setup>
import { computed, ref } from 'vue'

type Todo = {
  id: number
  content: string
}

type Meta = {
  totalCount: number
}

const props = withDefaults(
  defineProps<{
    title: string
    todos?: Todo[]
    meta: Meta
    active?: boolean
  }>(),
  { todos: () => [] }
)

const clickCount = ref(0)

const increment = () => {
  clickCount.value += 1

  return clickCount.value
}

const todoCount = computed(() => props.todos.length)
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <q-list>
      <q-item
        v-for="todo in todos"
        :key="todo.id"
        clickable
        @click="increment"
      >
        {{ todo.id }} - {{ todo.content }}
      </q-item>
    </q-list>

    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>
</template>
