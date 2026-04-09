<script setup lang="ts">
import { useRouter } from 'vue-router' // 1. Importamos el router

// IMPORTA TUS IMÁGENES AQUÍ
import imgVentas from '../../../assets/Dashboard.png'
import imgInventario from '../../../assets/imgInventario.png'
import imgGuias from '../../../assets/GRE.gif'
import imgCompras from '../../../assets/ComprasFinanzas.png'

const router = useRouter() // 2. Instanciamos el router para usarlo en el template

const features = [
  {
    title: "Ventas y facturación electrónica",
    subtitle: "Aumenta tu eficiencia y reduce el papeleo",
    items: [
      "Visualiza el listado de comprobantes enviados y no enviados.",
      "Crea oportunidades de venta y genera cotizaciones, guías y notas de venta.",
      "Controla y visualiza tus ingresos y egresos.",
      "Emite y envía automáticamente comprobantes como boletas y facturas en diferentes formatos de impresión.",
      "Designa comisiones para vendedores según su rendimiento."
    ],
    image: imgVentas
  },
  {
    title: "Inventario",
    subtitle: "¡Optimiza tu inventario y evita inconsistencias!",
    items: [
      "Control de lotes y series.",
      "Crea y visualiza tus almacenes y establecimientos.",
      "Visualiza y genera un reporte de los movimientos.",
      "Genera traslados entre establecimientos.",
      "Gestiona tus devoluciones al detalle.",
      "Reporte Kardex y Reporte Inventario.",
      "Kardex valorizado."
    ],
    image: imgInventario
  },
  {
    title: "Guías de Remisión Electrónica",
    subtitle: "Envía guías de remisión directamente a SUNAT",
    items: [
      "Registra a detalle productos, destinos de envío y llegada para un mejor traslado.",
      "Gestiona tus envíos registrando cantidad, peso y paquetes. ¡Optimiza la logística y asegura entregas precisas!",
      "Generar de factura a guía, o de guía a factura.",
      "Kardex y multi-almacenes.",
      "Generar facturas desde GRE-T."
    ],
    image: imgGuias
  },
  {
    title: "Compras y Finanzas",
    subtitle: "¡Simplifica tus procesos de adquisición y mantén el control!",
    items: [
      "Visualiza el listado de proveedores y listado de activos fijos.",
      "Cotiza a tus proveedores y selecciona el adecuado.",
      "Ten control de tus gastos internos.",
      "Genera ordenes de compra y registra tu factura para proveedores.",
      "Balance de Ingresos y Egresos - M. Pago.",
      "Ingresos y Egresos de Cuenta de bancos.",
      "Controla tus cuentas por cobrar y por pagar.",
      "Monitorea tus ingresos y pagos."
    ],
    image: imgCompras
  }
]
</script>

<template>
  <section class="feature-section">
    <div class="feature-header">
      <h2>¡Descubre cómo nuestro sistema puede transformar la gestión de tu negocio!</h2>
    </div>

    <div class="features-wrapper">
      <div v-for="(feature, index) in features" :key="index" class="feature-row">
        
        <div class="feature-text">
          <h3>{{ feature.title }}</h3>
          <p class="subtitle">{{ feature.subtitle }}</p>
          
          <ul class="check-list">
            <li v-for="(item, itemIndex) in feature.items" :key="itemIndex">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>

          <div class="action-buttons">
            <button class="btn-primary-solid" @click="router.push('/planes')">Más información</button>
            <button class="btn-outline" @click="router.push('/contacto')">Agendar Demo Gratis</button>
          </div>
        </div>

        <div class="feature-image">
          <img :src="feature.image" :alt="feature.title" class="dashboard-img" />
        </div>
        
      </div>
    </div>

  </section>
</template>

<style scoped>
.feature-section {
  background-color: #ffffff;
  padding: 80px 20px;
  font-family: 'Open Sans', sans-serif;
}

.feature-header {
  text-align: center;
  margin-bottom: 80px;
}

.feature-header h2 {
  color: #063764;
  font-size: 24px;
  font-weight: 700;
  max-width: 700px;
  margin: 0 auto;
}

.features-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.feature-row {
  display: flex;
  align-items: center;
  gap: 60px;
}

.feature-row:nth-child(even) {
  flex-direction: row-reverse;
}

.feature-text {
  flex: 1;
}

.feature-text h3 {
  color: #063764;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
}

.feature-text .subtitle {
  color: #64748b;
  font-size: 16px;
  margin-bottom: 30px;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: #334155;
  font-size: 15px;
  line-height: 1.6;
}

.check-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: #0070BB;
  margin-top: 2px;
}

.action-buttons {
  display: flex;
  gap: 15px;
}

.btn-primary-solid {
  background-color: #0070BB;
  color: #ffffff;
  border: none;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary-solid:hover { background-color: #005a9c; }

.btn-outline {
  background-color: transparent;
  color: #0070BB;
  border: 2px solid #0070BB;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline:hover {
  background-color: #0070BB;
  color: #ffffff;
}

.feature-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard-img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
}

@media (max-width: 900px) {
  .feature-section { padding: 50px 20px; }
  
  .features-wrapper {
    gap: 80px; 
  }

  .feature-row,
  .feature-row:nth-child(even) { 
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
  
  .check-list li { text-align: left; }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>