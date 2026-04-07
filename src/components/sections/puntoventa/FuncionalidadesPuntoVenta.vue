<script setup lang="ts">
import imgPantallaPos from '../../../assets/pantalla-pos.png'

const funcionalidades = [
  "Interfaz intuitiva: Fácil de usar para ti y tu equipo.",
  "Gestión de descuentos: Configura descuentos rápidamente.",
  "Boletas y Facturas (XML y PDF)",
  "Categorías: Organiza tus productos de manera eficiente.",
  "Apertura y Cierre de cajas",
  "Múltiples Sucursales y usuarios",
  "Facturación electrónica SUNAT y OSE",
  "Generación de reportes y exportación a Excel.",
  "Respaldo de la información en la nube",
  "Envío de comprobantes vía Email a tus clientes y también por WhatsApp.",
  "Controla tus ingresos y egresos."
]
</script>

<template>
  <section class="func-pos-section">
    <div class="func-container">
      <h2 class="section-title">Funcionalidades</h2>
      
      <div class="content-split">
        
        <div class="list-column">
          <ul class="check-list">
            <li v-for="(item, index) in funcionalidades" :key="index">
              <svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="image-column">
          <img :src="imgPantallaPos" alt="Imagen Interfaz POS (Herramientas/Ferretería)" class="pos-image">
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.func-pos-section {
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
  margin-bottom: 60px;
}

.content-split {
  display: flex;
  gap: 60px;
  align-items: center;
}

.list-column {
  flex: 1;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 16px;
  color: #334155;
  line-height: 1.5;
}

.icon-check {
  width: 22px;
  height: 22px;
  color: #0070BB;
  flex-shrink: 0;
  margin-top: 2px;
}

.image-column {
  flex: 1;
  display: flex;
  justify-content: center;
}

.pos-image {
  width: 100%;
  max-width: 550px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08); 
}


@media (max-width: 992px) {
  .content-split {
    flex-direction: column;
    gap: 50px;
  }
  .image-column {
    order: -1;
    width: 100%;
  }
}
</style>