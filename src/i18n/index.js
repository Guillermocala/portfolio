import { createI18n } from 'vue-i18n'
import en from './messages/en.js'
import es from './messages/es.js'

export const supportedLocales = ['en', 'es']
export const defaultLocale = 'en'
export const localeStorageKey = 'portfolio-locale'

export function getSavedLocale() {
  if (typeof localStorage === 'undefined') return defaultLocale
  const storedLocale = localStorage.getItem(localeStorageKey)
  return supportedLocales.includes(storedLocale) ? storedLocale : defaultLocale
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getSavedLocale(),
  fallbackLocale: defaultLocale,
  messages: { en, es },
})

export function setLocale(locale) {
  if (!supportedLocales.includes(locale)) return
  i18n.global.locale.value = locale
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(localeStorageKey, locale)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale
  }
}
