<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref<any>(null)
const cargando = ref(true)

const obtenerPostCompleto = async () => {
  try {
    const slug = route.params.slug
    
    const respuesta = await fetch(`https://hayllierp.creamosmarcati.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    const data = await respuesta.json()
    
    if (data.length > 0) {
      post.value = data[0]
    }
  } catch (error) {
    console.error('Error al cargar el artículo:', error)
  } finally {
    cargando.value = false
  }
}

onMounted(() => {
  obtenerPostCompleto()
})

const formatearFecha = (fechaString: string) => {
  const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(fechaString).toLocaleDateString('es-ES', opciones)
}
const procesarContenidoWP = (htmlString: string) => {
  if (!htmlString) return '';
  
  let htmlLimpio = htmlString;
  
  htmlLimpio = htmlLimpio.replace(/data-src=/g, 'src=');
  htmlLimpio = htmlLimpio.replace(/data-lazy-src=/g, 'src=');
  
  htmlLimpio = htmlLimpio.replace(/srcset="[^"]*"/g, '');
  htmlLimpio = htmlLimpio.replace(/sizes="[^"]*"/g, '');
  
  htmlLimpio = htmlLimpio.replace(/<img /g, '<img loading="eager" ');
  
  htmlLimpio = htmlLimpio.replace(/class="([^"]*)lazyload([^"]*)"/g, 'class="$1 $2"');
  htmlLimpio = htmlLimpio.replace(/class="([^"]*)lazy([^"]*)"/g, 'class="$1 $2"');

  return htmlLimpio;
}
</script>

<template>
  <main class="post-detalle-page">
    <div class="container">
      
      <div v-if="cargando" class="loading">Cargando artículo...</div>
      
      <div v-else-if="!post" class="not-found">
        <h2>Artículo no encontrado</h2>
        <router-link to="/blog" class="back-link">Volver al blog</router-link>
      </div>

      <article v-else class="full-post">
        <router-link to="/blog" class="back-link">← Volver a todos los artículos</router-link>

        <h1 class="post-title" v-html="post.title.rendered"></h1>
        <p class="post-date">Publicado el {{ formatearFecha(post.date) }}</p>

        <div class="main-image" v-if="post._embedded && post._embedded['wp:featuredmedia']">
          <img :src="post._embedded['wp:featuredmedia'][0].source_url" :alt="post.title.rendered">
        </div>

        <div class="post-content" v-html="procesarContenidoWP(post.content.rendered)"></div>
      </article>

    </div>
  </main>
</template>

<style scoped>
.post-detalle-page {
  padding: 120px 20px 80px; 
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}

.container {
  max-width: 800px; 
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  color: #0070BB;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 20px;
}

.back-link:hover {
  text-decoration: underline;
}

.post-title {
  font-size: 40px;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.2;
  margin-bottom: 15px;
}

.post-date {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 30px;
}

.main-image {
  margin-bottom: 40px;
  border-radius: 12px;
  overflow: hidden;
}

.main-image img {
  width: 100%;
  height: auto;
  display: block;
}

:deep(.post-content p) {
  font-size: 18px;
  line-height: 1.8;
  color: #334155;
  margin-bottom: 25px;
}

:deep(.post-content h2), :deep(.post-content h3) {
  color: #1e293b;
  margin-top: 40px;
  margin-bottom: 20px;
}

:deep(.post-content img), 
:deep(.post-content figure), 
:deep(.post-content picture) {
  display: block !important;
  max-width: 100% !important;
  height: auto !important;
  margin: 30px auto !important;
  opacity: 1 !important;
  visibility: visible !important;
  clear: both !important;
  transform: none !important;
  animation: none !important;
  position: static !important;
}

:deep(.post-content div),
:deep(.post-content span) {
  height: auto !important;
  min-height: 0 !important;
}

:deep(.post-content a) {
  color: #0070BB;
}

</style>