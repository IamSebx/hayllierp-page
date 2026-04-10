# Landing Page HaylliERP

Landing comercial de HaylliERP construida con Vue 3, TypeScript y Vite.

## Stack

- Vue 3 (`script setup`)
- Vue Router
- TypeScript
- Vite

## Requisitos

- Node.js 20+
- npm 10+

## Instalación y uso local

```bash
npm install
npm run dev
```

La app quedará disponible en `http://localhost:5173` (por defecto de Vite).

## Scripts

- `npm run dev`: levanta el entorno de desarrollo.
- `npm run build`: ejecuta chequeo de tipos (`vue-tsc`) y genera build de producción.
- `npm run preview`: sirve localmente el build generado en `dist`.

## Rutas principales

- `/` Inicio
- `/planes` Planes
- `/facturacion-electronica` Facturación
- `/inventario` Inventario
- `/pos` Punto de venta
- `/tienda-online` Tienda online
- `/contacto` Contacto / demo
- `/blog` Listado de artículos
- `/blog/:slug` Detalle de artículo

## Estructura base

- `src/views/`: páginas por ruta.
- `src/components/`: secciones y layout reutilizable.
- `src/composables/`: lógica compartida (ej. `useLeadForm`).
- `src/types/`: tipos TypeScript compartidos (ej. WordPress).
- `src/router/index.ts`: definición de rutas y títulos por página.
