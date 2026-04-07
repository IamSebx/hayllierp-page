<script setup lang="ts">
import imgMockupTienda from '../../../assets/mockup-tienda.png'

const funcionalidades = [
  "Acceso directo a la tienda virtual donde los usuarios pueden explorar y comprar productos.",
  "Gestión de todos los pedidos realizados por los clientes, incluyendo detalles de envío, estado del pedido y seguimiento por WhatsApp.",
  "Administración completa de los productos disponibles para la venta en la tienda online, incluyendo añadir, editar y eliminar productos.",
  "Clasificación y etiquetado de productos para facilitar la navegación y búsqueda de los usuarios según categorías específicas.",
  "Configuración y gestión de ofertas especiales, descuentos y promociones para incentivar las compras.",
  "Ajustes generales del sitio web y de la tienda online, que pueden incluir configuraciones de pago, envío, impuestos, idioma, entre otros."
]
</script>

<template>
  <section class="func-tienda-section">
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
          <img :src="imgMockupTienda" alt="Imagen Interfaz Tienda Online (Herramientas/Ferretería)" class="tienda-image">
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.func-tienda-section {
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
  flex: 1.1; 
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 25px; 
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 15px;
  color: #475569;
  line-height: 1.6;
}

.icon-check {
  width: 22px;
  height: 22px;
  color: #0070BB; 
  flex-shrink: 0;
  margin-top: 2px;
}

/* --- COLUMNA IMAGEN --- */
.image-column {
  flex: 1;
  display: flex;
  justify-content: center;
}

.tienda-image {
  width: 100%;
  max-width: 600px;
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