<template>
  <q-item
    v-ripple
    :to="link"
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
defineOptions({
  name: 'AdminMenuItem',
})

type Props = {
  title: string
  icon: string
  link: string
}

defineProps<Props>()
</script>
