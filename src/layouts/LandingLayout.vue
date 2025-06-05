<script setup lang="ts">
import LandingHeader from './landing-header/LandingHeader.vue'

</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <LandingHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
