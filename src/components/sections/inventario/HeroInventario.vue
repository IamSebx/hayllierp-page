<script setup lang="ts">
import imgInventario from '../../../assets/Persona-GestionInventario.png'

</script>

<template>
  <section class="hero-inventario">
    <div class="hero-container">
      
      <div class="hero-content">
        <h1 class="hero-title">Ten el control total<br><span class="text-blue">de tu inventario</span></h1>
        <p class="hero-description">
          Gestiona tus productos de manera eficiente y precisa, desde la recepción hasta la distribución. Integra tu inventario con otros procesos de tu negocio.
        </p>
        <div class="hero-actions">
          <router-link to="/planes" class="btn-primary">Ver planes</router-link>
          <a href="#" class="btn-outline">Agendar Demo Gratis</a>
        </div>
      </div>

      <div class="hero-image-wrapper">
        <img :src="imgInventario" alt="Imagen Inventario (Trabajadora)" class="hero-image">
      </div>

    </div>

    <IntegracionesBar />
  </section>
</template>

<style scoped>
.hero-inventario {
  background-color: #f4f7fb; 
  padding-top: 120px; 
  font-family: 'Open Sans', sans-serif;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 0px;
  display: flex;
  align-items: center; 
  gap: 50px;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.2;
  margin-bottom: 20px;
}

.text-blue {
  color: #0070BB; 
}

.hero-description {
  font-size: 18px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 15px;
}

.btn-primary {
  background-color: #0070BB;
  color: #ffffff;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 112, 187, 0.2);
}

.btn-primary:hover {
  background-color: #005a9c;
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  color: #0070BB;
  border: 2px solid #0070BB;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: #f0f9ff;
}

.hero-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end; 
  align-self: stretch; 
}

.hero-image {
  width: 100%;
  max-width: 450px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1));
  display: block; 
}

@media (max-width: 900px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  .hero-description {
    margin: 0 auto 40px;
  }
  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }
  .hero-image {
    max-width: 350px; 
    margin-top: 20px;
  }
}
</style>