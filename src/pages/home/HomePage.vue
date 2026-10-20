<script setup lang="ts">
import { useMeta } from 'quasar'

import type { MetaData } from '@/services/seo.service'
import { SeoService } from '@/services/seo.service'
import { SEO_HOME } from '@/utils/seo-constants'

import LandingCarousel from './components/landing-carousel/LandingCarousel.vue'
import LandingSlider from './components/landing-slider/LandingSlider.vue'
import LandingSlogan from './components/landing-slogan/LandingSlogan.vue'

// Устанавливаем метаданные для главной страницы
useMeta(() => SeoService.setMeta(SEO_HOME) as MetaData)
</script>

<template>
  <q-page>
    <LandingSlider />
    <div
      class="q-mx-auto q-pt-xl q-px-md"
      style="max-width: 1200px"
    >
      <LandingSlogan />
    </div>
    <LandingCarousel />
  </q-page>
</template>
