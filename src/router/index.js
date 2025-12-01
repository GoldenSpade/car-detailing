import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Car detailing',
      },
    },
  ],
})

// Navigation guard to update document title and check authentication
router.beforeEach((to, from, next) => {
  // Update document title based on route meta
  if (to.meta?.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Car detailing'
  }

  next()
})

export default router
