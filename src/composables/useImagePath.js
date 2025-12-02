/**
 * Composable for working with image paths
 * Takes into account the BASE_URL from the Vite configuration
 */
export function useImagePath() {
  /**
   * Converts a relative image path to an absolute one
   * taking into account the BASE_URL of the project
   * @param {string} path - Relative path to the image
   * @returns {string} - Absolute path with BASE_URL
   */
  const getImagePath = (path) => {
    return import.meta.env.BASE_URL + path.replace(/^\//, '')
  }

  return {
    getImagePath,
  }
}
