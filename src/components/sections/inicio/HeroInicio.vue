<script setup lang="ts">
import DashboardHaylli from '../../../assets/Dashboard-Haylli.png'
</script>

<template>
  <section class="hero-inicio">
    <div class="hero-container">
      
      <div class="hero-content">
        <h1>Simplifica la gestión de tu empresa y factura en menos de un minuto</h1>
        <p>Optimiza la productividad y rentabilidad de tu negocio de forma intuitiva, reduciendo errores con la automatización de tus procesos empresariales.</p>
      </div>

      <div class="hero-image">
        <img :src="DashboardHaylli" alt="Dashboard Haylli" class="dashboard-img" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero-inicio {
  background: linear-gradient(135deg, #006eb8 0%, #1ab1ef 100%);
  color: #ffffff;
  
  padding: 120px 20px 140px 20px; 
  
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
  position: relative;
}


.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

.hero-content {
  flex: 1;
  max-width: 580px;
  text-align: left; 
}

.hero-content h1 {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0.9;
}

.btn-primary {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #ffffff;
  color: #006eb8;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  max-width: 650px;
}


.dashboard-img {
  max-width: 100%;
  height: auto; 
  object-fit: contain; 
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15));
}

@media (max-width: 900px) {
  .hero-container {
    flex-direction: column; 
    text-align: center;
    gap: 40px;
    padding-bottom: 30px; 
  }
  
  .hero-content {
    text-align: center;
    max-width: 100%;
  }

  .hero-content h1 { font-size: 30px; }
  
  .hero-image {
    max-width: 100%;
  }
}
</style>