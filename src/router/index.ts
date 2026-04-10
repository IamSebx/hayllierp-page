import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlanesView from '../views/PlanesView.vue'
import FacturacionView from '../views/FacturacionView.vue'
import InventarioView from '../views/InventarioView.vue'
import PuntoVentaView from '../views/PuntoVentaView.vue'
import TiendaOnlineView from '../views/TiendaOnlineView.vue'
import BlogView from '../views/BlogView.vue'
import PostDetalleView from '../views/PostDetalleView.vue'
import ContactoView from '../views/ContactoView.vue'

const SITE_URL = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '')
const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/haylli.svg`
const DEFAULT_TITLE = 'HaylliERP | Facturacion Electronica SUNAT, POS e Inventario para PYMES'
const DEFAULT_DESCRIPTION =
  'Sistema ERP en la nube para pymes peruanas con facturacion electronica SUNAT, POS e inventario.'

const setMetaByName = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const setMetaByProperty = (property: string, content: string) => {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const setCanonical = (href: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', href)
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView,
      meta: {
        title: 'HaylliERP | Facturacion Electronica SUNAT y Gestion para PYMES',
        description: 'Sistema ERP en la nube para pymes peruanas. Centraliza facturacion electronica SUNAT, punto de venta, inventario, compras y ventas en una sola plataforma.'
      }
    },
    {
      path: '/planes',
      name: 'planes',
      component: PlanesView,
      meta: {
        title: 'Planes y Precios de HaylliERP | ERP para PYMES',
        description: 'Conoce los planes de HaylliERP y elige la opcion ideal para tu negocio. Incluye facturacion electronica, POS, inventario y soporte.'
      }
    },
    {
      path: '/facturacion-electronica',
      name: 'facturacion-electronica',
      component: FacturacionView,
      meta: {
        title: 'Facturacion Electronica SUNAT | HaylliERP',
        description: 'Emite comprobantes electronicos de forma rapida y segura con HaylliERP. Cumple con SUNAT y automatiza tu proceso de facturacion.'
      }
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: InventarioView,
      meta: {
        title: 'Sistema de Inventario en la Nube | HaylliERP',
        description: 'Controla stock, movimientos, compras y alertas de inventario en tiempo real. Evita quiebres y mejora la gestion de tu almacen.'
      }
    },
    {
      path: '/pos',
      name: 'pos',
      component: PuntoVentaView,
      meta: {
        title: 'Punto de Venta (POS) para Negocios | HaylliERP',
        description: 'Vende mas rapido con un sistema POS integrado a inventario y facturacion electronica. Ideal para tiendas, minimarkets y retail.'
      }
    },
    {
      path: '/tienda-online',
      name: 'tienda-online',
      component: TiendaOnlineView,
      meta: {
        title: 'Tienda Online Integrada con ERP | HaylliERP',
        description: 'Impulsa tus ventas por internet con una tienda online conectada a stock, pedidos y facturacion. Gestiona todo desde un solo lugar.'
      }
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView,
      meta: {
        title: 'Contacto y Demo de HaylliERP',
        description: 'Agenda una demo de HaylliERP y recibe asesoria para digitalizar tu negocio con facturacion electronica, POS e inventario.'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: {
        title: 'Blog de Gestion, Ventas y Facturacion | HaylliERP',
        description: 'Aprende sobre gestion empresarial, ventas, facturacion electronica y transformacion digital con los articulos del blog de HaylliERP.'
      }
    },
    {
      path: '/blog/:slug',
      name: 'blog-detalle',
      component: PostDetalleView,
      meta: {
        title: 'Articulo del Blog | HaylliERP',
        description: 'Contenido del blog de HaylliERP sobre gestion empresarial, ventas y facturacion electronica para pymes.'
      }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, _from, next) => {
  const pageTitle = (to.meta.title as string) || DEFAULT_TITLE
  const descriptionContent = (to.meta.description as string) || DEFAULT_DESCRIPTION
  const canonicalUrl = `${SITE_URL}${to.fullPath.split('?')[0]}`
  const ogType = to.name === 'blog-detalle' ? 'article' : 'website'

  document.title = pageTitle
  setMetaByName('description', descriptionContent)
  setMetaByName('twitter:card', 'summary_large_image')
  setMetaByName('twitter:title', pageTitle)
  setMetaByName('twitter:description', descriptionContent)
  setMetaByName('twitter:url', canonicalUrl)
  setMetaByName('twitter:image', DEFAULT_SOCIAL_IMAGE)
  setMetaByProperty('og:title', pageTitle)
  setMetaByProperty('og:description', descriptionContent)
  setMetaByProperty('og:url', canonicalUrl)
  setMetaByProperty('og:type', ogType)
  setMetaByProperty('og:image', DEFAULT_SOCIAL_IMAGE)
  setCanonical(canonicalUrl)

  next()
})

export default router
