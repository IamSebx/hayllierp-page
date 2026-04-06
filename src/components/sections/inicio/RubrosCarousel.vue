<script setup lang="ts">
import imgContratista from '../../../assets/rubros/Contratista-Haylli.png'
import imgFerreteria from '../../../assets/rubros/Ferreteria-Haylli.png'
import imgMinimarket from '../../../assets/rubros/Minimarkets-Haylli.png'
import imgTecnologia from '../../../assets/rubros/Tecnologia-Haylli.png'
import imgVehiculos from '../../../assets/rubros/Vehiculos-Haylli.png'
import imgFarmacias from '../../../assets/rubros/Farmacias-Haylli.png'

const rubros = [
  {
    category: 'CONTRATISTAS',
    image: imgContratista
  },
  {
    category: 'FERRETERÍAS',
    image: imgFerreteria
  },
  {
    category: 'MINIMARKETS',
    image: imgMinimarket
  },
  {
    category: 'TECNOLOGÍA',
    image: imgTecnologia
  },
  {
    category: 'VEHÍCULOS',
    image: imgVehiculos
  },
  {
    category: 'FARMACIAS',
    image: imgFarmacias
  }
]
</script>

<template>
  <section class="rubros-section">
    <div class="rubros-container">
      <p class="rubros-subtitle">Disponibles para mas de 40 rubros</p>

      <div class="marquee-wrapper">
        <div class="marquee-track">
          
          <div class="marquee-group">
            <div v-for="(rubro, index) in rubros" :key="'g1-' + index" class="rubro-card">
              <div class="card-image-box">
                <img v-if="rubro.image" :src="rubro.image" :alt="rubro.category" class="rubro-img" />
                <div v-else class="placeholder-img">Personaje 3D</div>
              </div>
              <div class="card-badge">{{ rubro.category }}</div>
            </div>
          </div>

          <div class="marquee-group">
            <div v-for="(rubro, index) in rubros" :key="'g2-' + index" class="rubro-card">
              <div class="card-image-box">
                <img v-if="rubro.image" :src="rubro.image" :alt="rubro.category" class="rubro-img" />
                <div v-else class="placeholder-img">Personaje 3D</div>
              </div>
              <div class="card-badge">{{ rubro.category }}</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.rubros-section {
  background-color: #ffffff;
  padding: 80px 20px;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden; 
}

.rubros-container {
  max-width: 1200px;
  margin: 0 auto;
}

.rubros-subtitle {
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 30px;
  text-align: left;
}

.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll-left 30s linear infinite; 
}

.marquee-group {
  display: flex;
  gap: 30px; 
  padding-right: 30px; 
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
}

.rubro-card {
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-image-box {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #eef1f4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px; 
  border-radius: 8px; 
  overflow: hidden; 
}

.rubro-img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  display: block;
}

.placeholder-img {
  color: #94a3b8;
  font-weight: bold;
}

.card-badge {
  background-color: #0070BB;
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  padding: 10px 30px;
  border-radius: 30px;
  display: inline-block;
}

/* --- RESPONSIVO --- */
@media (max-width: 768px) {
  .rubro-card {
    width: 250px;
  }
}
</style>