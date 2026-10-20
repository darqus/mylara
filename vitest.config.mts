import { fileURLToPath } from 'node:url'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vue from '@vitejs/plugin-vue'
import type { PluginOption } from 'vite'
import { defineConfig } from 'vitest/config'

const srcPath = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: 'test/vitest/setup-file.ts',
    include: [
      // Matches vitest tests in any subfolder of 'src' or into 'test/vitest/__tests__'
      // Matches all files with extension 'js', 'jsx', 'ts' and 'tsx'
      'src/**/*.vitest.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],

    // Add alias configuration for resolving paths
    alias: { src: srcPath, '@': srcPath },
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
