/**
 * Composable для работы с путями к изображениям
 * Учитывает BASE_URL из конфигурации Vite
 */
export function useImagePath() {
  /**
   * Преобразует относительный путь к изображению в абсолютный
   * с учетом BASE_URL проекта
   * @param {string} path - Относительный путь к изображению
   * @returns {string} - Абсолютный путь с BASE_URL
   */
  const getImagePath = (path) => {
    return import.meta.env.BASE_URL + path.replace(/^\//, '')
  }

  return {
    getImagePath,
  }
}
