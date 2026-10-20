// Removed NodeJS.ProcessEnv in app-vite v3 (import.meta.env). See Quasar v3 upgrade guide.

// Глобальная переменная версии приложения, задаётся через rawDefine в quasar.config.ts
declare const VITE_APP_VERSION: string

declare module 'quasar/wrappers' {
  export function boot<T>(callback: T): T
  export function route<T>(callback: T): T
  export function preFetch<T>(callback: T): T
  export function configure<T>(callback: T): T
}
