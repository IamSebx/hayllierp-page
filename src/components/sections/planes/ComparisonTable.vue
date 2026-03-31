<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const tableSections = [
  {
    title: 'Límites de la Cuenta',
    rows: [
      { name: 'Comprobantes', values: ['300', '1000', '5000', 'Ilimitados'] },
      { name: 'Usuarios', values: ['3', '3', '7', 'Ilimitados'] },
      { name: 'Almacenes', values: ['1 a 2', '3', '5', 'Ilimitados'] }
    ]
  },
  {
    title: 'Módulos Principales',
    rows: [
      { name: 'Dashboard', values: [true, true, true, true] },
      { name: 'Ventas', values: [true, true, true, true] },
      { name: 'Catálogos', values: [true, true, true, true] },
      { name: 'Caja', values: [true, true, true, true] },
      { name: 'Inventario', values: [true, true, true, true] },
      { name: 'Reportes', values: [true, true, true, true] },
      { name: 'Compras', values: [true, true, true, true] },
      { name: 'Notas de Venta', values: [true, true, true, true] },
      { name: 'Productos', values: [true, true, true, true] }
    ]
  },
  {
    title: 'Módulos Avanzados',
    rows: [
      { name: 'Punto de Venta (POS)', values: [false, true, true, true] },
      { name: 'Guías de remisión y GRE', values: [false, true, true, true] },
      { name: 'SIRE Ventas y Compras', values: [false, false, true, true] },
      { name: 'Contabilidad', values: [false, false, true, true] },
      { name: 'Finanzas', values: [false, false, true, true] },
      { name: 'Tienda Virtual', values: [false, false, true, true] },
      { name: 'Agenda de Servicios', values: [false, false, true, true] },
      { name: 'Fidelización', values: [false, false, true, true] }
    ]
  },
  {
    title: 'Soporte Personalizado',
    rows: [
      { name: 'Ticket por chat', values: [true, true, true, true] },
      { name: 'Llamada', values: [true, true, true, true] },
      { name: 'Videollamada', values: [true, true, true, true] },
      { name: 'Videotutoriales', values: [true, true, true, true] }
    ]
  }
]
</script>

<template>
  <div class="comparison-section">
    
    <div class="haylli-compare-title-box" @click="isOpen = !isOpen">
      <h2>
        Compara nuestros planes
        <svg viewBox="0 0 24 24" :class="{ 'rotated': isOpen }">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </h2>
    </div>

    <Transition name="fade-slide">
      <div class="haylli-clean-wrapper" v-show="isOpen">
        <table class="haylli-clean-table">
          <thead>
            <tr>
              <th style="width: 28%;" class="sticky-col-header"></th>
              <th>
                <div class="header-card card-inicial">
                  <div class="plan-title">Inicial</div>
                  <div class="plan-price-wrap">
                    <div class="p-amount">S/ 59.00</div>
                    <div class="p-sub-price">S/ 602 anual (Ahorra 15%)</div>
                  </div>
                </div>
              </th>
              <th>
                <div class="header-card card-emprendedor">
                  <div class="badge-pop">Más Popular 🔥</div>
                  <div class="plan-title">Emprendedor</div>
                  <div class="plan-price-wrap">
                    <div class="p-amount">S/ 99.00</div>
                    <div class="p-sub-price">S/ 1010 anual (Ahorra 15%)</div>
                  </div>
                </div>
              </th>
              <th>
                <div class="header-card card-ejecutivo">
                  <div class="plan-title">Ejecutivo</div>
                  <div class="plan-price-wrap">
                    <div class="p-amount">S/ 199.00</div>
                    <div class="p-sub-price">S/ 2029 anual (Ahorra 15%)</div>
                  </div>
                </div>
              </th>
              <th>
                <div class="header-card card-corporativo">
                  <div class="plan-title">Corporativo</div>
                  <div class="plan-price-wrap">
                    <div class="p-amount">S/ 250.00</div>
                    <div class="p-sub-price">S/ 2550 anual (Ahorra 15%)</div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          
          <tbody v-for="(section, index) in tableSections" :key="index">
            <tr>
              <td colspan="5" class="cat-title">{{ section.title }}</td>
            </tr>
            <tr v-for="(row, rowIndex) in section.rows" :key="rowIndex">
              <td class="col-feat">{{ row.name }}</td>
              <td v-for="(val, valIndex) in row.values" :key="valIndex" class="center-data">
                
                <svg v-if="val === true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#063764" stroke-width="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="8 12 11 15 16 9"></polyline>
                </svg>
                
                <span v-else-if="val === false" class="icon-dash">-</span>
                
                <span v-else class="text-value">{{ val }}</span>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.comparison-section {
  width: 100%;
  padding: 0 20px; 
}

