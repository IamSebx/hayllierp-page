<script setup lang="ts">
import imgTablet from '../../../assets/tablet-haylli.png'

const manualList = [
  "Procesos manuales lentos de impresión y entrega",
  "Altos costos de almacenamiento y pérdida de documentos",
  "Difícil seguimiento, errores manuales y falsificaciones"
]

const electronicaList = [
  "Emisión de comprobantes en segundos",
  "Menores costos operativos",
  "Mejor control financiero",
  "Reducción de errores",
  "Cumplimiento normativo con SUNAT"
]
</script>

<template>
  <section class="comparativa-section">
    <div class="comparativa-container">
      
      <div class="comparativa-text">
        <div class="column manual">
          <h3>Facturando<br>manualmente</h3>
          <ul>
            <li v-for="(item, index) in manualList" :key="index">
              <svg class="icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="column electronica">
          <h3>Facturando<br>electrónicamente</h3>
          <ul>
            <li v-for="(item, index) in electronicaList" :key="index">
              <svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="comparativa-image">
        <div class="circle-bg">
          <img :src="imgTablet" alt="Sistema de Facturación Haylli ERP en Tablet" class="tablet-img" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.comparativa-section {
  padding: 80px 20px;
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}

.comparativa-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
}

.comparativa-text {
  flex: 1.5;
  display: flex;
  gap: 40px;
}

.column {
  flex: 1;
}

.column h3 {
  font-size: 24px;
  font-weight: 800;
  color: #0070BB;
  margin-bottom: 30px;
  line-height: 1.3;
}

.column ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.column li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: #334155;
  line-height: 1.5;
}

/* Icono negativo (X) grisáceo/rojo suave */
.icon-x {
  width: 20px;
  height: 20px;
  color: #94a3b8;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Icono positivo (Check) azul principal */
.icon-check {
  width: 20px;
  height: 20px;
  color: #0070BB;
  flex-shrink: 0;
  margin-top: 2px;
}

.comparativa-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.circle-bg {
  width: 400px;
  height: 400px;
  background-color: #f1f8fc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-tablet {
  color: #0070BB;
  font-weight: bold;
}

@media (max-width: 900px) {
  .comparativa-container, .comparativa-text {
    flex-direction: column;
  }
  .circle-bg {
    width: 300px;
    height: 300px;
  }
}
</style>