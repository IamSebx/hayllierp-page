<script setup lang="ts">
// 1. IMPORTA TU IMAGEN REAL AQUÍ
// Asumiendo que guardaste la imagen de la captura en assets
import imgLaptop from '../../../assets/laptop-haylli.png'
</script>

<template>
  <section class="hero-facturacion">
    <div class="hero-container">
      
      <div class="hero-content">
        <h1>Olvídate del papel<br><span class="highlight">¡Factura en un clic!</span></h1>
        <p>Ahorra tiempo y dinero emitiendo comprobantes al instante ¡Vende más en menos tiempo!</p>
        <div class="action-buttons">
          <button class="btn-outline-white">Más información</button>
          <button class="btn-primary-white">Demostración Gratis</button>
        </div>
      </div>

      <div class="hero-image">
        <img :src="imgLaptop" alt="Sistema de Facturación Haylli ERP en Laptop" class="laptop-img" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero-facturacion {
  /* Degradado azul vibrante basado en tu nueva captura */
  background: linear-gradient(135deg, #006eb8 0%, #00a3e0 100%);
  color: #ffffff;
  /* Aumentamos padding superior para dar aire si hay navbar fijo */
  padding: 120px 20px 100px; 
  font-family: 'Open Sans', sans-serif;
  overflow: hidden; /* Evita desbordes si la imagen se mueve un poco */
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px; /* Reducimos gap para acercar los elementos */
}

.hero-content {
  flex: 1.2; /* El texto ocupa un 20% más de espacio relativo que la imagen */
  text-align: left;
}

.hero-content h1 {
  font-size: 44px; /* Un pelín más pequeña para mejor balance */
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 20px;
}

.hero-content h1 .highlight {
  display: block;
  /* Podrías añadir un color acento aquí si quieres, ej: #ffb800, sino blanco está bien */
}

.hero-content p {
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.95;
  max-width: 500px; /* Limitamos ancho del párrafo para lectura */
}

.action-buttons {
  display: flex;
  gap: 15px;
}

/* Botón Delineado */
.btn-outline-white {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline-white:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Botón Sólido (para resaltar la Demo) */
.btn-primary-white {
  background-color: #ffffff;
  color: #006eb8;
  border: 2px solid #ffffff;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.btn-primary-white:hover {
  background-color: #f0f9ff;
  transform: translateY(-2px);
}

/* --- CONTENEDOR DE IMAGEN AJUSTADO --- */
.hero-image {
  flex: 1; /* Ocupa el espacio restante */
  display: flex;
  justify-content: flex-end; /* Alinea la laptop a la derecha */
  align-items: center;
  position: relative;
}

/* --- ESTILOS DE LA LAPTOP (MÁS PEQUEÑA) --- */
.laptop-img {
  /* REDUCCIÓN DE TAMAÑO: Antes el placeholder era max 500px, ahora max 420px */
  max-width: 420px; 
  width: 100%; /* Responsivo dentro de su límite */
  height: auto; /* Mantiene proporción */
  display: block;
  
  /* Sombra suave para dar profundidad sobre el azul */
  filter: drop-shadow(0 15px 30px rgba(0,0,0,0.2));
  
  /* Opcional: Pequeña rotación si quieres imitar la perspectiva de la captura original PDF */
  /* transform: rotate(-2deg); */
}

/* --- RESPONSIVO (Móviles y Tablets) --- */
@media (max-width: 900px) {
  .hero-facturacion { padding: 100px 20px 60px; }

  .hero-container {
    flex-direction: column; /* Apilado vertical */
    text-align: center;
    gap: 50px;
  }
  
  .hero-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-content p { max-width: 100%; }
  
  .action-buttons {
    flex-direction: column; /* Botones uno sobre otro en móvil */
    width: 100%;
    max-width: 300px;
    gap: 10px;
  }
  
  .btn-outline-white, .btn-primary-white { width: 100%; }

  .hero-image {
    justify-content: center; /* Centrado en móvil */
    width: 100%;
  }
  
  .laptop-img {
    max-width: 350px; /* Aún más pequeña en celulares para no comerse la pantalla */
  }
}
</style>