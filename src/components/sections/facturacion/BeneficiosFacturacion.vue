<script setup lang="ts">
// Agrupamos los beneficios en un arreglo para mantener el código limpio
const beneficios = [
  {
    // Icono de documento con lupa
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="13" r="2"></circle><line x1="11.4" y1="14.4" x2="14" y2="17"></line></svg>`,
    title: 'Envío directo<br>a SUNAT',
    text: 'Todos tus comprobantes se envían automáticamente'
  },
  {
    // Icono de nube con flecha hacia arriba
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line></svg>`,
    title: 'En la nube',
    text: 'Emite facturas, boletas y más desde cualquier lugar, con sólo conexión a internet'
  },
  {
    // Icono de gráficos/estadísticas
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="21" x2="8" y2="10"></line><line x1="12" y1="21" x2="12" y2="14"></line><line x1="16" y1="21" x2="16" y2="6"></line></svg>`,
    title: 'Reportes en<br>tiempo real',
    text: 'Ten mayor control de tus ventas diarias con gráficos y estadísticas'
  },
  {
    // Icono de actualización continua
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>`,
    title: 'Actualización<br>continua',
    text: '¡Te escuchamos! Mejoras constantes en base a tus opiniones'
  }
]
</script>

<template>
  <section class="beneficios-fac-section">
    <div class="beneficios-fac-container">
      <h2 class="section-title">Beneficios de facturar con HAYLLI</h2>
      
      <div class="grid-beneficios">
        <div v-for="(item, index) in beneficios" :key="index" class="card-beneficio">
          
          <div class="icon-wrapper" v-html="item.icon"></div>
          
          <h3 v-html="item.title"></h3>
          
          <p>{{ item.text }}</p>
          
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.beneficios-fac-section {
  padding: 80px 20px;
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}

.beneficios-fac-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: #0070BB; /* Azul principal */
  margin-bottom: 60px;
}

/* Grid de 4 columnas para escritorio */
.grid-beneficios {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* Tarjeta individual */
.card-beneficio {
  background-color: #f8fafc; /* Un fondo gris casi blanco, muy sutil */
  border-radius: 12px;
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alineado a la izquierda según tu diseño */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid transparent;
}

.card-beneficio:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border-color: #e2e8f0;
}

/* Estilos del icono SVG */
.icon-wrapper {
  width: 50px;
  height: 50px;
  color: #0070BB;
  margin-bottom: 25px;
}

/* Forzamos al SVG inyectado a tomar el tamaño de su contenedor */
:deep(.icon-wrapper svg) {
  width: 100%;
  height: 100%;
}

.card-beneficio h3 {
  font-size: 20px;
  font-weight: 800;
  color: #0070BB;
  margin-bottom: 15px;
  line-height: 1.3;
}

.card-beneficio p {
  font-size: 15px;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

/* --- RESPONSIVO --- */
@media (max-width: 1024px) {
  /* En tablets, bajamos a 2 columnas */
  .grid-beneficios {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  /* En celulares, bajamos a 1 sola columna y centramos el contenido un poco más */
  .grid-beneficios {
    grid-template-columns: 1fr;
  }
  
  .card-beneficio {
    align-items: center;
    text-align: center;
  }
}
</style>