<script setup lang="ts">
import LandingBanner from './components/landing-banner/LandingBanner.vue'
import ToroidCarousel from './components/landing-carousel/ToroidCarousel.vue'
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
    <ToroidCarousel />
  </q-page>
</template>
