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
            <q-form
              ref="formRef"
              @submit="handleLogin"
            >
              <q-input
                v-model="email"
                :error="hasError && !email"
                autocomplete="username"
                error-message="Введите email"
                label="Email"
                type="email"
                filled
              >
                <template #prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-input
                v-model="password"
                :error="hasError && !password"
                :error-message="errorMessage || 'Введите пароль'"
                autocomplete="current-password"
                class="q-mt-md"
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
              Используйте свои учетные данные Firebase Auth
            </div>

            <!-- Показываем кнопку регистрации только если нет аутентифицированных пользователей -->
            <div
              v-if="showRegistrationOption"
              class="q-mt-md"
            >
              <q-btn
                :loading="registrationLoading"
                color="secondary"
                label="Создать администратора"
                flat
                @click="showRegistrationDialog = true"
              />
            </div>
          </q-card-section>
        </q-card>

        <!-- Диалог регистрации администратора -->
        <q-dialog
          v-model="showRegistrationDialog"
          persistent
        >
          <q-card style="min-width: 400px">
            <q-card-section>
              <div class="text-h6">
                Создание администратора
              </div>
              <div class="text-caption text-grey-6 q-mt-sm">
                Эта опция доступна только для первоначальной настройки
              </div>
            </q-card-section>

            <q-card-section>
              <q-form
                ref="registerFormRef"
                @submit="handleRegister"
              >
                <q-input
                  v-model="registerEmail"
                  :rules="[
                    (val) => !!val || 'Введите email',
                    (val) =>
                      /.+@.+\..+/.test(val) || 'Введите корректный email',
                  ]"
                  label="Email администратора"
                  type="email"
                  filled
                />

                <q-input
                  v-model="registerPassword"
                  :rules="[
                    (val) => !!val || 'Введите пароль',
                    (val) =>
                      val.length >= 6 ||
                      'Пароль должен содержать минимум 6 символов',
                  ]"
                  class="q-mt-md"
                  label="Пароль"
                  type="password"
                  filled
                />
              </q-form>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                label="Отмена"
                flat
                @click="showRegistrationDialog = false"
              />
              <q-btn
                :loading="registrationLoading"
                color="primary"
                label="Создать"
                flat
                @click="handleRegister"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {
  ref, onMounted,
} from 'vue'
import { useRouter, } from 'vue-router'

import { useQuasar, } from 'quasar'
import type { QForm, } from 'quasar'

import { useAdminAuth, } from 'src/composables/useAdminAuth'

defineOptions({
  name: 'AdminLoginPage',
})

const router = useRouter()
const $q = useQuasar()
const {
  login, register, loading,
} = useAdminAuth()

const formRef = ref<QForm>()
const registerFormRef = ref<QForm>()

const email = ref('')
const password = ref('')
const hasError = ref(false)
const errorMessage = ref('')

const showRegistrationDialog = ref(false)
const showRegistrationOption = ref(false)
const registrationLoading = ref(false)
const registerEmail = ref('')
const registerPassword = ref('')

onMounted(() => {
  // В реальном приложении здесь можно проверить, есть ли уже созданные пользователи
  // Для простоты показываем опцию регистрации всегда
  showRegistrationOption.value = true
})

async function handleLogin() {
  if (!formRef.value) {
    return
  }

  const isValid = await formRef.value.validate()

  if (!isValid) {
    return
  }

  hasError.value = false
  errorMessage.value = ''

  const result = await login(email.value, password.value)

  if (result.success) {
    $q.notify({
      type: 'positive',
      message: 'Вход выполнен успешно',
      position: 'top',
    })

    void router.push('/admin')
  } else {
    hasError.value = true
    errorMessage.value = result.error ?? 'Произошла ошибка при входе'

    $q.notify({
      type: 'negative',
      message: result.error ?? 'Произошла ошибка при входе',
      position: 'top',
    })
  }
}

async function handleRegister() {
  if (!registerFormRef.value) {
    return
  }

  const isValid = await registerFormRef.value.validate()

  if (!isValid) {
    return
  }

  registrationLoading.value = true

  const result = await register(registerEmail.value, registerPassword.value)

  if (result.success) {
    $q.notify({
      type: 'positive',
      message: 'Администратор создан успешно',
      position: 'top',
    })

    showRegistrationDialog.value = false
    void router.push('/admin')
  } else {
    $q.notify({
      type: 'negative',
      message: result.error ?? 'Произошла ошибка при создании администратора',
      position: 'top',
    })
  }

  registrationLoading.value = false
}
</script>
