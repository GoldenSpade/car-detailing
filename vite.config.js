import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import removeConsole from 'vite-plugin-remove-console'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const plugins = [vue(), vueDevTools()]

  // Add console.log removal plugin for build command only
  if (command === 'build') {
    plugins.push(
      removeConsole({
        external: ['error', 'warn'], // leave console.error and console.warn
      })
    )
  }

  return {
    plugins,
    // base: '/car-detailing/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
