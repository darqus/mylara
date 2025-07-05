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

        <div
          v-if="currentUser"
          class="q-mr-md text-caption"
        >
          {{ currentUser.email }}
        </div>

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
          icon="home"
          link="/admin"
          title="На главную Админки"
        />

        <q-separator />

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
          title="На главную Лендинга"
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
  ref, watch,
} from 'vue'
import { useRouter, } from 'vue-router'

import { useQuasar, } from 'quasar'

import { APP_VERSION, } from 'src/utils/constants'

import AdminMenuItem from 'src/components/admin/AdminMenuItem.vue'

import { useAdminAuth, } from 'src/composables/useAdminAuth'
import { getAllCollections, } from 'src/services/admin-config.service'

defineOptions({
  name: 'AdminLayout',
})

const router = useRouter()
const $q = useQuasar()
const {
  currentUser, isAuthenticated, logout,
} = useAdminAuth()

const leftDrawerOpen = ref(false)
const version = APP_VERSION
const collections = getAllCollections()

// Следим за изменениями аутентификации
watch(
  () => isAuthenticated.value,
  (authenticated) => {
    if (!authenticated) {
      void router.push('/admin/login')
    }
  },
  {
    immediate: true,
  }
)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

async function handleLogout() {
  const result = await logout()

  if (result.success) {
    $q.notify({
      type: 'positive',
      message: 'Выход выполнен успешно',
      position: 'top',
    })

    void router.push('/admin/login')
  } else {
    $q.notify({
      type: 'negative',
      message: result.error ?? 'Произошла ошибка при выходе',
      position: 'top',
    })
  }
}
</script>
