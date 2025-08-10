<script setup lang="ts">
import DataLoader from 'src/components/common/data-loader/DataLoader.vue'
import './scss/landing-slogan.scss'

import { getSlogan } from 'src/services/slogan.service'
import type { SloganResponse } from 'src/types/api'
</script>

<template>
  <DataLoader
    :fetch-data="getSlogan"
    :is-empty="false"
  >
    <template #content="{ data }">
      <div
        v-if="(data as SloganResponse)?.image"
        :class="{
          'reverse': (data as SloganResponse)?.layout === 'text-right'
        }"
        class="row q-col-gutter-lg items-center"
      >
        <!-- Текст слогана -->
        <div class="col-12 col-md-8">
          <div
            :class="{
              'text-center text-md-left': (data as SloganResponse)?.layout === 'text-left',
              'text-center text-md-right': (data as SloganResponse)?.layout === 'text-right'
            }"
            class="text-h4 q-mb-md"
          >
            {{ (data as SloganResponse)?.title || '' }}
          </div>
        </div>

        <!-- Изображение слогана -->
        <div class="col-12 col-md-4 text-center">
          <q-img
            :src="(data as SloganResponse).image!"
            alt="Изображение слогана"
            class="slogan-image"
            fit="contain"
            ratio="1"
            style="max-width: 300px; border-radius: 12px;"
          >
            <template #error>
              <div class="absolute-full flex flex-center bg-grey-2">
                <q-icon
                  color="grey-5"
                  name="image"
                  size="60px"
                />
              </div>
            </template>
          </q-img>
        </div>
      </div>

      <!-- Если нет изображения, показываем только текст -->
      <div
        v-else
        class="text-center"
      >
        <div class="text-h4 q-mb-md">
          {{ (data as SloganResponse)?.title || '' }}
        </div>
      </div>
    </template>
  </DataLoader>
</template>

<style lang="scss">
// Styles moved to ./scss/landing-slogan.scss
</style>
