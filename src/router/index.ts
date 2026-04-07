import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlanesView from '../views/PlanesView.vue'
import FacturacionView from '../views/FacturacionView.vue'
import InventarioView from '../views/InventarioView.vue'
import PuntoVentaView from '../views/PuntoVentaView.vue'
import TiendaOnlineView from '../views/TiendaOnlineView.vue'
import BlogView from '../views/BlogView.vue'
import PostDetalleView from '../views/PostDetalleView.vue'

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
    },
    {
      path: '/facturacion-electronica',
      name: 'facturacion-electronica',
      component: FacturacionView,
      meta: {
        title: 'Facturación Electrónica - HaylliERP'
      }
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: InventarioView,
      meta: {
        title: 'Inventario - HaylliERP'
      }
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: InventarioView,
      meta: {
        title: 'Inventario - HaylliERP'
      }
    },
    {
      path: '/pos',
      name: 'Punto de Venta',
      component: PuntoVentaView,
      meta: {
        title: 'Punto de Venta (POS) - HaylliERP'
      }
    },
    {
      path: '/tienda-online',
      name: 'Tienda Online',
      component: TiendaOnlineView,
      meta: {
        title: 'Tienda Online - HaylliERP'
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView,
      meta: {
        title: 'Tienda Online - HaylliERP'
      }
    },
    {
    // El :slug indica que es una variable dinámica
    path: '/blog/:slug', 
    name: 'PostDetalle',
    component: PostDetalleView
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