<script setup lang="ts">
import { ref, } from 'vue'

import type { Card, } from './carousel'
import { LANDING_CAROUSEL, } from './carousel'
import LandingCard from '../landing-card/LandingCard.vue'

const carousel = ref<Card[]>(LANDING_CAROUSEL)

const handleCardClick = (id: number | string) => {
  console.warn('Карточка выбрана:', id)
}
</script>

<template>
  <div class="row q-col-gutter-md">
    <div
      v-for="{ id, label, externalLink, imgLink } in carousel"
      :key="id"
      class="col-12 col-sm-6 col-md-4"
    >
      <LandingCard
        :id="id"
        :external-link="externalLink"
        :img-link="imgLink"
        :label="label"
        @click="handleCardClick"
      />
    </div>
  </div>
</template>
