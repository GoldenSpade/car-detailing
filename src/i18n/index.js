import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import de from './locales/de.js'

const messages = { en, de }

// Get saved locale from localStorage or default to Croatian
const savedLocale = localStorage.getItem('locale') || 'de'

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'de',
  messages,
  legacy: false, // Use Composition API mode
  globalInjection: true
})

export default i18n