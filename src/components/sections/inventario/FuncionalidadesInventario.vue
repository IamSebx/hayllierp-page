<script setup lang="ts">
const categorias = [
  {
    titulo: "Gestión de Inventarios",
    icono: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", // Icono de caja 3D
    items: [
      "Asigna lotes y fechas de vencimiento a productos para un seguimiento y control exhaustivo.",
      "Crea múltiples almacenes logísticos sin límite, adaptándose a las necesidades del negocio (recepción, control de calidad, reserva de stock, etc.).",
      "Facilita el registro rápido y sencillo de la mercadería que ingresa a los almacenes, actualizando automáticamente el stock disponible para ventas.",
      "Salidas de inventario de forma automatizada, vinculadas directamente a las ventas realizadas, con la opción de hacer salidas manuales.",
      "Permite realizar traslados automáticos entre almacenes para mantener actualizados los inventarios.",
      "Reporte Valorizado que calcula el valor total del inventario.",
      "Reporte de Kardex para revisar en detalle todos los movimientos de inventario (ingresos, salidas y ajustes).",
      "Reporte de vencimientos de productos por lotes, útil para el control y gestión específica de empresas que manejan lotes de productos."
    ]
  },
  {
    titulo: "Creación y Gestión de Productos",
    icono: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", // Icono de portapapeles
    items: [
      "Crea productos y servicios de manera rápida y sencilla de forma masiva o uno por uno.",
      "Crea equivalencias para un mismo producto con distintas características (por ejemplo: gaseosa por unidad o por paquete).",
      "Permite establecer precios en diferentes monedas como soles, dólares u otra según las necesidades empresariales.",
      "Crea marcas o categorías para agrupar y clasificar productos con características similares, facilitando la búsqueda y seguimiento."
    ]
  }
]
</script>

<template>
  <section class="funcionalidades-inv">
    <div class="func-container">
      <h2 class="section-title">Funcionalidades</h2>
      
      <div class="cards-grid">
        <div v-for="(cat, index) in categorias" :key="index" class="feature-card">
          <div class="card-header">
            <div class="icon-circle">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="cat.icono"></path></svg>
            </div>
            <h3 class="card-title">{{ cat.titulo }}</h3>
          </div>
          
          <ul class="feature-list">
            <li v-for="(item, i) in cat.items" :key="i">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span class="item-text">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.funcionalidades-inv {
  padding: 80px 20px;
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}

.func-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  color: #063764;
  margin-bottom: 50px;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start; 
}

.feature-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 112, 187, 0.08);
  border-color: #b3d4f0;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f1f5f9;
}

.icon-circle {
  width: 50px;
  height: 50px;
  background-color: #f0f9ff;
  color: #0070BB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-circle svg {
  width: 26px;
  height: 26px;
}

.card-title {
  font-size: 22px;
  font-weight: 800;
  color: #0070BB;
  margin: 0;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.check-icon {
  width: 20px;
  height: 20px;
  color: #0070BB;
  flex-shrink: 0;
  margin-top: 2px; 
}

.item-text {
  font-size: 15px;
  color: #475569;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .cards-grid {
    grid-template-columns: 1fr; 
  }
}
</style>