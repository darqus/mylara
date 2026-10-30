import type { PluginOption } from 'vite'

import { fileURLToPath } from 'node:url'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

const srcPath = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom',
    // Unit tests live next to the code they cover (`*.vitest.spec.ts`).
    // The `test/` folder is reserved for cross-cutting suites and helpers.
    include: [
      'src/**/*.vitest.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],

    // Add alias configuration for resolving paths
    alias: { src: srcPath, '@': srcPath },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: ['**/*.d.ts', '**/test/**', '**/*.config.*', '**/.quasar/**'],
    },
  },
  resolve: {
    // tsconfig paths handled via alias
  },
  plugins: [
    vue({ template: { transformAssetUrls } }) as unknown as PluginOption,
    quasar({
      sassVariables: 'src/css/quasar.variables.scss',
    }) as unknown as PluginOption,
  ],
})
