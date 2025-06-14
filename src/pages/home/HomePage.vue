<script setup lang="ts">
import { useMeta, } from 'quasar'

import { SeoService, } from 'src/services/seo.service'

import LandingCarousel from './components/landing-carousel/LandingCarousel.vue'
import LandingSlider from './components/landing-slider/LandingSlider.vue'
import LandingSlogan from './components/landing-slogan/LandingSlogan.vue'

// Устанавливаем метаданные для главной страницы
useMeta(() => SeoService.setMeta({
  title: 'MYLARA | Косметика по уходу за лицом',
  description: 'Инновационная косметика по уходу за лицом от MYLARA. Натуральные ингредиенты и эффективные формулы для вашей красоты.',
  keywords: 'косметика, уход за лицом, натуральная косметика, MYLARA, красота',
  ogImage: '/logo.svg',
}))
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
