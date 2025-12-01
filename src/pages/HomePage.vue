<template>
  <div class="home-page">
    <Header />
    <HeroSection />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}
</style>
