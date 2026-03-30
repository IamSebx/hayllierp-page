<script setup lang="ts">
// Aquí no necesitamos mucha lógica JS porque el menú anidado se controla por CSS,
// lo cual lo hace muchísimo más rápido y fluido en escritorio.
</script>

<template>
  <header class="haylli-header">
    <div class="nav-container">
      
      <div class="nav-logo">
        <div class="logo-placeholder">Haylli</div>
      </div>

      <nav class="nav-menu">
        <ul class="nav-list">
          <li><a href="#" class="nav-link">Inicio</a></li>
          
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
          
          <li><a href="#" class="nav-link active">Planes</a></li>
          <li><a href="#" class="nav-link">Blog</a></li>
          <li><a href="#" class="nav-link">Eventos</a></li>
          <li><a href="#" class="nav-link">Contacto</a></li>
          <li><a href="#" class="nav-link">Agendar demo</a></li>
        </ul>
      </nav>

    </div>
  </header>
</template>

<style scoped>
/* --- CONTENEDOR PRINCIPAL --- */
.haylli-header {
  background-color: var(--h-blue-primary, #0070BB);
  width: 100%;
  position: relative; /* Asegura que los dropdowns se posicionen respecto a este nav */
  z-index: 1000; /* Siempre por encima del resto de la página */
  font-family: 'Open Sans', sans-serif;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

/* --- LOGO --- */
.nav-logo img {
  height: 40px;
  object-fit: contain;
}
/* Placeholder temporal por si no tienes la imagen todavía */
.logo-placeholder {
  color: white;
  font-size: 24px;
  font-weight: 800;
}

/* --- LISTA DE NAVEGACIÓN --- */
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

.nav-link:hover {
  opacity: 0.8;
}

/* Para saber en qué página estamos (en tu caso "Planes") */
.nav-link.active {
  font-weight: 800;
}

.arrow {
  font-size: 10px;
  margin-left: 4px;
  vertical-align: middle;
}

/* --- DROPDOWN NIVEL 1 (Soluciones) --- */
.dropdown {
  position: relative;
  padding: 10px 0; /* Área invisible para que el mouse no pierda el hover */
}

.dropdown-menu {
  position: absolute;
  top: 100%; /* Justo debajo del texto */
  left: 0;
  background-color: var(--h-blue-primary, #0070BB);
  list-style: none;
  padding: 15px 0;
  margin: 0;
  min-width: 220px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  
  /* Oculto por defecto usando opacidad y visibilidad para poder animarlo */
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

/* Al pasar el mouse por el LI padre, mostramos el menú */
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

.drop-link:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Ligero resaltado al pasar el mouse */
}

.d-flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow-right {
  font-size: 10px;
  opacity: 0.8;
}

/* --- DROPDOWN NIVEL 2 (Gestión Empresarial) --- */
.sub-dropdown {
  position: relative;
}

.sub-dropdown-menu {
  position: absolute;
  top: 0;
  left: 100%; /* Se abre hacia la derecha */
  background-color: var(--h-blue-primary, #0070BB);
  list-style: none;
  padding: 15px 0;
  margin: 0;
  min-width: 200px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  
  /* Oculto por defecto */
  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition: all 0.3s ease;
}

/* Al pasar el mouse por el ítem de Gestión Empresarial, mostramos su submenú */
.sub-dropdown:hover .sub-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}
</style>