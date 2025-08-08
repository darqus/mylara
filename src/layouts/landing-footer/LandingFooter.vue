<script setup lang="ts">
import { APP_VERSION, BUILD_DATE } from 'src/utils/meta'

// Function to open external links
const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

// Social media links and QR codes
const socialMedia = [
  {
    name: 'Telegram',
    qrCode: 'qr-telegram.svg',
    url: 'https://t.me/yourusername',
    color: '#0088cc'
  },
  {
    name: 'WhatsApp',
    qrCode: 'qr-whatsapp.svg',
    url: 'https://wa.me/yourphonenumber',
    color: '#25D366'
  },
  {
    name: 'Instagram',
    qrCode: 'qr-instagram.svg',
    url: 'https://instagram.com/yourusername',
    color: '#E4405F'
  }
]

// Contact information
const contacts = [
  {
    icon: 'phone',
    label: 'Телефон',
    value: '+7 (999) 123-45-67'
  },
  {
    icon: 'email',
    label: 'Email',
    value: 'contact@example.com'
  },
  {
    icon: 'location_on',
    label: 'Адрес',
    value: 'г. Москва, ул. Примерная, д. 123'
  }
]
</script>

<template>
  <q-footer
    class="bg-white text-primary"
    elevated
  >
    <div class="q-pa-md">
      <div class="row q-col-gutter-md">
        <!-- Logo and Company Info -->
        <div class="col-12 col-md-4">
          <div class="flex items-center q-mb-md">
            <q-img
              class="q-mr-sm"
              height="auto"
              src="logo.svg"
              width="100px"
            />
            <!-- <div class="text-h6 text-weight-bold">MyLara</div> -->
          </div>
          <p class="text-grey-8 q-mb-sm">
            Ваш надежный партнер в мире технологий и инноваций.
          </p>
          <small class="text-grey-6">v{{ APP_VERSION }} {{ BUILD_DATE }}</small>
        </div>

        <!-- Contact Information -->
        <div class="col-12 col-md-4">
          <div class="text-h6 text-weight-bold q-mb-md">Контакты</div>
          <div class="q-space">
            <div
              v-for="(contact, index) in contacts"
              :key="index"
              class="flex items-center q-mb-sm"
            >
              <q-icon
                :name="contact.icon"
                class="q-mr-sm text-primary"
                size="sm"
              />
              <div>
                <div class="text-caption text-grey-6">{{ contact.label }}</div>
                <div class="text-body2">{{ contact.value }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media QR Codes -->
        <div class="col-12 col-md-4">
          <div class="text-h6 text-weight-bold q-mb-md">Мы в соцсетях</div>
          <div class="row q-col-gutter-sm">
            <div
              v-for="(social, index) in socialMedia"
              :key="index"
              class="col-4 text-center"
            >
              <q-card
                class="cursor-pointer hover-card"
                bordered
                flat
                @click="openExternalLink(social.url)"
              >
                <q-card-section class="q-pa-sm">
                  <q-img
                    :alt="`QR код ${social.name}`"
                    :src="social.qrCode"
                    class="qr-code"
                    fit="contain"
                    style="height: 80px; width: 80px;"
                  >
                    <template #error>
                      <div class="absolute-full flex flex-center bg-grey-3">
                        <q-icon
                          :style="{ color: social.color }"
                          name="qr_code_2"
                          size="32px"
                        />
                      </div>
                    </template>
                  </q-img>
                </q-card-section>
                <q-card-section class="q-pa-xs">
                  <div class="text-caption text-weight-medium">{{ social.name }}</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <q-separator class="q-my-md" />
      <div class="row items-center justify-between">
        <div class="text-caption text-grey-6">
          © {{ new Date().getFullYear() }} MyLara. Все права защищены.
        </div>
        <div class="text-caption text-grey-6">
          <a
            class="text-primary text-decoration-none"
            href="#"
          >Политика конфиденциальности</a>
          <span class="q-mx-sm">|</span>
          <a
            class="text-primary text-decoration-none"
            href="#"
          >Условия использования</a>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<style scoped>
.hover-card {
  transition: all 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.qr-code {
  border-radius: 4px;
}

.text-decoration-none {
  text-decoration: none;
}

.text-decoration-none:hover {
  text-decoration: underline;
}
</style>
