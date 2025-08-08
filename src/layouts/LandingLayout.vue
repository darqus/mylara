<script setup lang="ts">
import LandingFooter from './landing-footer/LandingFooter.vue'
import LandingHeader from './landing-header/LandingHeader.vue'
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <LandingHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <LandingFooter />
  </q-layout>
</template>
