<script setup lang="ts">
import LandingCarousel from './components/landing-carousel/LandingCarousel.vue'
import LandingSlider from './components/landing-slider/LandingSlider.vue'
import LandingSlogan from './components/landing-slogan/LandingSlogan.vue'
</script>

<template>
  <q-page>
    <LandingSlider />
    <div
      class="q-mx-auto"
      style="max-width: 1200px"
    >
      <LandingSlogan />
    </div>
    <LandingCarousel />
  </q-page>
</template>
