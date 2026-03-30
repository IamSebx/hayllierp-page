<script setup lang="ts">
// Rutas absolutas a la carpeta public. Vite las resolverá automáticamente.
const companies = [
  { id: 1, name: 'Empresa 1', src: '/logos/logo1.png' },
  { id: 2, name: 'Empresa 2', src: '/logos/logo2.png' },
  { id: 3, name: 'Empresa 3', src: '/logos/logo3.png' },
  { id: 4, name: 'Empresa 4', src: '/logos/logo4.png' },
  { id: 5, name: 'Empresa 5', src: '/logos/logo5.png' },
  { id: 6, name: 'Empresa 6', src: '/logos/logo6.png' },
  { id: 7, name: 'Empresa 7', src: '/logos/logo7.png' },
  { id: 8, name: 'Empresa 8', src: '/logos/logo8.png' },
  { id: 9, name: 'Empresa 9', src: '/logos/logo9.png' },
  { id: 10, name: 'Empresa 10', src: '/logos/logo10.png' },
]
</script>
<template>
  <section class="trusted-section">
    <div class="trusted-container">
      
      <div class="trusted-text">
        <p>Empresas que confían en nosotros</p>
      </div>
      
      <div class="carousel-wrapper">
        <div class="carousel-track">
          
          <div class="logo-group">
            <img 
              v-for="company in companies" 
              :key="'first-' + company.id" 
              :src="company.src" 
              :alt="company.name" 
              class="logo-item"
            />
          </div>

          <div class="logo-group" aria-hidden="true">
            <img 
              v-for="company in companies" 
              :key="'second-' + company.id" 
              :src="company.src" 
              :alt="company.name" 
              class="logo-item"
            />
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.trusted-section {
  width: 100%;
  background-color: #ffffff;
  padding: 50px 20px;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden; 
  pointer-events: none; /* NUEVO: Desactiva TODOS los eventos de mouse en la sección completa */
}

.trusted-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;
}

/* --- TEXTO FIJO --- */
.trusted-text {
  flex-shrink: 0;
  width: 180px;
  border-right: 2px solid #e2e8f0;
  padding-right: 25px;
  z-index: 2; 
}

.trusted-text p {
  color: #64748b;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
}

/* --- ENVOLTORIO DEL CARRUSEL --- */
.carousel-wrapper {
  flex-grow: 1;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

/* --- LA PISTA QUE SE MUEVE --- */
.carousel-track {
  display: flex;
  width: fit-content;
  animation: scrollInfinite 30s linear infinite;
  /* ELIMINADO: El hover que pausaba la animación */
}

/* --- GRUPO DE LOGOS --- */
.logo-group {
  display: flex;
  align-items: center;
  gap: 70px; 
  padding-right: 70px; 
}

/* --- ESTILO DE CADA LOGO --- */
.logo-item {
  max-height: 50px;
  max-width: 160px;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.6);
}

/* --- ANIMACIÓN CSS --- */
@keyframes scrollInfinite {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* --- RESPONSIVE MOBILE --- */
@media (max-width: 900px) {
  .trusted-container {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
  
  .trusted-text {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #e2e8f0;
    padding-right: 0;
    padding-bottom: 20px;
  }
  
  .carousel-wrapper {
    width: 100%;
    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  }
}
</style>