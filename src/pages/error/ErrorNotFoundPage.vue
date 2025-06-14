<script setup lang="ts">
import { useMeta, } from 'quasar'

import { SEO_404, } from 'src/utils/seo-constants'

import { SeoService, } from 'src/services/seo.service'

// Устанавливаем метаданные для страницы 404

useMeta(() => SeoService.setMeta(SEO_404))
</script>

<template>
  <div
    class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div
        class="text-h2"
        style="opacity: 0.4"
      >
        Ууупс. Тут ничего нет...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        label="На Главную"
        text-color="primary"
        to="/"
        no-caps
        unelevated
      />
    </div>
  </div>
</template>
