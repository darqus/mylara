/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined
    VUE_ROUTER_BASE: string | undefined
  }
}

// Глобальная переменная версии приложения, задаётся через rawDefine в quasar.config.ts
declare const VITE_APP_VERSION: string
