<script setup lang="ts">
import LandingCards from './components/landing-cards/LandingCards.vue'
import LandingCarousel from './components/landing-carousel/LandingCarousel.vue'
</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <div
        class="q-mx-auto"
        style="max-width: 1200px"
      >
        <LandingCarousel />
        <LandingCards />
      </div>
    </div>
  </q-page>
</template>
