/**
 * Composable для настраиваемой плавной прокрутки с использованием Lenis
 */
import Lenis from 'lenis'

let lenisInstance = null

/**
 * Инициализирует Lenis для плавной прокрутки
 * @param {Object} options - Опции конфигурации Lenis
 */
export function initSmoothScroll(options = {}) {
  // Создаём экземпляр Lenis с настройками
  lenisInstance = new Lenis({
    duration: 1.2,           // Длительность прокрутки (чем больше, тем медленнее)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing функция
    orientation: 'vertical', // Вертикальная прокрутка
    gestureOrientation: 'vertical',
    smoothWheel: true,       // Плавная прокрутка колёсиком
    wheelMultiplier: 1,      // Множитель скорости колёсика (можно изменять)
    smoothTouch: false,      // Отключаем для touch устройств (лучше нативная прокрутка)
    touchMultiplier: 2,
    infinite: false,
    ...options
  })

  // Функция для обновления Lenis на каждом кадре
  function raf(time) {
    lenisInstance.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Обработка якорных ссылок
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href^="#"]')
    if (target) {
      e.preventDefault()
      const targetId = target.getAttribute('href').substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        lenisInstance.scrollTo(element, {
          offset: -80, // Отступ от верха (высота header)
          duration: 1.5 // Длительность прокрутки к элементу
        })
      }
    }
  })

  return lenisInstance
}

/**
 * Устанавливает параметры плавности прокрутки
 * @param {Object} options - Опции для настройки
 * @param {number} options.duration - Длительность анимации прокрутки (default: 1.2)
 * @param {number} options.wheelMultiplier - Множитель скорости колёсика (default: 1)
 */
export function setScrollOptions(options) {
  if (lenisInstance) {
    if (options.duration !== undefined) {
      lenisInstance.options.duration = options.duration
    }
    if (options.wheelMultiplier !== undefined) {
      lenisInstance.options.wheelMultiplier = options.wheelMultiplier
    }
  }
}

/**
 * Получает экземпляр Lenis
 * @returns {Lenis} - Экземпляр Lenis
 */
export function getLenisInstance() {
  return lenisInstance
}

/**
 * Уничтожает экземпляр Lenis
 */
export function destroySmoothScroll() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}

export function useSmoothScroll() {
  return {
    initSmoothScroll,
    setScrollOptions,
    getLenisInstance,
    destroySmoothScroll
  }
}
