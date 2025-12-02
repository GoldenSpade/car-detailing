<template>
  <section id="home" class="hero-section">
    <div class="hero-background">
      <div class="hero-overlay"></div>
      <img
        :src="currentImage"
        alt="Premium Car Detailing"
        class="hero-image"
        :key="currentImageIndex"
      />
    </div>

    <div class="hero-content">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="hero-title" data-aos="fade-up">
              {{ $t('hero.title') }}
            </h1>
            <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
              {{ $t('hero.subtitle') }}
            </p>
            <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
              {{ $t('hero.description') }}
            </p>

            <div class="hero-buttons" data-aos="fade-up" data-aos-delay="300">
              <a href="#contact" @click="scrollToContact" class="btn btn-primary-hero">
                {{ $t('hero.ctaPrimary') }}
                <i class="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="#prices" @click="scrollToPrices" class="btn btn-outline-hero">
                {{ $t('hero.ctaSecondary') }}
                <i class="bi bi-tag ms-2"></i>
              </a>
            </div>

            <!-- Stats -->
            <div class="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div class="stat-item">
                <div class="stat-number">5+</div>
                <div class="stat-label">{{ $t('hero.experience') }}</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <div class="stat-number">500+</div>
                <div class="stat-label">{{ $t('hero.satisfaction') }}</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <div class="stat-number">4</div>
                <div class="stat-label">{{ $t('hero.services') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator" data-aos="fade" data-aos-delay="500">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useImagePath } from '@/composables/useImagePath'

const { getImagePath } = useImagePath()

const images = [
  getImagePath('/images/hero/hero-1.jpg'),
  getImagePath('/images/hero/hero-2.jpg'),
  getImagePath('/images/hero/hero-3.jpg'),
  getImagePath('/images/hero/hero-4.jpg')
]

const currentImageIndex = ref(0)
const currentImage = ref(images[0])
let imageInterval = null

const scrollToContact = (e) => {
  e.preventDefault()
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const scrollToPrices = (e) => {
  e.preventDefault()
  const element = document.getElementById('prices')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const changeImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  currentImage.value = images[currentImageIndex.value]
}

onMounted(() => {
  imageInterval = setInterval(changeImage, 5000)
})

onUnmounted(() => {
  if (imageInterval) {
    clearInterval(imageInterval)
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-top: 120px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  animation: zoomIn 20s ease-in-out infinite;
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 80px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(135deg, #fff 0%, #ffd700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.75rem;
  font-weight: 600;
  color: #ffd700;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
}

.hero-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn-primary-hero {
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
}

.btn-primary-hero:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 215, 0, 0.5);
  color: #000;
}

.btn-outline-hero {
  background: transparent;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  border: 2px solid #ffd700;
}

.btn-outline-hero:hover {
  background: rgba(255, 215, 0, 0.1);
  transform: translateY(-3px);
  color: #ffd700;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  max-width: 700px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffd700;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 50px;
  background: rgba(255, 215, 0, 0.3);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.scroll-mouse {
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 215, 0, 0.8);
  border-radius: 20px;
  position: relative;
  animation: bounce 2s infinite;
}

.scroll-wheel {
  width: 4px;
  height: 10px;
  background: #ffd700;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

/* Responsive */
@media (max-width: 991px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .hero-stats {
    gap: 1rem;
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-divider {
    height: 40px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 100px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary-hero,
  .btn-outline-hero {
    width: 100%;
    justify-content: center;
  }

  .hero-stats {
    gap: 1rem;
    padding: 1rem;
  }

  .stat-divider {
    display: none;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .btn-primary-hero,
  .btn-outline-hero {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}
</style>
