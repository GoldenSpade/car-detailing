<template>
  <div class="legal-page">
    <Header />
    <div class="legal-content">
      <div class="container">
        <h1 class="legal-title">{{ $t('terms.title') }}</h1>
        <p class="legal-date">{{ $t('terms.lastUpdated') }}: {{ currentDate }}</p>

        <div class="legal-section">
          <h2>{{ $t('terms.intro.title') }}</h2>
          <p>{{ $t('terms.intro.text') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('terms.services.title') }}</h2>
          <p>{{ $t('terms.services.text') }}</p>
          <ul>
            <li v-for="(item, index) in $tm('terms.services.items')" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="legal-section">
          <h2>{{ $t('terms.booking.title') }}</h2>
          <p>{{ $t('terms.booking.text') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('terms.payment.title') }}</h2>
          <p>{{ $t('terms.payment.text') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('terms.cancellation.title') }}</h2>
          <p>{{ $t('terms.cancellation.text') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('terms.liability.title') }}</h2>
          <p>{{ $t('terms.liability.text') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('terms.warranty.title') }}</h2>
          <p>{{ $t('terms.warranty.text') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('terms.changes.title') }}</h2>
          <p>{{ $t('terms.changes.text') }}</p>
        </div>

        <div class="legal-section">
          <h2>{{ $t('terms.contact.title') }}</h2>
          <p>{{ $t('terms.contact.text') }}</p>
          <p>
            <strong>Email:</strong> info@detailing.de<br />
            <strong>{{ $t('terms.contact.phone') }}:</strong> +49 123 456 789
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

const currentDate = computed(() => {
  return new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
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
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #ffd700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.legal-date {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  margin-bottom: 3rem;
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
