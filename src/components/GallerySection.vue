<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <h2 class="section-title">{{ $t('gallery.title') }}</h2>
        <p class="section-subtitle">{{ $t('gallery.subtitle') }}</p>
      </div>

      <!-- Filter Buttons -->
      <div class="filter-buttons text-center mb-5">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="filter-btn"
          :class="{ active: activeCategory === category }"
        >
          {{ $t(`gallery.categories.${category}`) }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="row g-4">
        <div
          v-for="(image, index) in filteredImages"
          :key="index"
          class="col-lg-4 col-md-6 gallery-item"
          :class="image.category"
        >
          <div class="gallery-card" @click="openLightbox(index)">
            <div class="gallery-image">
              <img :src="image.src" :alt="image.alt" />
              <div class="gallery-overlay">
                <i class="bi bi-zoom-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="lightbox">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click.stop="closeLightbox">
          <i class="bi bi-x-lg"></i>
        </button>
        <button
          v-if="currentImageIndex > 0"
          class="lightbox-prev"
          @click.stop="previousImage"
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        <button
          v-if="currentImageIndex < filteredImages.length - 1"
          class="lightbox-next"
          @click.stop="nextImage"
        >
          <i class="bi bi-chevron-right"></i>
        </button>
        <div class="lightbox-content" @click.stop>
          <img
            :src="filteredImages[currentImageIndex]?.src"
            :alt="filteredImages[currentImageIndex]?.alt"
          />
          <div class="lightbox-counter">
            {{ currentImageIndex + 1 }} / {{ filteredImages.length }}
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useImagePath } from '@/composables/useImagePath'

const { getImagePath } = useImagePath()

const categories = ['all', 'ceramic', 'polishing', 'washing', 'interior']
const activeCategory = ref('all')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const images = [
  // Showcase photos - only for 'all' category
  { src: getImagePath('/images/hero/hero-2.jpg'), alt: 'Luxury Vehicle', category: 'all' },
  { src: getImagePath('/images/hero/hero-3.jpg'), alt: 'Detailed Car', category: 'all' },
  { src: getImagePath('/images/hero/hero-4.jpg'), alt: 'Perfect Finish', category: 'all' },
  { src: getImagePath('/images/hero/hero-5.jpg'), alt: 'Premium Result', category: 'all' },
  { src: getImagePath('/images/hero/hero-6.jpg'), alt: 'Luxury Detail', category: 'all' },
  { src: getImagePath('/images/hero/hero-7.jpg'), alt: 'Showcase Car', category: 'all' },
  { src: getImagePath('/images/hero/hero-8.jpg'), alt: 'Premium Work', category: 'all' },
  { src: getImagePath('/images/hero/hero-9.jpg'), alt: 'Perfect Car', category: 'all' },
  { src: getImagePath('/images/hero/hero-10.jpg'), alt: 'Top Quality', category: 'all' },

  // Ceramic
  { src: getImagePath('/images/gallery/ceramic/ceramic-1.jpg'), alt: 'Premium Ceramic Coating', category: 'ceramic' },
  { src: getImagePath('/images/gallery/ceramic/ceramic-2.jpg'), alt: 'Ceramic Protection', category: 'ceramic' },
  { src: getImagePath('/images/gallery/ceramic/ceramic-3.jpg'), alt: 'Ceramic Finish', category: 'ceramic' },
  { src: getImagePath('/images/gallery/ceramic/ceramic-4.jpg'), alt: 'Ceramic Coating Result', category: 'ceramic' },
  { src: getImagePath('/images/gallery/ceramic/ceramic-5.jpg'), alt: 'Ceramic Coating Process', category: 'ceramic' },
  { src: getImagePath('/images/gallery/ceramic/ceramic-6.jpg'), alt: 'Ceramic Gloss Effect', category: 'ceramic' },
  { src: getImagePath('/images/gallery/ceramic/ceramic-7.jpg'), alt: 'Ceramic Protection Layer', category: 'ceramic' },

  // Polishing
  { src: getImagePath('/images/gallery/polishing/polishing-1.jpg'), alt: 'Professional Polishing', category: 'polishing' },
  { src: getImagePath('/images/gallery/polishing/polishing-2.jpg'), alt: 'High Gloss Polishing', category: 'polishing' },
  { src: getImagePath('/images/gallery/polishing/polishing-3.jpg'), alt: 'Paint Correction', category: 'polishing' },

  // Washing
  { src: getImagePath('/images/gallery/washing/washing-1.jpg'), alt: 'Complete Wash', category: 'washing' },
  { src: getImagePath('/images/gallery/washing/washing-2.jpg'), alt: 'Complex Wash', category: 'washing' },
  { src: getImagePath('/images/gallery/washing/washing-3.jpg'), alt: 'Washing Process', category: 'washing' },
  { src: getImagePath('/images/gallery/washing/washing-4.jpg'), alt: 'Car Washing', category: 'washing' },
  { src: getImagePath('/images/gallery/washing/washing-5.jpg'), alt: 'Premium Wash Service', category: 'washing' },

  // Interior
  { src: getImagePath('/images/gallery/interior/interior-1.jpg'), alt: 'Interior Cleaning', category: 'interior' },
  { src: getImagePath('/images/gallery/interior/interior-2.jpg'), alt: 'Interior Detailing', category: 'interior' },
  { src: getImagePath('/images/gallery/interior/interior-3.jpg'), alt: 'Interior Deep Clean', category: 'interior' }
]

