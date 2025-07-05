<script setup lang="ts">
import DataLoader from 'src/components/common/data-loader/DataLoader.vue'

import { getSlogan } from 'src/services/slogan.service'
</script>

<template>
  <DataLoader
    :fetch-data="getSlogan"
    :is-empty="false"
    data-key="title"
  />
</template>
