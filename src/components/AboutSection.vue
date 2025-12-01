<template>
  <section id="about" class="about-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <h2 class="section-title">{{ $t('about.title') }}</h2>
        <p class="section-subtitle">{{ $t('about.subtitle') }}</p>
      </div>

      <!-- Benefits Grid -->
      <div class="row g-4 mb-5">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="col-lg-3 col-md-6"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="benefit-card">
            <div class="benefit-icon">
              <i :class="benefit.icon"></i>
            </div>
            <h3 class="benefit-title">{{ benefit.title }}</h3>
            <p class="benefit-description">{{ benefit.description }}</p>
          </div>
        </div>
      </div>

      <!-- About Content -->
      <div class="row align-items-center mt-5">
        <div class="col-lg-6" data-aos="fade-right">
          <div class="about-image">
            <img src="/images/hero/hero-5.jpg" alt="About Us" />
            <div class="experience-badge">
              <div class="badge-number">5+</div>
              <div class="badge-text">{{ $t('about.yearsExperience') }}</div>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="about-content">
            <h3 class="about-heading">{{ $t('about.heading') }}</h3>
            <p class="about-text">{{ $t('about.text1') }}</p>
            <p class="about-text">{{ $t('about.text2') }}</p>

            <div class="about-features">
              <div
                v-for="(feature, index) in aboutFeatures"
                :key="index"
                class="feature-item"
              >
                <i class="bi bi-check-circle-fill"></i>
                <span>{{ feature }}</span>
              </div>
            </div>

            <a href="#contact" class="btn btn-primary-about">
              {{ $t('about.cta') }}
              <i class="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const benefits = computed(() => [
  {
    icon: 'bi bi-shield-check',
    title: t('about.benefits.quality.title'),
    description: t('about.benefits.quality.description')
  },
  {
    icon: 'bi bi-people-fill',
    title: t('about.benefits.professionals.title'),
    description: t('about.benefits.professionals.description')
  },
  {
    icon: 'bi bi-star-fill',
    title: t('about.benefits.materials.title'),
    description: t('about.benefits.materials.description')
  },
  {
    icon: 'bi bi-award-fill',
    title: t('about.benefits.guarantee.title'),
    description: t('about.benefits.guarantee.description')
  }
])

const aboutFeatures = computed(() => [
  t('about.features.0'),
  t('about.features.1'),
  t('about.features.2'),
  t('about.features.3')
])
</script>

<style scoped>
.about-section {
  padding: 180px 0 100px;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.about-section::before {
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

/* Benefits Cards */
.benefit-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.benefit-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 215, 0, 0.5);
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2);
  background: rgba(255, 255, 255, 0.05);
}

.benefit-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%);
  border: 2px solid rgba(255, 215, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
}

.benefit-icon i {
  font-size: 2rem;
  color: #ffd700;
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1);
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 215, 0, 0.2) 100%);
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 0.75rem;
}

.benefit-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
}

/* About Image */
.about-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

.experience-badge {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  padding: 1.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
}

.badge-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a1a;
  text-transform: uppercase;
}

/* About Content */
.about-content {
  padding: 0 2rem;
}

.about-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
}

.about-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.about-features {
  margin: 2rem 0;
  display: grid;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.feature-item i {
  color: #ffd700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.btn-primary-about {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1a1a1a;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
  margin-top: 1rem;
}

.btn-primary-about:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 215, 0, 0.5);
  color: #000;
}

/* Responsive */
@media (max-width: 991px) {
  .section-title {
    font-size: 2.5rem;
  }

  .about-content {
    padding: 2rem 0 0 0;
    margin-top: 2rem;
  }

  .about-heading {
    font-size: 1.75rem;
  }

  .experience-badge {
    bottom: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
  }

  .badge-number {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .benefit-card {
    padding: 1.5rem;
  }

  .benefit-icon {
    width: 60px;
    height: 60px;
  }

  .benefit-icon i {
    font-size: 1.5rem;
  }

  .benefit-title {
    font-size: 1.1rem;
  }

  .about-heading {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.75rem;
  }

  .experience-badge {
    padding: 0.75rem 1rem;
  }

  .badge-number {
    font-size: 1.5rem;
  }

  .badge-text {
    font-size: 0.75rem;
  }
}
</style>
