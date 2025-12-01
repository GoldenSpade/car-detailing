<template>
  <div class="home-page">
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <GallerySection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'

// Обработка хеша при загрузке страницы
onMounted(() => {
  const hash = window.location.hash
  if (hash) {
    const sectionId = hash.substring(1)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
    }, 100)
  }
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}
</style>
