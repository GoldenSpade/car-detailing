<template>
  <div class="legal-page">
    <Header />
    <div class="legal-content">
      <div class="container">
        <h1 class="legal-title">{{ $t('datenschutz.title') }}</h1>

        <div class="legal-section">
          <h2>{{ $t('datenschutz.s1.title') }}</h2>
          <p>
            {{ $t('datenschutz.s1.text') }}<br /><br />
            Detailing Studio D4<br />
            Alexandr Diachenko<br />
            Löwenstraße 11<br />
            68259 Mannheim<br />
            Deutschland<br /><br />
            <strong>Telefon:</strong> +49 179 5251871<br />
            <strong>E-Mail:</strong>
            <a href="mailto:alexandrdyachenko94@gmail.com">alexandrdyachenko94@gmail.com</a>
          </p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('datenschutz.s2.title') }}</h2>
          <p>{{ $t('datenschutz.s2.intro') }}</p>
          <ul>
            <li v-for="(item, i) in $tm('datenschutz.s2.items')" :key="i">{{ item }}</li>
          </ul>
          <p>{{ $t('datenschutz.s2.legal') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('datenschutz.s3.title') }}</h2>
          <p>{{ $t('datenschutz.s3.p1') }}</p>
          <p>
            {{ $t('datenschutz.s3.p2') }}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
              >https://policies.google.com/privacy</a
            >.
          </p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('datenschutz.s4.title') }}</h2>
          <p>{{ $t('datenschutz.s4.intro') }}</p>
          <ul>
            <li v-for="(item, i) in $tm('datenschutz.s4.items')" :key="i">{{ item }}</li>
          </ul>
        </div>

        <div class="legal-section">
          <h2>{{ $t('datenschutz.s5.title') }}</h2>
          <p>{{ $t('datenschutz.s5.text') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('datenschutz.s6.title') }}</h2>
          <p>{{ $t('datenschutz.s6.intro') }}</p>
          <ul>
            <li v-for="(item, i) in $tm('datenschutz.s6.items')" :key="i">{{ item }}</li>
          </ul>
          <p>{{ $t('datenschutz.s6.note') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('datenschutz.s7.title') }}</h2>
          <p>{{ $t('datenschutz.s7.text') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('datenschutz.s8.title') }}</h2>
          <p>{{ $t('datenschutz.s8.text', { date: currentDate }) }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('datenschutz.s9.title') }}</h2>
          <p>
            {{ $t('datenschutz.s9.text') }}<br /><br />
            <strong>E-Mail:</strong>
            <a href="mailto:alexandrdyachenko94@gmail.com">alexandrdyachenko94@gmail.com</a><br />
            <strong>Telefon:</strong> +49 179 5251871
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const currentDate = computed(() =>
  new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
)
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

.legal-section ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.legal-section ul li {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.legal-section ul li::before {
  content: '•';
  color: #ffd700;
  font-weight: bold;
  position: absolute;
  left: 0;
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
