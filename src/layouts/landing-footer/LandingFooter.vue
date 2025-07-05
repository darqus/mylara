<script setup lang="ts">
import {
  APP_VERSION, BUILD_DATE, 
} from 'src/utils/meta'
</script>

<template>
  <q-footer
    class="bg-white text-primary"
    elevated
  >
    <q-toolbar>
      <q-img
        height="auto"
        src="logo.svg"
        width="50px"
      />
      <q-space />
      <small> v{{ APP_VERSION }} {{ BUILD_DATE }} </small>
    </q-toolbar>
  </q-footer>
</template>
