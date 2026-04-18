import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ImpressumPage from '@/pages/ImpressumPage.vue'
import DatenschutzPage from '@/pages/DatenschutzPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Premium Detailing',
      },
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImpressumPage,
      meta: {
        title: 'Impressum - D4 Detailing',
      },
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: DatenschutzPage,
      meta: {
        title: 'Datenschutz - D4 Detailing',
      },
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Navigation guard to update document title and check authentication
router.beforeEach((to, _from, next) => {
  // Update document title based on route meta
  if (to.meta?.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Car detailing'
  }

  next()
})

export default router
