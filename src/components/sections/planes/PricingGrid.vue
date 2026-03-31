<script setup lang="ts">
import { ref } from 'vue'

interface Plan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  featured?: boolean;
  features: string[];
  stats: string;
}

const isAnnual = ref<boolean>(false)

const plans: Plan[] = [
  { 
    name: 'Inicial', 
    monthlyPrice: '59.00', 
    annualPrice: '602.00', 
    features: ['Dashboard', 'Ventas', 'Catálogos', 'Caja', 'Inventario', 'Reportes', 'Compras', 'Notas de Venta ilimitadas', 'Productos ilimitados', 'Videotutoriales'], 
    stats: '300 comprobantes<br>3 usuarios<br>1-2 almacenes' 
  },
  { 
    name: 'Emprendedor', 
    monthlyPrice: '99.00', 
    annualPrice: '1010.00', 
    featured: true, 
    features: ['Dashboard', 'Ventas', 'Catálogos', 'POS', 'Caja', 'Inventario', 'Reportes', 'Compras', 'Guías de remisión ilimitadas', 'Notas de Venta ilimitadas', 'Productos ilimitados', 'Videotutoriales'], 
    stats: '1000 comprobantes<br>3 usuarios<br>3 almacenes' 
  },
  { 
    name: 'Ejecutivo', 
    monthlyPrice: '199.00', 
    annualPrice: '2029.00', 
    features: ['Dashboard', 'Ventas', 'Catálogos', 'POS', 'Caja', 'Inventario', 'Reportes', 'Compras', 'Contabilidad', 'Finanzas', 'Tienda Virtual', 'Agenda', 'Fidelización', 'SIRE', 'Guías de remisión ilimitadas', 'Notas de Venta ilimitadas', 'Productos ilimitados', 'Videotutoriales'], 
    stats: '5000 comprobantes<br>7 usuarios<br>5 almacenes' 
  },
  { 
    name: 'Corporativo', 
    monthlyPrice: '250.00', 
    annualPrice: '2550.00', 
    features: ['Dashboard', 'Ventas', 'Catálogos', 'POS', 'Caja', 'Inventario', 'Reportes', 'Compras', 'Contabilidad', 'Finanzas Avanzadas', 'Tienda Virtual', 'Agenda', 'Fidelización', 'SIRE', 'Guías de remisión ilimitadas', 'Notas de Venta ilimitadas', 'Productos ilimitados', 'Videotutoriales'], 
    stats: '<strong>Comprobantes ilimitados</strong><br><strong>Usuarios ilimitados</strong><br><strong>Almacenes ilimitados</strong>' 
  }
]
</script>

<template>
  <div class="pricing-section">
    
    <div class="toggle-container">
      <div class="toggle-pill" @click="isAnnual = !isAnnual">
        <div class="toggle-slider" :class="{ 'slider-right': isAnnual }"></div>
        
        <div :class="['toggle-option', { active: !isAnnual }]">
          Plan Mensual
        </div>
        
        <div :class="['toggle-option', { active: isAnnual }]">
          Plan Anual <span class="discount-badge">-15%</span>
        </div>
      </div>
    </div>

    <div class="pricing-grid">
      <div v-for="plan in plans" :key="plan.name" :class="['p-card', { featured: plan.featured }]">
        <div v-if="plan.featured" class="badge-popular">Más Popular 🔥</div>
        
        <h3>{{ plan.name }}</h3>
        
        <div class="price-display">
          S/ {{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
        </div>
        
        <div class="sub-price">
          <span v-if="!isAnnual" class="period-text">Mensual</span>
          <div v-else class="anual-container">
            <span class="period-text">Anual</span>
            <span class="resaltado-ahorro">Ahorras 15%</span>
          </div>
        </div>
        
        <p class="recibe-text">Recibe acompañamiento y capacitaciones continuas</p>
        
        <ul class="features-list">
          <li v-for="feat in plan.features" :key="feat">{{ feat }}</li>
        </ul>
        
        <div class="footer-stats" v-html="plan.stats"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing-section {
  padding: 20px 0;
}


.toggle-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.toggle-pill {
  display: flex;
  background-color: #f1f5f9;
  border-radius: 50px;
  padding: 6px;
  position: relative;
  cursor: pointer;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
  width: 380px;
}

.toggle-slider {
  position: absolute;
  top: 6px;
  left: 6px;
  bottom: 6px;
  width: calc(50% - 6px);
  background-color: #4A90E2; 
  border-radius: 50px;
  transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  z-index: 1;
  box-shadow: 0 4px 10px rgba(74, 144, 226, 0.3);
}

.slider-right {
  transform: translateX(100%);
}

.toggle-option {
  flex: 1;
  text-align: center;
  padding: 12px 0;
  font-weight: 700;
  font-size: 15px;
  color: #64748b;
  z-index: 2;
  transition: color 0.3s ease;
  user-select: none;
}

.toggle-option.active {
  color: #ffffff;
}

.discount-badge {
  background-color: #1e293b;
  color: #fff;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 12px;
  margin-left: 6px;
  vertical-align: text-bottom;
}

.pricing-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; padding: 0 10px 40px 10px; }
.p-card { border: 1px solid var(--h-border); border-radius: 20px; padding: 35px 25px; width: 260px; text-align: center; display: flex; flex-direction: column; position: relative; transition: 0.3s; }
.p-card:nth-child(1) { background: var(--bg-card-inicial); }
.p-card:nth-child(3) { background: var(--bg-card-ejecutivo); }
.p-card:nth-child(4) { background: var(--bg-card-corporativo); }
.p-card.featured { background: var(--h-blue-primary); transform: scale(1.05); color: white; border: none; z-index: 5; }
.p-card.featured h3, .p-card.featured .price-display, .p-card.featured .recibe-text, .p-card.featured .features-list li { color: white !important; }
.badge-popular { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); background: var(--h-navy); color: white; padding: 6px 20px; border-radius: 50px; font-weight: bold; white-space: nowrap; }
.price-display { font-size: 34px; font-weight: 800; color: var(--h-navy); margin-top: 15px;}


.sub-price { 
  margin: 5px 0 20px 0; 
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  color: var(--h-blue-primary); 
  font-size: 14px; 
  font-weight: 700; 
}

.p-card.featured .sub-price { color: white; }

.anual-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.period-text {
  display: block;
}

/* Badge de ahorro resaltado */
.resaltado-ahorro {
  background-color: #e0f2fe;
  color: #0369a1; 
  padding: 3px 10px;
  border-radius: 20px;
  font-weight: 800;
  font-size: 11px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.p-card.featured .resaltado-ahorro {
  background-color: #ffffff;
  color: var(--h-blue-primary);
}

.features-list { text-align: left; list-style: none; padding: 0; font-size: 12px; }
.features-list li { margin-bottom: 8px; padding-left: 20px; position: relative; }
.features-list li::before { content: '✔'; position: absolute; left: 0; color: var(--h-blue-primary); }
.p-card.featured .features-list li::before { color: white; }
.footer-stats { border-top: 1px solid rgba(6, 55, 100, 0.1); padding-top: 20px; margin-top: auto; font-size: 13px; }

@media (max-width: 768px) {
  .toggle-pill { width: 100%; max-width: 350px; }
  .p-card.featured { transform: scale(1); margin-top: 20px; }
}
</style>