// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers'

// Импорт package.json для получения версии
import packageJson from './package.json'

// Используем прямой доступ к переменным окружения вместо импорта из constants

export default defineConfig((/* ctx */) => ({
  // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
  // preFetch: true,

  // app boot file (/src/boot)
  // --> boot files are part of "main.js"
  // https://v2.quasar.dev/quasar-cli-vite/boot-files
  boot: [ 'seo' ],

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#css
  css: [ 'app.scss' ],

  // https://github.com/quasarframework/quasar/tree/dev/extras
  extras: [
    'material-icons', // optional, you are not bound to it
    'material-icons-outlined',
  ],

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#build
  build: {
    target: {
      browser: [ 'es2022', 'firefox115', 'chrome115', 'safari14' ],
      node: 'node20',
    },

    typescript: {
      strict: true,
      vueShim: true,

      // extendTsConfig (tsConfig) {}
    },

    vueRouterMode: 'history', // available values: 'hash', 'history'
    // vueRouterBase,
    // vueDevtools,
    // vueOptionsAPI: false,

    // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup

    publicPath: '/',

    // analyze: true,
    // env: {},
    rawDefine: { VITE_APP_VERSION: JSON.stringify(packageJson.version) },

    // Настройки для правильной генерации модулей
    viteVuePluginOptions: {
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith('ion-') },
      },
    },

    // ignorePublicFolder: true,
    // minify: false,
    // polyfillModulePreload: true,
    // distDir

    // Консервативная настройка сборки для избежания циркулярных зависимостей
    extendViteConf(viteConf) {
      // Ensure absolute paths for assets
      viteConf.base = '/'

      // Настройки для правильной работы с GitHub Pages
      viteConf.build = viteConf.build ?? {}
      viteConf.build.target = 'es2022'
      viteConf.build.modulePreload = false
      viteConf.build.rollupOptions = viteConf.build.rollupOptions ?? {}
      viteConf.build.rollupOptions.output =
        viteConf.build.rollupOptions.output ?? {}

      // Более простое разделение чанков для избежания проблем с зависимостями
      if (!Array.isArray(viteConf.build.rollupOptions.output)) {
        viteConf.build.rollupOptions.output.manualChunks = (id) => {
          // Выносим node_modules в отдельные чанки только крупные библиотеки
          if (id.includes('node_modules')) {
            // Firebase в отдельный чанк
            if (id.includes('firebase')) {
              return 'firebase-vendor'
            }

            // Все остальные vendor библиотеки в один чанк для избежания циркулярных зависимостей
            return 'vendor'
          }

          // Оставляем пользовательский код в основном чанке
          return undefined
        }
      }

      // Увеличиваем лимит предупреждения
      viteConf.build.chunkSizeWarningLimit = 1000

      // Используем esbuild для более стабильной минификации
      viteConf.build.minify = 'esbuild'

      // Консервативные настройки tree shaking
      viteConf.build.rollupOptions.treeshake = {
        moduleSideEffects: 'no-external',
      }

      // Настройки для предотвращения проблем с hoisting
      viteConf.build.rollupOptions.preserveEntrySignatures = 'strict'

      // Дополнительные настройки для GitHub Pages
      if (!Array.isArray(viteConf.build.rollupOptions.output)) {
        // Настройки для корректного именования JS модулей
        viteConf.build.rollupOptions.output.entryFileNames =
          'assets/[name]-[hash].js'
        viteConf.build.rollupOptions.output.chunkFileNames =
          'assets/[name]-[hash].js'
        viteConf.build.rollupOptions.output.assetFileNames =
          'assets/[name]-[hash][extname]'
      }
    },

    // viteVuePluginOptions: {},

    vitePlugins: [
      [
        'vite-plugin-checker',
        {
          // vueTsc: true,
          eslint: {
            lintCommand:
              'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
            useFlatConfig: true,
          },
        },
        { server: false },
      ],
    ],
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#devserver
  devServer: {
    // https: true,
    open: true, // opens browser window automatically
  },

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#framework
  framework: {
    config: {},

    // iconSet: 'material-icons', // Quasar icon set
    lang: 'ru', // Quasar language pack

    // For special cases outside of where the auto-import strategy can have an impact
    // (like functional components as one of the examples),
    // you can manually specify Quasar components/directives to be available everywhere:
    //
    // components: [],
    // directives: [],

    // Quasar plugins
    plugins: [ 'Notify', 'Meta', 'LocalStorage' ],
  },

  // animations: 'all', // --- includes all animations
  // https://v2.quasar.dev/options/animations
  animations: [],

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#sourcefiles
  // sourceFiles: {
  //   rootComponent: 'src/App.vue',
  //   router: 'src/router/index',
  //   store: 'src/store/index',
  //   pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
  //   pwaServiceWorker: 'src-pwa/custom-service-worker',
  //   pwaManifestFile: 'src-pwa/manifest.json',
  //   electronMain: 'src-electron/electron-main',
  //   electronPreload: 'src-electron/electron-preload'
  //   bexManifestFile: 'src-bex/manifest.json
  // },

  // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
  ssr: {
    prodPort: 3000, // The default port that the production server should use
    // (gets superseded if process.env.PORT is specified at runtime)

    middlewares: [
      'render', // keep this as last one
    ],

    // extendPackageJson (json) {},
    // extendSSRWebserverConf (esbuildConf) {},

    // manualStoreSerialization: true,
    // manualStoreSsrContextInjection: true,
    // manualStoreHydration: true,
    // manualPostHydrationTrigger: true,

    pwa: false,

    // pwaOfflineHtmlFilename: 'offline.html', // do NOT use index.html as name!

    // pwaExtendGenerateSWOptions (cfg) {},
    // pwaExtendInjectManifestOptions (cfg) {}
  },

  // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
  pwa: {
    workboxMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
    // swFilename: 'sw.js',
    // manifestFilename: 'manifest.json',
    // extendManifestJson (json) {},
    // useCredentialsForManifestTag: true,
    // injectPwaMetaTags: false,
    // extendPWACustomSWConf (esbuildConf) {},
    // extendGenerateSWOptions (cfg) {},
    // extendInjectManifestOptions (cfg) {}
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
  /* cordova: {
    // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
  }, */

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
  capacitor: { hideSplashscreen: true },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
  electron: {
    // extendElectronMainConf (esbuildConf) {},
    // extendElectronPreloadConf (esbuildConf) {},

    // extendPackageJson (json) {},

    // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
    preloadScripts: [ 'electron-preload' ],

    // specify the debugging port to use for the Electron app when running in development mode
    inspectPort: 5858,

    bundler: 'packager', // 'packager' or 'builder'

    /* packager: {
      // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
      // OS X / Mac App Store
      // appBundleId: '',
      // appCategoryType: '',
      // osxSign: '',
      // protocol: 'myapp://path',
      // Windows only
      // win32metadata: { ... }
    }, */

    builder: {
      // https://www.electron.build/configuration/configuration

      appId: 'mylara',
    },
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
  bex: {
    // extendBexScriptsConf (esbuildConf) {},
    // extendBexManifestJson (json) {},

    /**
     * The list of extra scripts (js/ts) not in your bex manifest that you want to
     * compile and use in your browser extension. Maybe dynamic use them?
     *
     * Each entry in the list should be a relative filename to /src-bex/
     *
     * @example [ 'my-script.ts', 'sub-folder/my-other-script.js' ]
     */
    extraScripts: [],
  },
}))
