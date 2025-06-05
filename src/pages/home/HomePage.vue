<script setup lang="ts">
import LandingCards from './components/landing-cards/LandingCards.vue'
import LandingCarousel from './components/landing-carousel/LandingCarousel.vue'
import LandingSlogan from './components/landing-slogan/LandingSlogan.vue'
</script>

<template>
  <q-page>
    <LandingCarousel />
    <div class="q-pa-md">
      <div
        class="q-mx-auto"
        style="max-width: 1200px"
      >
        <LandingSlogan />

        <LandingCards />
      </div>
    </div>
  </q-page>
</template>
