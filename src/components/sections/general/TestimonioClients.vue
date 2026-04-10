<script setup lang="ts">
const testimonios = [
  {
    empresa: "Estación La Cultura",
    rubro: "Venta de Libros",
    texto: "Implementar Haylli ERP ha sido fundamental para el crecimiento de Estación La Cultura, facilitando nuestra transición obligatoria a la facturación electrónica de manera sencilla y sin complicaciones. La plataforma no solo nos ha brindado un orden excepcional en nuestras cobranzas y cuentas por cobrar, sino que sus estadísticas en tiempo real nos permiten identificar al instante nuestros libros más vendidos y conocer a fondo a nuestros clientes potenciales. Es una herramienta integral que conecta perfectamente nuestro inventario, finanzas y ventas, convirtiéndose en una pieza clave para nuestra gestión diaria.",
    inicial: "E",
    linkYoutube: "https://youtu.be/WXwXCBnfGvQ?si=KB_INp9DPjKZPrbT" 
  },
  {
    empresa: "MegaFit",
    rubro: "Servicios y Atención a Socios",
    texto: "Desde que implementamos el sistema de Haylli, hemos logrado transformar nuestra gestión administrativa, dejando atrás los procesos manuales en Excel por una plataforma mucho más profesional. Lo que más destacamos es la rapidez y eficacia del sistema; nos permite emitir boletas y facturas de manera práctica y sistemática, ahorrándonos tiempo valioso para enfocarnos en la atención a nuestros socios. Además, los módulos de reportes nos ofrecen una visión clara de qué servicios se venden más, mientras que funciones como el cierre de caja son sumamente sencillas de usar. Es una solución altamente recomendada.",
    inicial: "M",
    linkYoutube: "https://youtu.be/MMbziuUUoXY?si=J1fvFbDZxqz-gKZf"
  },
  {
    empresa: "Mecanort",
    rubro: "Mantenimiento y Repuestos",
    texto: "En Mecanort, la transición del sistema manual a Haylli nos ha facilitado enormemente el trabajo, eliminando procesos que antes eran tediosos y nos quitaban mucho tiempo. Ahora contamos con todos nuestros repuestos codificados, lo que agiliza la creación de facturas y cotizaciones, dándonos incluso la flexibilidad de gestionar el negocio tanto desde la oficina como desde casa. Los reportes mensuales son una herramienta fundamental para cumplir con nuestras obligaciones ante SUNAT y para el ingreso de nuevo inventario. Sin duda, es un sistema que ha optimizado nuestra operatividad diaria.",
    inicial: "M",
    linkYoutube: "https://youtu.be/FnJPsXodvjI?si=fC-9iDWwe2X4Lnvz"
  }
]
</script>

<template>
  <section class="testimonios-section">
    <div class="testimonios-container">
      <div class="cabecera">
        <h2>Lo que dicen nuestros clientes</h2>
        <p>Descubre cómo Haylli ERP está impulsando el crecimiento de empresas reales.</p>
      </div>

      <div class="grid-testimonios">
        <div v-for="(testimonio, index) in testimonios" :key="index" class="card-testimonio">
          
          <svg class="icono-comillas" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <div class="contenido-texto">
            <p>"{{ testimonio.texto }}"</p>
          </div>

          <div class="autor-info">
            <div class="avatar">
              {{ testimonio.inicial }}
            </div>
            <div class="datos-empresa">
              <h4>
                <a :href="testimonio.linkYoutube" target="_blank" rel="noopener noreferrer" class="link-empresa">
                  {{ testimonio.empresa }}
                  <svg class="icono-youtube" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15V9l5.2,3L10,15z"/>
                  </svg>
                </a>
              </h4>
              <span>{{ testimonio.rubro }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonios-section {
  background-color: #f8fafc;
  padding: 80px 20px;
  font-family: 'Open Sans', sans-serif;
}

.testimonios-container {
  max-width: 1200px;
  margin: 0 auto;
}

.cabecera {
  text-align: center;
  margin-bottom: 60px;
}

.cabecera h2 {
  color: #063764;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 15px;
}

.cabecera p {
  color: #64748b;
  font-size: 18px;
}

.grid-testimonios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  align-items: stretch;
}

.card-testimonio {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #f1f5f9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;
  overflow: hidden;
}

.card-testimonio:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 112, 187, 0.08);
}

.icono-comillas {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  color: #0070BB;
  opacity: 0.05;
  z-index: -1;
}

.contenido-texto {
  margin-bottom: 30px;
  flex-grow: 1;
}

.contenido-texto p {
  color: #4a5568;
  font-size: 15px;
  line-height: 1.7;
  font-style: italic;
  text-align: justify;
}

.autor-info {
  display: flex;
  align-items: center;
  gap: 15px;
  border-top: 1px solid #e2e8f0;
  padding-top: 20px;
}

.avatar {
  width: 50px;
  height: 50px;
  background-color: #0070BB;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
}

.link-empresa {
  color: #063764;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.link-empresa:hover {
  color: #0070BB;
  text-decoration: underline;
}

.icono-youtube {
  width: 18px;
  height: 18px;
  color: #ff0000;
  opacity: 0.9;
  transition: transform 0.2s ease;
}

.link-empresa:hover .icono-youtube {
  transform: scale(1.1); 
}

.datos-empresa span {
  color: #64748b;
  font-size: 13px;
  font-weight: 600;
  display: block;
}

@media (max-width: 768px) {
  .testimonios-section {
    padding: 60px 15px;
  }

  .cabecera h2 {
    font-size: 28px;
  }
  
  .card-testimonio {
    padding: 30px 20px;
  }
}
</style>