<script setup lang="ts">
import { useMeta, } from 'quasar'

import { SEO_HOME, } from 'src/utils/seo-constants'

import { SeoService, } from 'src/services/seo.service'

import LandingCarousel from './components/landing-carousel/LandingCarousel.vue'
import LandingSlider from './components/landing-slider/LandingSlider.vue'
import LandingSlogan from './components/landing-slogan/LandingSlogan.vue'

// Устанавливаем метаданные для главной страницы

useMeta(() => SeoService.setMeta(SEO_HOME))
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
