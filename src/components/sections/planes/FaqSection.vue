<script setup lang="ts">
import { ref } from 'vue'

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

const faqs = ref<FAQ[]>([
  {
    question: '¿Puedo cambiar de plan?',
    answer: 'Sí, puedes cambiar de plan al finalizar el mes de contrato. Sólo comunícate con el área de soporte <a href="https://wa.me/51938648117" class="faq-link" target="_blank">wa.me/51938648117</a>',
    isOpen: false
  },
  {
    question: '¿Qué forma de pago aceptan?',
    answer: 'Aceptamos transferencias directas entre bancos, billeteras móviles como YAPE, PLIN. Para los pagos de un <strong>Plan Anual</strong>, se puede pagar el 50% al realizar el contrato y el 50% restante en los 30 días siguientes.',
    isOpen: false 
  },
  {
    question: 'Si deseo sólo un módulo o funcionalidad adicional, ¿Debo cambiar de plan?',
    answer: 'No, no es necesario cambiar de plan, se agregaría solo un monto adicional, sin embargo, es posible que otro plan te pueda brindar más beneficios.',
    isOpen: false
  },
  {
    question: '¿Cómo funciona el Plan de Referidos?',
    answer: 'Si ya eres parte de la familia <strong>HAYLLI</strong>, puedes recomendar el sistema y por cada venta que logre concretarse puedes obtener un <strong>30%</strong> del plan contratado. *Aplican términos y condiciones, para mayor información comunicarse con el área de soporte <a href="https://wa.me/51938648117" class="faq-link" target="_blank">wa.me/51938648117</a>',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<template>
  <div class="haylli-faq-wrapper">
    <div class="haylli-faq-container">
      <h3 class="haylli-faq-title">Preguntas frecuentes</h3>
      
      <div class="haylli-faq-grid">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="faq-item"
        >
          <div class="faq-question" @click="toggleFaq(index)">
            <h4>{{ faq.question }}</h4>
            <div class="faq-icon">
              {{ faq.isOpen ? '-' : '+' }}
            </div>
          </div>
          
          <div class="faq-answer-wrapper" :class="{ 'is-open': faq.isOpen }">
            <div class="faq-answer">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.haylli-faq-wrapper {
  background-color: #f4f5f7; 
  padding: 60px 20px;
  font-family: 'Open Sans', sans-serif;
}

.haylli-faq-container {
  max-width: 1000px;
  margin: 0 auto;
}

.haylli-faq-title {
  color: var(--h-blue-primary, #0070BB);
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 30px;
  text-align: left;
}

.haylli-faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  align-items: start;
}

.faq-item {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  overflow: hidden;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;
}

.faq-question:hover {
  background-color: #f8fafc;
}

.faq-question h4 {
  color: var(--h-navy, #063764);
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  padding-right: 20px;
  line-height: 1.4;
}

.faq-icon {
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--h-blue-primary, #0070BB);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  transition: transform 0.3s ease;
}

.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-out;
}

.faq-answer-wrapper.is-open {
  grid-template-rows: 1fr;
}

.faq-answer {
  overflow: hidden;
}

.faq-answer p {
  margin: 0;
  padding: 0 25px 25px 25px;
  color: #334155;
  font-size: 14px;
  line-height: 1.6;
}

:deep(.faq-link) {
  color: #94a3b8;
  text-decoration: underline;
  font-weight: 700;
  transition: color 0.2s;
}

:deep(.faq-link:hover) {
  color: var(--h-blue-primary, #0070BB);
}

/* --- RESPONSIVE MOBILE --- */
@media (max-width: 768px) {
  .haylli-faq-grid {
    grid-template-columns: 1fr;
  }
  .haylli-faq-wrapper {
    padding: 40px 15px;
  }
}
</style>