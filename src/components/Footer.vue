<template>
  <footer class="footer">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="row g-4 pb-4">
        <!-- Company Info -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-section">
            <div class="footer-brand">
              <i class="bi bi-gem me-2"></i>
              <span class="brand-text">Premium Detailing</span>
            </div>
            <p class="footer-description">
              {{ $t('footer.description') }}
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="social-link" aria-label="WhatsApp">
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6">
          <div class="footer-section">
            <h3 class="footer-heading">{{ $t('footer.quickLinks') }}</h3>
            <ul class="footer-links">
              <li>
                <a href="#home" @click="scrollToSection('home')">
                  <i class="bi bi-chevron-right"></i>
                  {{ $t('header.home') }}
                </a>
              </li>
              <li>
                <a href="#services" @click="scrollToSection('services')">
                  <i class="bi bi-chevron-right"></i>
                  {{ $t('header.services') }}
                </a>
              </li>
              <li>
                <a href="#gallery" @click="scrollToSection('gallery')">
                  <i class="bi bi-chevron-right"></i>
                  {{ $t('header.gallery') }}
                </a>
              </li>
              <li>
                <a href="#contact" @click="scrollToSection('contact')">
                  <i class="bi bi-chevron-right"></i>
                  {{ $t('header.contact') }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Services -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-section">
            <h3 class="footer-heading">{{ $t('footer.ourServices') }}</h3>
            <ul class="footer-links">
              <li>
                <a href="#services" @click="scrollToSection('services')">
                  <i class="bi bi-chevron-right"></i>
                  {{ $t('services.ceramic.title') }}
                </a>
              </li>
              <li>
                <a href="#services" @click="scrollToSection('services')">
                  <i class="bi bi-chevron-right"></i>
                  {{ $t('services.complex.title') }}
                </a>
              </li>
              <li>
                <a href="#services" @click="scrollToSection('services')">
                  <i class="bi bi-chevron-right"></i>
                  {{ $t('services.polishing.title') }}
                </a>
              </li>
              <li>
                <a href="#services" @click="scrollToSection('services')">
                  <i class="bi bi-chevron-right"></i>
                  {{ $t('services.cleaning.title') }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-section">
            <h3 class="footer-heading">{{ $t('footer.contactUs') }}</h3>
            <ul class="footer-contact">
              <li>
                <i class="bi bi-geo-alt-fill"></i>
                <span>
                  {{ $t('contact.address.line1') }}<br />
                  {{ $t('contact.address.line2') }}
                </span>
              </li>
              <li>
                <i class="bi bi-telephone-fill"></i>
                <a href="tel:+49123456789">+49 123 456 789</a>
              </li>
              <li>
                <i class="bi bi-envelope-fill"></i>
                <a href="mailto:info@detailing.de">info@detailing.de</a>
              </li>
              <li>
                <i class="bi bi-clock-fill"></i>
                <span>{{ $t('contact.hours.weekdays') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="copyright">
              &copy; {{ currentYear }} {{ $t('footer.copyright') }}
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-bottom-links">
              <a href="#" class="footer-bottom-link">{{ $t('footer.privacy') }}</a>
              <span class="separator">|</span>
              <a href="#" class="footer-bottom-link">{{ $t('footer.terms') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #0a0a0a 0%, #000 100%);
  color: #fff;
  padding: 60px 0 0;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ffd700, transparent);
}

/* Footer Brand */
.footer-brand {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-brand i {
  color: #ffd700;
  font-size: 1.75rem;
}

.brand-text {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  border-color: #ffd700;
  color: #1a1a1a;
  transform: translateY(-3px);
}

/* Footer Section */
.footer-section {
  margin-bottom: 2rem;
}

.footer-heading {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, #ffd700, transparent);
}

/* Footer Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: #ffd700;
  padding-left: 5px;
}

.footer-links i {
  font-size: 0.75rem;
}

/* Footer Contact */
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
  align-items: flex-start;
}

.footer-contact i {
  color: #ffd700;
  font-size: 1.1rem;
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: #ffd700;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
  margin-top: 2rem;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 0.95rem;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.footer-bottom-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: #ffd700;
}

.separator {
  color: rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 991px) {
  .footer {
    padding: 40px 0 0;
  }

  .footer-section {
    margin-bottom: 2.5rem;
  }
}

@media (max-width: 768px) {
  .footer-brand {
    font-size: 1.25rem;
    justify-content: center;
  }

  .footer-description {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-heading {
    text-align: center;
  }

  .footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-links {
    text-align: center;
  }

  .footer-links a {
    justify-content: center;
  }

  .footer-contact {
    text-align: center;
  }

  .footer-contact li {
    justify-content: center;
  }

  .footer-bottom-links {
    margin-top: 1rem;
  }
}

@media (max-width: 576px) {
  .footer-bottom-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .separator {
    display: none;
  }
}
</style>
