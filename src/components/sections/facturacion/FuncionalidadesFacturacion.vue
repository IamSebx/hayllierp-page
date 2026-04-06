<script setup lang="ts">
const modules = [
  {
    title: "Boletas y Facturas Electrónicas",
    items: [
      "Proceso rápido y fácil, con opción de ajustarlas según tus necesidades.",
      "Actualizado conforme a las últimas normativas de SUNAT.",
      "Almacena y organiza tus boletas y facturas electrónicas en la nube.",
      "Acceso inmediato desde cualquier dispositivo.",
      "Exportar en formato XML, PDF en tamaños personalizados.",
      "Envía automáticamente facturas y boletas por WhatsApp o correo electrónico a tu cliente.",
      "Tipo de cambio actualizado diariamente."
    ]
  },
  {
    title: "Guías de Remisión y de Transportistas",
    items: [
      "Administra eficientemente el traslado de productos.",
      "Cumple con la normativa actual de SUNAT.",
      "Genera guías de remisión y de transportistas de forma ágil.",
      "Registro minucioso de todos los traslados, garantizando la trazabilidad.",
      "Facilita tu verificación de tu GRE escaneando un QR."
    ]
  },
  {
    title: "Notas de venta",
    items: [
      "Documentos no fiscales que permiten registrar ventas de productos y servicios.",
      "Registro rápido y sencillo.",
      "Integrado con el inventario de tu empresa.",
      "Facilita un control detallado para un seguimiento preciso de todas tus ventas."
    ]
  },
  {
    title: "Cotizaciones",
    items: [
      "Crea cotizaciones profesionales y personalizadas para tus clientes.",
      "Genera documentos de venta a partir de una cotización.",
      "Historial completo de todas las cotizaciones enviadas.",
      "Estado de conversión de cotizaciones enviadas a posibles clientes."
    ]
  }
]
</script>

<template>
  <section class="funcionalidades-section">
    <div class="funcionalidades-container">
      <h2 class="section-title">Funcionalidades</h2>
      
      <div class="grid-funcionalidades">
        <div v-for="(module, index) in modules" :key="index" class="module-card">
          <h3 class="module-title">{{ module.title }}</h3>
          <ul class="module-list">
            <li v-for="(item, i) in module.items" :key="i">
              <svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path><circle cx="12" cy="12" r="10"></circle></svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.funcionalidades-section {
  padding: 80px 20px;
  background-color: #f8fafc; /* Fondo un poco gris para separarlo de la sección anterior */
  font-family: 'Open Sans', sans-serif;
}

.funcionalidades-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  color: #063764;
  margin-bottom: 60px;
}

/* Usamos Grid para crear 2 columnas perfectas que se adaptan automáticamente */
.grid-funcionalidades {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 80px; /* gap vertical 50px, horizontal 80px */
}

.module-card {
  display: flex;
  flex-direction: column;
}

.module-title {
  font-size: 22px;
  color: #0070BB;
  font-weight: 700;
  margin-bottom: 25px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 10px;
}

.module-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.module-list li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 15px;
  color: #334155;
  line-height: 1.6;
}

.icon-check {
  width: 20px;
  height: 20px;
  color: #0070BB;
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 900px) {
  .grid-funcionalidades {
    grid-template-columns: 1fr; /* 1 columna en celular */
    gap: 40px;
  }
}
</style>