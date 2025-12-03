<template>
  <header class="header-wrapper">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center py-2">
          <div class="contact-info d-none d-md-flex gap-3">
            <a href="tel:+49123456789" class="text-decoration-none">
              <i class="bi bi-telephone-fill me-2 align-middle"></i>+49 179 5251871
            </a>
            <a href="mailto:info@detailing.de" class="text-decoration-none">
              <i class="bi bi-envelope-fill me-2 align-middle"></i>info@d4-detailing.com
            </a>
          </div>
          <div class="language-switcher">
            <button
              @click="toggleLanguageDropdown"
              class="lang-dropdown-btn"
              :class="{ active: isLanguageDropdownOpen }"
            >
              <i class="bi bi-globe"></i>
              <span>{{ currentLanguage.label }}</span>
              <i class="bi bi-chevron-down"></i>
            </button>
            <div v-if="isLanguageDropdownOpen" class="lang-dropdown">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLanguage(lang.code)"
                class="lang-dropdown-item"
                :class="{ active: currentLocale === lang.code }"
              >
                {{ lang.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark" :class="{ scrolled: isScrolled }">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <i class="bi bi-gem me-2"></i>
          <span class="brand-text">Premium Detailing</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home" @click="scrollToSection('home')">
                {{ $t('header.home') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" @click="scrollToSection('about')">
                {{ $t('header.about') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services" @click="scrollToSection('services')">
                {{ $t('header.services') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gallery" @click="scrollToSection('gallery')">
                {{ $t('header.gallery') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" @click="scrollToSection('contact')">
                {{ $t('header.contact') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-cta" href="#contact" @click="scrollToSection('contact')">
                {{ $t('header.bookNow') }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollToSection } from '@/composables/useScrollToSection'

const { locale } = useI18n()
const { scrollToSectionWithRouter: scrollWithRouter } = useScrollToSection()

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isLanguageDropdownOpen = ref(false)

const languages = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'uk', label: 'UA' }
]

const currentLocale = computed(() => locale.value)

const currentLanguage = computed(() => {
  return languages.find((lang) => lang.code === currentLocale.value) || languages[0]
})

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
  isLanguageDropdownOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (sectionId) => {
  scrollWithRouter(sectionId)
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleClickOutside = (event) => {
  const navbar = event.target.closest('.navbar')
  const langSwitcher = event.target.closest('.language-switcher')

  if (!navbar && isMenuOpen.value) {
    isMenuOpen.value = false
  }

  if (!langSwitcher && isLanguageDropdownOpen.value) {
    isLanguageDropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Top Bar */
.top-bar {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #fff;
  font-size: 0.875rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-info a {
  color: #fff;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #ffd700;
}

/* Language Switcher */
.language-switcher {
  position: relative;
}

.lang-dropdown-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang-dropdown-btn:hover {
  background: rgba(255, 215, 0, 0.2);
  border-color: #ffd700;
}

.lang-dropdown-btn.active {
  background: rgba(255, 215, 0, 0.2);
  border-color: #ffd700;
}

.lang-dropdown-btn i:first-child {
  font-size: 1rem;
}

.lang-dropdown-btn i:last-child {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.lang-dropdown-btn.active i:last-child {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  min-width: 100px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1001;
}

.lang-dropdown-item {
  width: 100%;
  background: transparent;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.875rem;
  text-align: left;
  display: block;
}

.lang-dropdown-item:hover {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
}

.lang-dropdown-item.active {
  background: rgba(255, 215, 0, 0.3);
  color: #ffd700;
}

/* Main Navigation */
.navbar {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 0;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff !important;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.navbar-brand i {
  color: #ffd700;
  font-size: 1.75rem;
}

.navbar-brand:hover {
  transform: translateY(-2px);
}

.brand-text {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-link {
  color: #fff !important;
  padding: 0.5rem 1rem !important;
  margin: 0 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #ffd700;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #ffd700 !important;
}

.nav-link:hover::after {
  width: 80%;
}

.btn-cta {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1a1a1a !important;
  padding: 0.5rem 1.5rem !important;
  border-radius: 25px;
  font-weight: 600;
  margin-left: 0.5rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
}

.navbar-toggler {
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.25);
}

/* Mobile Menu */
@media (max-width: 991px) {
  .navbar-collapse {
    background: rgba(0, 0, 0, 0.98);
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .navbar-nav {
    align-items: stretch;
  }

  .nav-item {
    margin: 0.25rem 0;
  }

  .btn-cta {
    margin: 0.5rem 0 0 0 !important;
    display: block;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .navbar-brand {
    font-size: 1.25rem;
  }

  .navbar-brand i {
    font-size: 1.5rem;
  }
}
</style>