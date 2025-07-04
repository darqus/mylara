<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          icon="menu"
          dense
          flat
          round
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Админка </q-toolbar-title>

        <q-btn
          icon="logout"
          dense
          flat
          round
          @click="handleLogout"
        >
          <q-tooltip>Выйти</q-tooltip>
        </q-btn>

        <div class="q-ml-md">
          Версия {{ version }}
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
    >
      <q-list>
        <q-item-label header>
          Управление данными
        </q-item-label>

        <AdminMenuItem
          v-for="collection in collections"
          :key="collection.name"
          :icon="collection.icon"
          :link="`/admin/collection/${collection.name}`"
          :title="collection.label"
        />

        <q-separator />

        <AdminMenuItem
          icon="home"
          link="/"
          title="На главную"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {
  ref, onMounted,
} from 'vue'
import { useRouter, } from 'vue-router'

import AdminMenuItem from 'src/components/admin/AdminMenuItem.vue'

import { useAdminAuth, } from 'src/composables/useAdminAuth'
import { getAllCollections, } from 'src/services/admin-config.service'

defineOptions({
  name: 'AdminLayout',
})

const router = useRouter()
const {
  checkAuth, logout,
} = useAdminAuth()

const leftDrawerOpen = ref(false)
const version = '1.0.0'
const collections = getAllCollections()

onMounted(() => {
  // Проверяем аутентификацию при загрузке
  if (!checkAuth()) {
    void router.push('/admin/login')
  }
})

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function handleLogout() {
  logout()
  void router.push('/admin/login')
}
</script>
