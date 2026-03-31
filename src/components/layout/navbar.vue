<script setup lang="ts">
import { ref } from 'vue'

import logoBlanco from '../../assets/haylli-blanco.png' 
const isMenuOpen = ref(false)
</script>

<template>
  <header class="haylli-header">
    <div class="nav-container">
      
      <div class="nav-logo">
        <a href="/">
          <img :src="logoBlanco" alt="Haylli ERP Logo" class="logo-img" />
        </a>
      </div>

      <div class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <span :class="{ 'bar-1': isMenuOpen }"></span>
        <span :class="{ 'bar-2': isMenuOpen }"></span>
        <span :class="{ 'bar-3': isMenuOpen }"></span>
      </div>

      <nav class="nav-menu" :class="{ 'open': isMenuOpen }">
        <ul class="nav-list">
          <li><router-link to="/" class="nav-link" active-class="active">Inicio</router-link></li>
          
          <li class="dropdown">
            <a href="#" class="nav-link">Soluciones <span class="arrow">▼</span></a>
            
            <ul class="dropdown-menu">
              <li><a href="#" class="drop-link">Facturación electrónica</a></li>
              
              <li class="sub-dropdown">
                <a href="#" class="drop-link d-flex-between">
                  Gestión empresarial <span class="arrow-right">▶</span>
                </a>
                
                <ul class="sub-dropdown-menu">
                  <li><a href="#" class="drop-link">Inventario</a></li>
                  <li><a href="#" class="drop-link">Guías de remisión</a></li>
                  <li><a href="#" class="drop-link">Compras</a></li>
                  <li><a href="#" class="drop-link">Ventas</a></li>
                  <li><a href="#" class="drop-link">Finanzas</a></li>
                  <li><a href="#" class="drop-link">Contabilidad</a></li>
                </ul>
              </li>
              
              <li><a href="#" class="drop-link">Punto de venta</a></li>
              <li><a href="#" class="drop-link">Tienda online</a></li>
              
              <li class="sub-dropdown">
                <a href="#" class="drop-link d-flex-between">
                  RESELL <span class="arrow-right">▼</span>
                </a>
              </li>
            </ul>
          </li>
          
          <li><router-link to="/planes" class="nav-link" active-class="active">Planes</router-link></li>
          <li><a href="#" class="nav-link">Blog</a></li>
          <li><a href="#" class="nav-link">Eventos</a></li>
          <li><a href="#" class="nav-link">Contacto</a></li>
          <li><a href="#" class="nav-link nav-btn">Agendar demo</a></li>
        </ul>
      </nav>

    </div>
  </header>
</template>

<style scoped>
.haylli-header {
  background-color: var(--h-blue-primary, #0070BB);
  width: 100%;
  
  /* CAMBIO A FIXED */
  position: fixed; 
  top: 0; 
  left: 0; /* Asegura que se pegue al borde izquierdo */
  
  z-index: 9999; /* Lo subimos para que NADA lo tape */
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombrita elegante para separarlo del fondo */
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

/* --- LOGO NUEVO ESTILO --- */
.nav-logo {
  z-index: 1001; 
}
.logo-img {
  height: 40px; /* Ajusta este valor si el logo se ve muy chico o muy grande */
  width: auto;
  object-fit: contain;
  display: block; /* Elimina márgenes extra fantasma debajo de la imagen */
}

/* ... Mantén todo el resto del CSS de tu menú hamburguesa y responsivo que ya tenías ... */

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  cursor: pointer;
  z-index: 1001;
}

.menu-toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: #ffffff;
  transition: all 0.3s ease;
}

/* Animación del botón cuando está abierto (Forma una 'X') */
.bar-1 { transform: translateY(8px) rotate(45deg); }
.bar-2 { opacity: 0; }
.bar-3 { transform: translateY(-8px) rotate(-45deg); }

/* --- LISTA DE NAVEGACIÓN (Escritorio) --- */
.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 25px;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: opacity 0.2s ease;
}

.nav-link:hover { opacity: 0.8; }
.nav-link.active { font-weight: 800; }

.arrow { font-size: 10px; margin-left: 4px; vertical-align: middle; }

/* --- DROPDOWN NIVEL 1 --- */
.dropdown { position: relative; padding: 10px 0; }
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--h-blue-primary, #0070BB);
  list-style: none;
  padding: 15px 0;
  margin: 0;
  min-width: 220px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
}
.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* --- ENLACES DENTRO DEL DROPDOWN --- */
.drop-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  display: block;
  padding: 12px 25px;
  transition: background-color 0.2s;
}
.drop-link:hover { background-color: rgba(255, 255, 255, 0.1); }
.d-flex-between { display: flex; justify-content: space-between; align-items: center; }
.arrow-right { font-size: 10px; opacity: 0.8; }

/* --- DROPDOWN NIVEL 2 --- */
.sub-dropdown { position: relative; }
.sub-dropdown-menu {
  position: absolute;
  top: 0;
  left: 100%;
  background-color: var(--h-blue-primary, #0070BB);
  list-style: none;
  padding: 15px 0;
  margin: 0;
  min-width: 200px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition: all 0.3s ease;
}
.sub-dropdown:hover .sub-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

/* ========================================= */
/* RESPONSIVE (Móviles y Tablets)      */
/* ========================================= */
@media (max-width: 992px) {
  /* Mostrar el botón hamburguesa */
  .menu-toggle { display: flex; }

  /* Ocultar el menú por defecto y prepararlo para desplegarse hacia abajo */
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--h-blue-primary, #0070BB);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    
    /* Efecto acordeón */
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;
  }

  /* Cuando se hace clic en la hamburguesa, el menú se expande */
  .nav-menu.open {
    max-height: 100vh; /* Permite que el menú se despliegue por completo */
    overflow-y: auto;
  }

  /* Cambiar a lista vertical */
  .nav-list {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px 20px 20px;
    gap: 0;
  }

  .nav-link {
    display: block;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* --- ADAPTACIÓN DE LOS DROPDOWNS PARA MÓVIL --- */
  .dropdown { padding: 0; width: 100%; }
  
  .dropdown-menu, .sub-dropdown-menu {
    position: static; 
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    transform: none;
    background-color: rgba(0, 0, 0, 0.05); 
    
    /* Ocultos por defecto tipo acordeón */
    max-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
    transition: max-height 0.3s ease;
  }

  /* Al hacer "tap" en el celular, se despliegan hacia abajo */
  .dropdown:hover .dropdown-menu,
  .sub-dropdown:hover .sub-dropdown-menu {
    max-height: 500px; 
  }

  .drop-link {
    padding: 12px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  /* Ajuste visual para el submenú en móvil */
  .sub-dropdown-menu .drop-link {
    padding-left: 40px; 
  }

  .arrow { float: right; margin-top: 5px; }
  .arrow-right { transform: rotate(90deg); } 
}
</style>