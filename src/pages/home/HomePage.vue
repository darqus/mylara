<script setup lang="ts">
import LandingBanner from './components/landing-banner/LandingBanner.vue'
import Carousel3D from './components/landing-carousel/Carousel3D.vue'
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
    <Carousel3D />
  </q-page>
</template>
