<template>
  <div class="legal-page">
    <Header />
    <div class="legal-content">
      <div class="container">
        <h1 class="legal-title">{{ $t('impressum.title') }}</h1>

        <div class="legal-section">
          <h2>{{ $t('impressum.section1.title') }}</h2>
          <p>
            Detailing Studio D4<br />
            Alexandr Diachenko<br />
            Löwenstraße 11<br />
            68259 Mannheim<br />
            Deutschland
          </p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('impressum.section2.title') }}</h2>
          <p>
            <strong>Telefon:</strong> +49 179 5251871<br />
            <strong>E-Mail:</strong>
            <a href="mailto:alexandrdyachenko94@gmail.com">alexandrdyachenko94@gmail.com</a><br />
            <strong>Website:</strong>
            <a href="https://d4-detailing.com" target="_blank" rel="noopener noreferrer"
              >https://d4-detailing.com</a
            >
          </p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('impressum.section3.title') }}</h2>
          <p>{{ $t('impressum.section3.p1') }}</p>
          <p>{{ $t('impressum.section3.p2') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('impressum.section4.title') }}</h2>
          <p>{{ $t('impressum.section4.p1') }}</p>
          <p>{{ $t('impressum.section4.p2') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('impressum.section5.title') }}</h2>
          <p>{{ $t('impressum.section5.text') }}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: #0a0a0a;
}

.legal-content {
  padding: 180px 0 80px;
  min-height: calc(100vh - 200px);
}

.legal-title {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fff 0%, #ffd700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.legal-section {
  margin-bottom: 3rem;
}

.legal-section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 1rem;
}

.legal-section p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.legal-section a {
  color: #ffd700;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.legal-section a:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .legal-content {
    padding: 120px 0 60px;
  }

  .legal-title {
    font-size: 2rem;
  }

  .legal-section h2 {
    font-size: 1.5rem;
  }
}
</style>
