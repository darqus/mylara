<script setup lang="ts">
import LandingCards from './components/LandingCards.vue'
import LandingCarousel from './components/LandingCarousel.vue'
</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-container">
        <LandingCarousel />
      </div>
      <div class="q-container">
        <LandingCards />
      </div>
    </div>
  </q-page>
</template>
