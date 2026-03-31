<template>
  <div class="haylli-hero-section">
    <div class="content-container">
      <h2>Comienza hoy el crecimiento de tu negocio con <span>Haylli ERP</span></h2>
      <p>
        Optimiza la productividad y rentabilidad de tu negocio de forma intuitiva
        reduciendo errores con la automatización de tus procesos empresariales.
      </p>
    </div>
  </div>
</template>

<style scoped>
.haylli-hero-section {
  text-align: center;
  padding: 80px 20px; 
  width: 100%;
  background: linear-gradient(180deg, #D6EAF8 0%, #FFFFFF 100%);
  font-family: 'Open Sans', sans-serif;
}

.content-container {
  max-width: 900px;
  margin: 0 auto; 
}

.haylli-hero-section h2 {
  color: var(--h-navy); 
  font-size: 42px;
  font-weight: 700;
  line-height: 1.25; 
  margin-bottom: 20px; 
}

.haylli-hero-section h2 span {
  color: var(--h-blue-primary); 
  font-weight: 900;
}

.haylli-hero-section p {
  color: #021C88;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6; 
  
  max-width: 800px; 
  margin: 0 auto;
}

@media (max-width: 768px) {
  .haylli-hero-section {
    padding: 50px 15px; 
  }

  .haylli-hero-section h2 {
    font-size: 30px; 
    line-height: 1.3;
    margin-bottom: 15px;
  }

  .haylli-hero-section p {
    font-size: 16px; 
    line-height: 1.5;
    padding: 0 5px; 
  }
}

@media (max-width: 480px) {
  .haylli-hero-section h2 {
    font-size: 26px;
  }
}
</style>