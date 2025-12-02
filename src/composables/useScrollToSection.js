/**
 * Composable для плавной прокрутки к секциям с поддержкой BASE_URL
 */
export function useScrollToSection() {
  /**
   * Плавно прокручивает страницу к указанной секции
   * Отступ от хедера контролируется через CSS scroll-margin-top в компонентах секций
   * @param {string} sectionId - ID секции для прокрутки
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  /**
   * Прокручивает к секции с учетом BASE_URL для правильной работы роутинга
   * Если находимся не на главной странице, перенаправляет на главную с хешем
   * @param {string} sectionId - ID секции для прокрутки
   */
  const scrollToSectionWithRouter = (sectionId) => {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
    const currentPath = window.location.pathname.replace(/\/$/, '')

    if (currentPath !== basePath) {
      window.location.href = `${basePath}/#${sectionId}`
      return
    }

    scrollToSection(sectionId)
  }

  return {
    scrollToSection,
    scrollToSectionWithRouter
  }
}
