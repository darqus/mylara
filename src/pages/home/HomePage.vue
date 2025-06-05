<script setup lang="ts">
import LandingBanner from './components/landing-banner/LandingBanner.vue'
import LandingCards from './components/landing-cards/LandingCards.vue'
import LandingSlogan from './components/landing-slogan/LandingSlogan.vue'
</script>

<template>
  <q-page>
    <LandingBanner />
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
