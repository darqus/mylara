import { boot } from 'quasar/wrappers' // keep; type resolved via @quasar/app-vite types

import { addJsonLd, buildOrganizationJsonLd } from '@/utils/seo-dom'

// Этот файл загружается при инициализации приложения и добавляет базовые
// структурированные данные организации. Обновление canonical/JSON-LD на
// каждый переход делает router/index.ts через тот же модуль `@/utils/seo-dom`.

export default boot(() => {
  addJsonLd(buildOrganizationJsonLd())
})
