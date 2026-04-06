<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: '¿Cuáles son los beneficios de facturar electrónicamente?',
    answer: '<ul class="faq-list"><li>Reducción de costos físicos en papel y almacenamiento</li><li>Cumplimiento con SUNAT</li><li>Ventas más rápidas y con menos errores</li></ul>',
    isOpen: false 
  },
  {
    question: '¿El sistema es sólo para facturación electrónica?',
    answer: 'No, <strong>HAYLLI</strong> es un sistema de gestión completo para el control de su negocio que incluye facturación electrónica.',
    isOpen: false
  },
  {
    question: '¿Puedo facturar electrónicamente si soy una pequeña empresa?',
    answer: 'Nuestro sistema se adapta a empresas de diferentes tamaños, especialmente pequeñas y medianas, así como diferentes rubros.',
    isOpen: false
  },
  {
    question: '¿Realizan cambios a medida?',
    answer: 'Sí, los cambios personalizados son evaluados por nuestro equipo de desarrollo para evaluar su factibilidad. Existe un costo adicional por su implementación.',
    isOpen: false
  },
  {
    question: '¿Cuál es el precio?',
    answer: 'Manejamos diversos planes que se adaptan a las necesidades de su empresa, todos incluyen notas de venta y productos ilimitados, además soporte personalizado y videotutoriales. Más información de cada uno aquí: <a href="/planes" class="faq-link">Ver Planes</a>',
    isOpen: false
  },
  {
    question: '¿Brindan soporte?',
    answer: 'Sí, es gratuito e incluido ilimitadamente en todos los planes a través de mensajes, llamadas o reuniones virtuales. ¡Nuestro equipo está siempre a su disposición! <a href="https://wa.me/51938648117" target="_blank" class="faq-link">wa.me/51938648117</a>',
    isOpen: false
  },
  {
    question: '¿En cuánto tiempo se implementa el sistema?',
    answer: 'Aproximadamente 2 días, depende de la rapidez con la que el usuario envía los datos solicitados.',
    isOpen: false
  },
  {
    question: '¿Cómo ingreso al sistema?',
    answer: '<strong>HAYLLI</strong> es un sistema en la nube, no es necesaria una instalación, sólo con una conexión a internet y los datos de acceso a su usuario. Si necesita ayuda puede contactar a soporte al usuario aquí: <a href="https://wa.me/51938648117" target="_blank" class="faq-link">wa.me/51938648117</a>',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<template>
  <section class="faq-section">
    <div class="faq-container">
      <h2 class="faq-title">Preguntas Frecuentes</h2>
      
      <div class="faq-grid">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="faq-card"
          :class="{ 'is-open': faq.isOpen }"
        >
          <div class="faq-header" @click="toggleFaq(index)">
            <h3>{{ faq.question }}</h3>
            <button class="toggle-btn" :aria-expanded="faq.isOpen">
              <svg v-if="faq.isOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </button>
          </div>
          
          <Transition name="slide">
            <div class="faq-body" v-show="faq.isOpen">
              <div class="faq-content" v-html="faq.answer"></div>
            </div>
          </Transition>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.faq-section {
  background-color: #ffffff;
  padding: 80px 20px;
  font-family: 'Open Sans', sans-serif;
}

.faq-container {
  max-width: 1200px;
  margin: 0 auto;
}

.faq-title {
  font-size: 24px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 40px;
  text-align: left;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 30px;
  align-items: start;
}

.faq-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden; 
}

.faq-card:hover {
  border-color: #cbd5e1;
}

.faq-card.is-open {
  border-color: #b3d4f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.faq-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 15px;
  position: relative;
  z-index: 2; 
  background-color: #ffffff;
}

.faq-header h3 {
  font-size: 15px;
  font-weight: 600;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
  transition: color 0.3s;
}

.faq-card.is-open .faq-header h3 {
  color: #063764;
}

.toggle-btn {
  background: none;
  border: none;
  color: #3b82f6;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.toggle-btn svg {
  width: 100%;
  height: 100%;
}

.faq-body {
  padding: 0 20px 20px 20px; 
  overflow: hidden; 
}

.faq-content {
  font-size: 14px;
  color: #063764;
  line-height: 1.6;
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease-out; 
  max-height: 500px; 
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0; 
  padding-bottom: 0; 
}


:deep(.faq-list) {
  margin: 0;
  padding-left: 20px;
}

:deep(.faq-list li) {
  margin-bottom: 5px;
}

:deep(.faq-link) {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
}

:deep(.faq-link:hover) {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>