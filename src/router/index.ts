import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlanesView from '../views/PlanesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView,
      meta: {
        title: 'Inicia Hoy - HaylliERP'
      }
    },
    {
      path: '/planes',
      name: 'planes',
      component: PlanesView,
      meta: {
        title: 'Planes - HaylliERP'
      }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, _from, next) => {
  const pageTitle = to.meta.title as string;
  
  if (pageTitle) {
    document.title = pageTitle;
  } else {
    document.title = 'Haylli ERP';
  }
  
  next();
})

export default router