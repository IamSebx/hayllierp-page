<template>
  <div class="haylli-hero-section"> <div class="content-container"> <h2>Comienza hoy el crecimiento de tu negocio con <span>Haylli ERP</span></h2>
      <p>
        Optimiza la productividad y rentabilidad de tu negocio de forma intuitiva
        reduciendo errores con la automatización de tus procesos empresariales.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Nuevos estilos para la sección completa con el fondo degradado */
.haylli-hero-section {
  text-align: center;
  padding: 60px 20px; /* Mantenemos el padding existente */
  width: 100%; /* Asegura que la sección ocupe todo el ancho de la pantalla */
  
  /* FONDO DE PANTALLA: Degradado lineal de azul suave a blanco */
  background: linear-gradient(180deg, #D6EAF8 0%, #FFFFFF 100%);
}

/* Estilos movidos al contenedor interno para mantener el contenido centrado */
.content-container {
  max-width: 900px; /* Restricción de ancho máximo original */
  margin: 0 auto; /* Centrado horizontal original */
}

/* Actualizamos los selectores de texto para usar la nueva clase de sección */
.haylli-hero-section h2 {
  color: var(--h-navy);
  font-size: 42px;
  font-weight: 700;
  line-height: 1.3;
}
.haylli-hero-section h2 span {
  color: var(--h-blue-primary);
  font-weight: 900;
}
.haylli-hero-section p {
  color: #021C88;
  font-size: 20px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .haylli-hero-section h2 { font-size: 30px; }
  /* Puedes ajustar el padding de la sección en móvil si lo necesitas */
  .haylli-hero-section { padding: 40px 15px; }
}
</style>