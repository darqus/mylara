import path from 'path'

import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

import type { PluginOption } from 'vite'

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
    alias: { src: path.resolve(__dirname, './src') },
  },
  plugins: [
    vue({ template: { transformAssetUrls } }) as unknown as PluginOption,
    quasar({
      sassVariables: 'src/quasar-variables.scss',
    }) as unknown as PluginOption,
    tsconfigPaths() as unknown as PluginOption,
  ],
})
