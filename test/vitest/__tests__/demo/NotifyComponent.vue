<script lang="ts" setup>
import { Notify } from 'quasar'

function onClick() {
  Notify.create('Hello there!')
}
</script>

<template>
  <q-btn @click="onClick">Click me!</q-btn>
</template>
