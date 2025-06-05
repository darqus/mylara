<script setup lang="ts">
import LandingBanner from './components/landing-banner/LandingBanner.vue'
import LandingCarousel from './components/landing-carousel/LandingCarousel.vue'
import LandingSlogan from './components/landing-slogan/LandingSlogan.vue'
</script>

<template>
  <q-page>
    <LandingBanner />
    <div
      class="q-mx-auto"
      style="max-width: 1200px"
    >
      <LandingSlogan />
    </div>
    <LandingCarousel />
  </q-page>
</template>
