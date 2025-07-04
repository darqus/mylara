<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-1">
        <q-card
          class="q-pa-lg"
          style="min-width: 400px"
        >
          <q-card-section class="text-center">
            <div class="text-h4 text-grey-8 q-mb-md">
              Админка
            </div>
            <div class="text-subtitle1 text-grey-6">
              Вход в панель администратора
            </div>
          </q-card-section>

          <q-card-section>
            <q-form @submit="handleLogin">
              <q-input
                v-model="password"
                :error="hasError"
                error-message="Неверный пароль"
                label="Пароль"
                type="password"
                filled
                @keyup.enter="handleLogin"
              >
                <template #prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>

              <div class="q-mt-lg">
                <q-btn
                  :loading="loading"
                  class="full-width"
                  color="primary"
                  label="Войти"
                  size="lg"
                  type="submit"
                />
              </div>
            </q-form>
          </q-card-section>

          <q-card-section class="text-center">
            <div class="text-caption text-grey-6">
              Для демо используйте пароль: <strong>admin123</strong>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, } from 'vue'
import { useRouter, } from 'vue-router'

import { useAdminAuth, } from 'src/composables/useAdminAuth'

defineOptions({
  name: 'AdminLoginPage',
})

const router = useRouter()
const {
  login,
} = useAdminAuth()

const password = ref('')
const loading = ref(false)
const hasError = ref(false)

async function handleLogin() {
  loading.value = true
  hasError.value = false

  // Имитируем задержку сети
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const success = login(password.value)

  if (success) {
    void router.push('/admin')
  } else {
    hasError.value = true
    password.value = ''
  }

  loading.value = false
}
</script>
