import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import de from './locales/de.js'
import ru from './locales/ru.js'
import uk from './locales/uk.js'

const messages = { en, de, ru, uk }

// Get saved locale from localStorage or default to German
const savedLocale = localStorage.getItem('locale') || 'de'

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'de',
  messages,
  legacy: false, // Use Composition API mode
  globalInjection: true
})

export default i18n