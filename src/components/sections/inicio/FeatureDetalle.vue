<script setup lang="ts">
const listItems = [
  "Visualiza el listado de comprobantes enviados y no enviados.",
  "Crea oportunidades de venta y genera cotizaciones, guías y notas de venta.",
  "Controla y visualiza tus ingresos y egresos.",
  "Emite y envía automáticamente comprobantes como boletas y facturas en diferentes formatos de impresión.",
  "Designa comisiones para vendedores según su rendimiento."
]
</script>

<template>
  <section class="feature-section">
    <div class="feature-header">
      <h2>¡Descubre cómo nuestro sistema puede transformar la gestión de tu negocio!</h2>
    </div>

    <div class="feature-container">
      <div class="feature-text">
        <h3>Ventas y facturación electrónica</h3>
        <p class="subtitle">Aumenta tu eficiencia y reduce el papeleo</p>
        
        <ul class="check-list">
          <li v-for="(item, index) in listItems" :key="index">
            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="action-buttons">
          <button class="btn-primary-solid">Más información</button>
          <button class="btn-outline">Agendar Demo Gratis</button>
        </div>
      </div>

      <div class="feature-image">
         <div class="placeholder-img">Imagen Gráficos / Dashboard</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-section {
  background-color: #ffffff;
  padding: 60px 20px;
  font-family: 'Open Sans', sans-serif;
}

.feature-header {
  text-align: center;
  margin-bottom: 60px;
}

.feature-header h2 {
  color: #063764;
  font-size: 20px;
  font-weight: 700;
}

.feature-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
}

.feature-text {
  flex: 1;
}

.feature-text h3 {
  color: #063764;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 10px;
}

.feature-text .subtitle {
  color: #64748b;
  font-size: 16px;
  margin-bottom: 30px;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: #334155;
  font-size: 14px;
  line-height: 1.5;
}

.check-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: #0070BB;
}

.action-buttons {
  display: flex;
  gap: 15px;
}

.btn-primary-solid {
  background-color: #0070BB;
  color: #ffffff;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary-solid:hover { background-color: #005a9c; }

.btn-outline {
  background-color: transparent;
  color: #0070BB;
  border: 2px solid #0070BB;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline:hover {
  background-color: #0070BB;
  color: #ffffff;
}

.feature-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.placeholder-img {
  width: 100%;
  height: 400px;
  background-color: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
}

/* Responsivo */
@media (max-width: 900px) {
  .feature-container {
    flex-direction: column;
    gap: 40px;
  }
  .action-buttons {
    flex-direction: column;
  }
}
</style>