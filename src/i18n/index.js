import { createI18n } from 'vue-i18n'
import en from './messages/en'
import es from './messages/es'

export const supportedLocales = ['en', 'es']
export const defaultLocale = 'en'
export const localeStorageKey = 'portfolio-locale'

function getInitialLocale() {
  const storedLocale = localStorage.getItem(localeStorageKey)
  return supportedLocales.includes(storedLocale) ? storedLocale : defaultLocale
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: defaultLocale,
  messages: { en, es },
})

export function setLocale(locale) {
  if (!supportedLocales.includes(locale)) return
  i18n.global.locale.value = locale
  localStorage.setItem(localeStorageKey, locale)
  document.documentElement.lang = locale
}
