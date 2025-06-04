<script setup lang="ts">
import { ref, } from 'vue'

import type { Card, } from './cards'
import { LANDING_CARDS, } from './cards'
import LandingCard from '../landing-card/LandingCard.vue'

const cards = ref<Card[]>(LANDING_CARDS)

const handleCardClick = (id: number | string) => {
  console.warn('Карточка выбрана:', id)
}
</script>

<template>
  <div class="row q-col-gutter-md">
    <div
      v-for="{ id, label, externalLink, imgLink } in cards"
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