const filteredImages = computed(() => {
  if (activeCategory.value === 'all') {
    return images
  }
  return images.filter((img) => img.category === activeCategory.value)
})

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}
</script>

<style scoped>
.gallery-section {
  padding: 100px 0 80px;
  background: #0a0a0a;
  position: relative;
  scroll-margin-top: 80px;
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

/* Filter Buttons */
.filter-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.filter-btn:hover {
  background: rgba(255, 215, 0, 0.1);
  border-color: rgba(255, 215, 0, 0.5);
  color: #ffd700;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  border-color: #ffd700;
  color: #1a1a1a;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

/* Gallery Grid */
.gallery-item {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  aspect-ratio: 4/3;
  background: #1a1a1a;
}

.gallery-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-overlay i {
  font-size: 3rem;
  color: #ffd700;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.gallery-card:hover .gallery-image img {
  transform: scale(1.1);
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

.gallery-card:hover .gallery-overlay i {
  transform: scale(1);
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
  z-index: 10000;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
  display: block;
}

.lightbox-counter {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: absolute;
  background: rgba(255, 215, 0, 0.2);
  border: 2px solid #ffd700;
  color: #ffd700;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.5rem;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: #ffd700;
  color: #1a1a1a;
  transform: scale(1.1);
}

.lightbox-close {
  top: 2rem;
  right: 2rem;
}

.lightbox-prev {
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10001;
}

.lightbox-prev:hover {
  transform: translateY(-50%) scale(1.1);
}

.lightbox-next {
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10001;
}

.lightbox-next:hover {
  transform: translateY(-50%) scale(1.1);
}

/* Lightbox Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 991px) {
  .section-title {
    font-size: 2.5rem;
  }

  .filter-btn {
    padding: 0.625rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 80px 0 60px;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .filter-buttons {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1.25rem;
    font-size: 0.85rem;
  }

  .lightbox {
    padding: 1rem;
  }

  .lightbox-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }

  .lightbox-prev,
  .lightbox-next {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    z-index: 10002;
  }

  .lightbox-prev {
    left: 0.5rem;
  }

  .lightbox-next {
    right: 0.5rem;
  }

  .lightbox-content {
    max-width: 85vw;
    max-height: 85vh;
  }

  .lightbox-content img {
    max-height: 85vh;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.75rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
