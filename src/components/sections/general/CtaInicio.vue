<script setup lang="ts">
</script>

<template>
  <section class="cta-section">
    <div class="cta-container">
      <h2>Comienza a experimentar hoy mismo</h2>
      
      <p class="description">
        Explora las funcionalidades de nuestro ERP en tu negocio y comienza a optimizar tus procesos para maximizar tus ingresos.
      </p>
      
      <p class="price">Desde <strong>S/. 59,00</strong></p>
      
      <div class="action-buttons">
        <router-link to="/planes" class="btn-primary-solid">Más información</router-link>
        
        <a href="#" class="btn-primary-solid">Agendar Demo Gratis</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background-color: #f8fafc; 
  padding: 80px 20px;
  font-family: 'Open Sans', sans-serif;
  text-align: center; 
}

.cta-container {
  max-width: 800px; 
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-container h2 {
  font-size: 32px;
  font-weight: 800;
  color: #063764;
  margin-bottom: 20px;
}

.description {
  font-size: 18px;
  color: #334155;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px; 
}

.price {
  font-size: 20px;
  color: #1e293b;
  margin-bottom: 40px;
}

.price strong {
  font-size: 28px;
  color: #063764;
  font-weight: 800;
}

.action-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn-primary-solid {
  background-color: #0070BB;
  color: #ffffff;
  text-decoration: none; 
  padding: 15px 35px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 4px 10px rgba(0, 112, 187, 0.2);
}

.btn-primary-solid:hover {
  background-color: #005a9c;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 112, 187, 0.3);
}

/* Responsivo para celulares */
@media (max-width: 600px) {
  .cta-container h2 {
    font-size: 26px;
  }
  
  .description {
    font-size: 16px;
  }
  
  .action-buttons {
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }
  
  .btn-primary-solid {
    width: 100%;
  }
}
</style>