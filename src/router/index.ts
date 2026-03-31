import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlanesView from '../views/PlanesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/planes',
      name: 'planes',
      component: PlanesView
    }
  ],
  // Esto hace que al cambiar de página, el scroll vuelva arriba automáticamente
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router