.haylli-compare-title-box {
  background: #0070BB; 
  padding: 20px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(6, 55, 100, 0.15);
  margin: 0 auto 15px auto; 
  max-width: 800px; 
  cursor: pointer; 
  user-select: none; 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.haylli-compare-title-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(6, 55, 100, 0.25);
}

.haylli-compare-title-box h2 {
  color: #ffffff;
  font-size: 26px;
  font-weight: 800;
  margin: 0;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.haylli-compare-title-box svg {
  width: 26px;
  height: 26px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: bounceDown 2s infinite;
  transition: transform 0.3s ease; 
}

.haylli-compare-title-box svg.rotated {
  transform: rotate(180deg);
  animation: none; 
}

@keyframes bounceDown {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(4px); }
  60% { transform: translateY(2px); }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease-out;
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* --- ESTILOS DE LA TABLA --- */
.haylli-clean-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; 
  padding: 20px 40px; 
  max-width: 1200px; 
  margin: 0 auto;
}

.haylli-clean-table {
  width: 100%;
  min-width: 900px; 
  border-collapse: separate; 
  border-spacing: 0;
}

.haylli-clean-table th, 
.haylli-clean-table td {
  padding: 18px 15px;
  border-bottom: 1px solid var(--h-border, #e2e8f0);
  color: #334155;
  font-size: 14px;
  vertical-align: middle;
}

.haylli-clean-table th {
  border-bottom: none;
  vertical-align: bottom;
  padding-bottom: 30px;
}

.header-card {
  padding: 25px 20px; 
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
  min-height: 90px;
  justify-content: center;
  text-align: center;
}

.card-inicial, .card-ejecutivo, .card-corporativo { background: transparent; }
.card-emprendedor { background: var(--h-blue-primary, #0070BB); }

.card-emprendedor .plan-title, 
.card-emprendedor .p-amount, 
.card-emprendedor .p-sub-price { color: #ffffff !important; }

.badge-pop {
  position: absolute;
  top: -14px;
  background: #1e293b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 12px;
  border-radius: 4px;
  white-space: nowrap;
}

.plan-title { font-size: 16px; font-weight: 800; color: var(--h-blue-primary, #0070BB); letter-spacing: 0.5px; }

.plan-price-wrap { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 6px; 
}

.p-amount { font-size: 28px; font-weight: 800; color: var(--h-navy, #063764); line-height: 1; }
.p-sub-price { font-size: 12px; color: var(--h-blue-primary, #0070BB); }

.col-feat { 
  text-align: left !important; 
  width: 28%; 
  background-color: #ffffff;
}

.cat-title { 
  text-align: left !important; 
  font-size: 22px; 
  font-weight: 700; 
  color: var(--h-navy, #063764); 
  padding-top: 50px !important; 
  padding-bottom: 15px !important; 
  border-bottom: none !important; 
}

.center-data { text-align: center !important; }
.center-data svg { display: block; margin: 0 auto; }

.icon-dash { color: #cbd5e1; font-weight: bold; font-size: 16px; display: inline-block; text-align: center; width: 100%; }
.text-value { font-size: 13px; }

.haylli-clean-table tbody:last-child tr:last-child td { border-bottom: none; }

@media (max-width: 768px) {
  .haylli-compare-title-box { padding: 15px 20px; }
  .haylli-compare-title-box h2 { font-size: 20px; }
  .haylli-compare-title-box svg { width: 20px; height: 20px; }

  .haylli-clean-wrapper {
    padding: 10px 0; 
  }

  .haylli-clean-table th, 
  .haylli-clean-table td {
    padding: 15px 10px; 
  }

  .header-card {
    padding: 15px 10px; 
  }
  
  .p-amount {
    font-size: 22px; 
  }

  .sticky-col-header,
  .col-feat {
    position: sticky;
    left: 0;
    z-index: 10;
    background-color: #ffffff;
  }

  .col-feat {
    box-shadow: 4px 0 8px -4px rgba(0,0,0,0.1);
  }

  .cat-title {
    font-size: 18px !important; 
    padding-top: 30px !important;
  }
}
</style>