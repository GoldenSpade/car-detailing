<template>
  <div class="home-page">
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <GallerySection />
    <ContactSection />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}
</style>
