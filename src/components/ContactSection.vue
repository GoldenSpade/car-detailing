<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>
      </div>

      <div class="row g-4">
        <!-- Contact Info -->
        <div class="col-lg-4" data-aos="fade-right">
          <div class="contact-info-wrapper">
            <h3 class="contact-heading">{{ $t('contact.infoTitle') }}</h3>
            <p class="contact-text">{{ $t('contact.infoText') }}</p>

            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-telephone-fill"></i>
                </div>
                <div class="contact-details">
                  <h4>{{ $t('contact.phone.title') }}</h4>
                  <p>
                    <a href="tel:+491795251871">+49 179 5251871</a>
                  </p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-envelope-fill"></i>
                </div>
                <div class="contact-details">
                  <h4>{{ $t('contact.email.title') }}</h4>
                  <p>
                    <a href="mailto:info@d4-detailing.com">info@d4-detailing.com</a>
                  </p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-whatsapp"></i>
                </div>
                <div class="contact-details">
                  <h4>WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/491795251871" target="_blank" rel="noopener noreferrer">+49 179 5251871</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-lg-8" data-aos="fade-left">
          <div class="contact-form-wrapper">
            <h3 class="form-heading">{{ $t('contact.formTitle') }}</h3>
            <p class="form-text">{{ $t('contact.formText') }}</p>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">{{ $t('contact.form.name') }}</label>
                    <input
                      type="text"
                      id="name"
                      v-model="formData.name"
                      class="form-control"
                      :placeholder="$t('contact.form.namePlaceholder')"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="phone">{{ $t('contact.form.phone') }}</label>
                    <input
                      type="tel"
                      id="phone"
                      v-model="formData.phone"
                      class="form-control"
                      :placeholder="$t('contact.form.phonePlaceholder')"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label for="service">{{ $t('contact.form.service') }}</label>
                    <select id="service" v-model="formData.service" class="form-control" required>
                      <option value="">{{ $t('contact.form.selectService') }}</option>
                      <option value="ceramic">{{ $t('services.ceramic.title') }}</option>
                      <option value="complex">{{ $t('services.complex.title') }}</option>
                      <option value="polishing">{{ $t('services.polishing.title') }}</option>
                      <option value="cleaning">{{ $t('services.cleaning.title') }}</option>
                    </select>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <label for="message">{{ $t('contact.form.message') }}</label>
                    <textarea
                      id="message"
                      v-model="formData.message"
                      class="form-control"
                      rows="5"
                      :placeholder="$t('contact.form.messagePlaceholder')"
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-submit" :disabled="isSubmitting">
                    <span v-if="!isSubmitting">
                      {{ $t('contact.form.submit') }}
                      <i class="bi bi-arrow-right ms-2"></i>
                    </span>
                    <span v-else>
                      <i class="bi bi-hourglass-split me-2"></i>
                      {{ $t('contact.form.sending') }}
                    </span>
                  </button>
                </div>
              </div>

              <div
                v-if="submitMessage"
                class="alert"
                :class="submitSuccess ? 'alert-success' : 'alert-error'"
              >
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formData = ref({
  name: '',
  phone: '',
  service: '',
  message: '',
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL

    if (!scriptUrl) {
      console.error('Google Script URL is not configured in .env')
      throw new Error('Configuration error')
    }

    console.log('Submitting form data:', formData.value)
    console.log('Script URL:', scriptUrl)

    // Use JSONP approach to bypass CORS and get real response
    const callbackName = `jsonp_callback_${Date.now()}_${Math.random().toString(36).substring(7)}`

    await new Promise((resolve, reject) => {
      // Create global callback function
      window[callbackName] = function(data) {
        // Clean up script element
        if (script && script.parentNode) {
          document.head.removeChild(script)
        }
        delete window[callbackName]

        console.log('Received response from Google Apps Script:', data)

        if (data.success) {
          submitSuccess.value = true
          submitMessage.value = t('contact.form.successMessage')

          // Clear form
          formData.value = {
            name: '',
            phone: '',
            service: '',
            message: '',
          }

          // Hide message after 5 seconds
          setTimeout(() => {
            submitMessage.value = ''
          }, 5000)

          resolve(data)
        } else {
          reject(new Error(data.message || 'Server error'))
        }
      }

      // Create script element
      const params = new URLSearchParams({
        name: formData.value.name,
        phone: formData.value.phone,
        service: formData.value.service,
        message: formData.value.message,
        callback: callbackName
      })

      const script = document.createElement('script')
      script.src = `${scriptUrl}?${params.toString()}`

      script.onerror = () => {
        if (script && script.parentNode) {
          document.head.removeChild(script)
        }
        delete window[callbackName]
        reject(new Error('Network error'))
      }

      // Request timeout
      setTimeout(() => {
        if (window[callbackName]) {
          if (script && script.parentNode) {
            document.head.removeChild(script)
          }
          delete window[callbackName]
          reject(new Error('Request timeout'))
        }
      }, 10000)

      document.head.appendChild(script)
    })

  } catch (error) {
    console.error('Form submission error:', error)
    submitSuccess.value = false

    // Determine error type for informative message
    if (error.message === 'Request timeout') {
      submitMessage.value = t('contact.form.errorMessage') + ' (Timeout)'
    } else if (error.message === 'Configuration error') {
      submitMessage.value = t('contact.form.errorMessage') + ' (Configuration)'
    } else if (error.message === 'Network error') {
      submitMessage.value = t('contact.form.errorMessage') + ' (Network)'
    } else {
      submitMessage.value = t('contact.form.errorMessage')
    }

    // Hide error message after 7 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 7000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
  padding: 100px 0 80px;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  scroll-margin-top: 80px;
}

.contact-section::before {
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

/* Contact Info */
.contact-info-wrapper {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  height: 100%;
}

.contact-heading {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 1rem;
}

.contact-text {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%);
  border: 2px solid rgba(255, 215, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon i {
  font-size: 1.25rem;
  color: #ffd700;
}

.contact-details h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.25rem;
}

.contact-details p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.6;
}

.contact-details a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: #ffd700;
}

/* Contact Form */
.contact-form-wrapper {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
}

.form-heading {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 1rem;
}

.form-text {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #ffd700;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

select.form-control {
  cursor: pointer;
}

select.form-control option {
  background: #1a1a1a;
  color: #fff;
  padding: 0.5rem;
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1a1a1a;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
  display: inline-flex;
  align-items: center;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 215, 0, 0.5);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Alerts */
.alert {
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  font-weight: 500;
}

.alert-success {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.5);
  color: #86efac;
}

.alert-error {
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.5);
  color: #fca5a5;
}

/* Responsive */
@media (max-width: 991px) {
  .section-title {
    font-size: 2.5rem;
  }

  .contact-info-wrapper,
  .contact-form-wrapper {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 80px 0 60px;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .contact-info-wrapper {
    margin-bottom: 2rem;
  }

  .contact-heading,
  .form-heading {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.75rem;
  }

  .contact-info-wrapper,
  .contact-form-wrapper {
    padding: 1.5rem;
  }

  .btn-submit {
    width: 100%;
    justify-content: center;
  }
}
</style>
