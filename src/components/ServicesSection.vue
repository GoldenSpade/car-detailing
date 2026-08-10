<template>
  <section id="services" class="services-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <h2 class="section-title">{{ $t('services.title') }}</h2>
        <p class="section-subtitle">{{ $t('services.subtitle') }}</p>
      </div>

      <!-- Services Grid -->
      <div class="row g-4">
        <!-- Ceramic Coating -->
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="0">
          <div class="service-card" :class="{ popular: services.ceramic.popular }">
            <div class="service-badge" v-if="services.ceramic.popular">
              <i class="bi bi-star-fill"></i> Premium
            </div>
            <div class="service-image">
              <img :src="services.ceramic.image" :alt="services.ceramic.title" />
              <div class="service-overlay">
                <div class="service-icon">
                  <i :class="services.ceramic.icon"></i>
                </div>
              </div>
            </div>
            <div class="service-content">
              <h3 class="service-title">{{ services.ceramic.title }}</h3>
              <p class="service-description">{{ services.ceramic.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, index) in services.ceramic.features" :key="index">
                  <i class="bi bi-check-circle-fill"></i>
                  {{ feature }}
                </li>
              </ul>
              <div class="service-footer">
                <a href="#contact" class="btn btn-service">
                  {{ $t('services.bookService') }}
                  <i class="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Complex Wash -->
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-card">
            <div class="service-image">
              <img :src="services.complex.image" :alt="services.complex.title" />
              <div class="service-overlay">
                <div class="service-icon">
                  <i :class="services.complex.icon"></i>
                </div>
              </div>
            </div>
            <div class="service-content">
              <h3 class="service-title">{{ services.complex.title }}</h3>
              <p class="service-description">{{ services.complex.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, index) in services.complex.features" :key="index">
                  <i class="bi bi-check-circle-fill"></i>
                  {{ feature }}
                </li>
              </ul>
              <div class="service-footer">
                <a href="#contact" class="btn btn-service">
                  {{ $t('services.bookService') }}
                  <i class="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Polishing -->
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div class="service-card">
            <div class="service-image">
              <img :src="services.polishing.image" :alt="services.polishing.title" />
              <div class="service-overlay">
                <div class="service-icon">
                  <i :class="services.polishing.icon"></i>
                </div>
              </div>
            </div>
            <div class="service-content">
              <h3 class="service-title">{{ services.polishing.title }}</h3>
              <p class="service-description">{{ services.polishing.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, index) in services.polishing.features" :key="index">
                  <i class="bi bi-check-circle-fill"></i>
                  {{ feature }}
                </li>
              </ul>
              <div class="service-footer">
                <a href="#contact" class="btn btn-service">
                  {{ $t('services.bookService') }}
                  <i class="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Interior Cleaning -->
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <div class="service-card">
            <div class="service-image">
              <img :src="services.cleaning.image" :alt="services.cleaning.title" />
              <div class="service-overlay">
                <div class="service-icon">
                  <i :class="services.cleaning.icon"></i>
                </div>
              </div>
            </div>
            <div class="service-content">
              <h3 class="service-title">{{ services.cleaning.title }}</h3>
              <p class="service-description">{{ services.cleaning.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, index) in services.cleaning.features" :key="index">
                  <i class="bi bi-check-circle-fill"></i>
                  {{ feature }}
                </li>
              </ul>
              <div class="service-footer">
                <a href="#contact" class="btn btn-service">
                  {{ $t('services.bookService') }}
                  <i class="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useImagePath } from '@/composables/useImagePath'

const { t } = useI18n()
const { getImagePath } = useImagePath()

const services = computed(() => ({
  ceramic: {
    title: t('services.ceramic.title'),
    description: t('services.ceramic.description'),
    features: [
      t('services.ceramic.features.0'),
      t('services.ceramic.features.1'),
      t('services.ceramic.features.2'),
      t('services.ceramic.features.3'),
      t('services.ceramic.features.4')
    ],
    price: t('services.ceramic.price'),
    popular: true,
    image: getImagePath('/images/services/ceramic-coating.jpg'),
    icon: 'bi-shield-fill-check'
  },
  complex: {
    title: t('services.complex.title'),
    description: t('services.complex.description'),
    features: [
      t('services.complex.features.0'),
      t('services.complex.features.1'),
      t('services.complex.features.2'),
      t('services.complex.features.3'),
      t('services.complex.features.4')
    ],
    price: t('services.complex.price'),
    popular: false,
    image: getImagePath('/images/services/complex-wash.jpg'),
    icon: 'bi-droplet-fill'
  },
  polishing: {
    title: t('services.polishing.title'),
    description: t('services.polishing.description'),
    features: [
      t('services.polishing.features.0'),
      t('services.polishing.features.1'),
      t('services.polishing.features.2'),
      t('services.polishing.features.3'),
      t('services.polishing.features.4')
    ],
    price: t('services.polishing.price'),
    popular: false,
    image: getImagePath('/images/services/polishing.jpg'),
    icon: 'bi-stars'
  },
  cleaning: {
    title: t('services.cleaning.title'),
    description: t('services.cleaning.description'),
    features: [
      t('services.cleaning.features.0'),
      t('services.cleaning.features.1'),
      t('services.cleaning.features.2'),
      t('services.cleaning.features.3'),
      t('services.cleaning.features.4')
    ],
    price: t('services.cleaning.price'),
    popular: false,
    image: getImagePath('/images/services/interior-cleaning.jpg'),
    icon: 'bi-brightness-high-fill'
  }
}))
</script>

<style scoped>
.services-section {
  padding: 100px 0 80px;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  scroll-margin-top: 80px;
}

.services-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ffd700, transparent);
}

/* Section Header */
.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #ffd700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Service Card */
.service-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 215, 0, 0.5);
  box-shadow: 0 20px 60px rgba(255, 215, 0, 0.2);
}

.service-card.popular {
  border-color: #ffd700;
  box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
}

.service-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1a1a1a;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.875rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Service Image */
.service-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 215, 0, 0.2);
  border: 2px solid #ffd700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ffd700;
  transform: scale(0);
  transition: transform 0.4s ease;
}

.service-card:hover .service-icon {
  transform: scale(1);
}

/* Service Content */
.service-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 1rem;
}

.service-description {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex: 1;
}

.service-features li {
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
}

.service-features i {
  color: #ffd700;
  font-size: 1rem;
  flex-shrink: 0;
}

/* Service Footer */
.service-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
}

.btn-service {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1a1a1a;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.btn-service:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
  color: #000;
}

/* Responsive */
@media (max-width: 991px) {
  .section-title {
    font-size: 2.5rem;
  }

  .service-image {
    height: 250px;
  }

  .service-content {
    padding: 1.5rem;
  }

  .service-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 80px 0 60px;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .service-card {
    margin-bottom: 1rem;
  }

  .btn-service {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.75rem;
  }

  .service-image {
    height: 200px;
  }

  .service-content {
    padding: 1.25rem;
  }

  .service-title {
    font-size: 1.25rem;
  }

  .service-description {
    font-size: 0.9rem;
  }

  .service-features li {
    font-size: 0.875rem;
  }
}
</style>
