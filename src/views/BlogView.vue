<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { WpPost } from '../types/wordpress'

const articulos = ref<WpPost[]>([])
const cargando = ref(true)
const errorPeticion = ref(false)

const paginaActual = ref(1)
const totalPaginas = ref(1)

const obtenerArticulos = async () => {
  cargando.value = true
  errorPeticion.value = false
  
  try {
    const respuesta = await fetch(`https://hayllierp.creamosmarcati.com/wp-json/wp/v2/posts?_embed&per_page=6&page=${paginaActual.value}`)
    
    if (!respuesta.ok) throw new Error('Error en la red')
    
    const totalPagesHeader = respuesta.headers.get('X-WP-TotalPages')
    if (totalPagesHeader) {
      totalPaginas.value = parseInt(totalPagesHeader, 10)
    }
    
    const data: WpPost[] = await respuesta.json()
    articulos.value = data
    
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
  } catch (error) {
    console.error('Error al cargar el blog:', error)
    errorPeticion.value = true
  } finally {
    cargando.value = false
  }
}

const cargarMasAntiguas = () => {
  if (paginaActual.value < totalPaginas.value) {
    paginaActual.value++
    obtenerArticulos()
  }
}

const cargarMasRecientes = () => {
  if (paginaActual.value > 1) {
    paginaActual.value--
    obtenerArticulos()
  }
}

onMounted(() => {
  obtenerArticulos()
})

const formatearFecha = (fechaString: string) => {
  const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(fechaString).toLocaleDateString('es-ES', opciones)
}
</script>

<template>
  <section class="blog-section">
    <div class="blog-container">
      <h2 class="section-title text-blue">Nuevos artículos del Blog</h2>

      <div v-if="cargando" class="status-message loading">
        <div class="spinner"></div> Cargando artículos...
      </div>
      
      <div v-else-if="errorPeticion" class="status-message error">
        Ocurrió un problema al cargar los artículos. Por favor, intenta de nuevo más tarde.
      </div>

      <div v-else class="blog-grid">
        <article v-for="post in articulos" :key="post.id" class="blog-card">
          <div class="card-image">
            <img 
              v-if="post._embedded && post._embedded['wp:featuredmedia']" 
              :src="post._embedded['wp:featuredmedia'][0].source_url" 
              :alt="post.title.rendered"
            >
            <div v-else class="img-placeholder">Sin imagen</div>
          </div>
          <div class="card-content">
            <h3 class="card-title" v-html="post.title.rendered"></h3>
            <p class="card-date">{{ formatearFecha(post.date) }}</p>
            <div class="card-excerpt" v-html="post.excerpt.rendered"></div>
            <router-link :to="`/blog/${post.slug}`" class="read-more">leer más</router-link>
          </div>
        </article>
      </div>

      <div class="pagination-container" v-if="totalPaginas > 1 && !cargando">
        <button 
          class="pagination-link" 
          @click="cargarMasAntiguas" 
          v-if="paginaActual < totalPaginas"
        >
          « Entradas Anteriores
        </button>
        <span v-else class="pagination-spacer"></span>

        <button 
          class="pagination-link right" 
          @click="cargarMasRecientes" 
          v-if="paginaActual > 1"
        >
          Entradas Siguientes »
        </button>
        <span v-else class="pagination-spacer"></span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.blog-section {
  padding: 80px 20px;
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 36px;
  font-weight: 800;
  color: #0070BB; 
  margin-bottom: 50px;
}

.status-message {
  text-align: center;
  padding: 50px 20px;
  font-size: 18px;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #e2e8f0;
  border-top-color: #0070BB;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.blog-card {
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  height: 240px;
  margin-bottom: 25px;
  border-radius: 8px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .card-image img {
  transform: scale(1.05); 
}

.img-placeholder {
  width: 100%;
  height: 100%;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-weight: 600;
}

.card-title {
  font-size: 20px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 12px;
  line-height: 1.3;
}

.card-date {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 15px;
  text-transform: capitalize;
}


:deep(.card-excerpt p) {
  font-size: 15px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  font-size: 15px;
  font-weight: 800;
  color: #1e293b;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: color 0.3s ease;
  display: inline-block;
  margin-top: auto; 
}
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #e2e8f0;
}

.pagination-link {
  background: none;
  border: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #1e293b;
  cursor: pointer;
  padding: 10px 0;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  transition: color 0.3s ease;
}

.pagination-link:hover {
  color: #0070BB;
}

.pagination-spacer {
  width: 150px; 
}

.read-more:hover {
  color: #0070BB;
}

@media (max-width: 992px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  .card-image {
    height: 200px;
  }
  .pagination-container {
    flex-direction: column-reverse;
    gap: 30px;
    text-align: center;
  }
}
</style>
