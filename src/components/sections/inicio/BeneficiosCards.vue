<script setup lang="ts">
import iconHeadphone from '../../../assets/headphone.svg'
import iconCloud from '../../../assets/clouds.svg'
import iconFile from '../../../assets/file-document.svg'


const cards = [
  {
    icon: iconHeadphone,
    title: 'Soporte personalizado',
    text: 'Recibe acompañamiento, capacitaciones y seguimiento continuo para tu negocio.'
  },
  {
    icon: iconCloud,
    title: 'Sin descargas',
    text: 'Accede desde cualquier dispositivo gracias al almacenamiento en la nube.'
  },
  {
    icon: iconFile,
    title: 'Integración con SUNAT',
    text: 'Actualización y vinculación automática con SUNAT y normativas actualizadas.'
  }
]
</script>

<template>
  <section class="beneficios-section">
    <div class="beneficios-container">
      <div v-for="(card, index) in cards" :key="index" class="beneficio-card">
        
        <div class="icon-wrapper">
          <img :src="card.icon" :alt="card.title" class="card-icon" />
        </div>
        
        <h3>{{ card.title }}</h3>
        <p>{{ card.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.beneficios-section {
  background-color: #ffffff;
  padding: 60px 20px;
  font-family: 'Open Sans', sans-serif;
  margin-top: -60px; 
  position: relative;
  z-index: 10;
}

.beneficios-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.beneficio-card {
  background-color: #f1f8fc;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.beneficio-card:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  margin-bottom: 20px;
}

.card-icon {
  width: 38px; 
  height: 38px;
  object-fit: contain;
  filter: invert(30%) sepia(65%) saturate(2255%) hue-rotate(184deg) brightness(95%) contrast(101%);
  
  transition: transform 0.3s ease;
}

.beneficio-card:hover .card-icon {
  transform: scale(1.1);
}

.beneficio-card h3 {
  color: #063764;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.beneficio-card p {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}
</style>