import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'lenis/dist/lenis.css'
import './assets/styles/global.css'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { initSmoothScroll } from './composables/useSmoothScroll'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
})

// Initialize smooth scroll with Lenis
// Настройки можно изменить:
// duration: 1.2 (чем больше, тем медленнее)
// wheelMultiplier: 1 (чем больше, тем быстрее реакция на колёсико)
initSmoothScroll({
  duration: 1.7,
  wheelMultiplier: 1
})
