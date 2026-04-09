<script setup lang="ts">
import { reactive, ref } from 'vue'

const formulario = reactive({
  nombreCompleto: '',
  telefono: '',
  email: ''
})

const cargando = ref(false)
const mensaje = ref({ texto: '', tipo: '' }) 

// Función que limpia el campo de teléfono en tiempo real
const filtrarNumeros = (evento: Event) => {
  const input = evento.target as HTMLInputElement
  // Reemplaza cualquier cosa que NO sea un número (\D) por vacío
  formulario.telefono = input.value.replace(/\D/g, '')
}

const enviarFormulario = async () => {
  // 1. Validación básica de campos vacíos
  if (!formulario.nombreCompleto || !formulario.telefono || !formulario.email) {
    mensaje.value = { texto: 'Por favor, completa todos los campos.', tipo: 'error' }
    return
  }

  // 2. Validación de longitud del teléfono (exige que sean 9 sí o sí)
  if (formulario.telefono.length !== 9) {
    mensaje.value = { texto: 'El número de WhatsApp debe tener 9 dígitos.', tipo: 'error' }
    return
  }

  cargando.value = true
  mensaje.value = { texto: '', tipo: '' }

  try {
    const partesNombre = formulario.nombreCompleto.trim().split(' ')
    const nombre = partesNombre[0] || ''
    const apellido = partesNombre.slice(1).join(' ') || ''

    const respuesta = await fetch('https://hayllierp.creamosmarcati.com/wp-json/haylli/v1/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formulario.email,
        nombre: nombre,
        apellido: apellido,
        telefono: formulario.telefono
      })
    })

    if (!respuesta.ok) throw new Error('Error en la red')

    mensaje.value = { texto: '¡Gracias! Te contactaremos por WhatsApp pronto.', tipo: 'exito' }
    formulario.nombreCompleto = ''
    formulario.telefono = ''
    formulario.email = ''

  } catch (error) {
    console.error('Error al enviar lead:', error)
    mensaje.value = { texto: 'Ocurrió un problema al enviar tus datos. Intenta nuevamente.', tipo: 'error' }
  } finally {
    cargando.value = false
  }
}
</script>

<template>
  <section class="contacto-section">
    <div class="container-contacto">
      
      <div class="imagen-lateral flotar-izq">
        <img src="../../../assets/IzquierdaContacto.png" alt="Asesora Izquierda">
      </div>

      <div class="card-contacto">
        <div class="cabecera-contacto">
          <h2>Quiero saber más</h2>
          <p>Completa correctamente tus datos para enviarte la información a tu WhatsApp</p>
        </div>

        <form @submit.prevent="enviarFormulario" class="formulario">
          
          <div class="grupo-input">
            <label for="nombre">Nombre Completo</label>
            <input 
              type="text" 
              id="nombre" 
              v-model="formulario.nombreCompleto" 
              placeholder="Ejemplo: Juan Enriquez Benitez"
              :disabled="cargando"
              required
            >
          </div>

          <div class="grupo-input">
            <label for="whatsapp">Número de WhatsApp</label>
            <input 
              type="tel" 
              id="whatsapp" 
              v-model="formulario.telefono" 
              @input="filtrarNumeros"
              maxlength="9"
              placeholder="Ejemplo: 987654321"
              :disabled="cargando"
              required
            >
          </div>

          <div class="grupo-input">
            <label for="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              v-model="formulario.email" 
              placeholder="Ejemplo: example@gmail.com"
              :disabled="cargando"
              required
            >
          </div>

          <div v-if="mensaje.texto" :class="['alerta', `alerta-${mensaje.tipo}`]">
            {{ mensaje.texto }}
          </div>

          <button type="submit" class="btn-enviar" :disabled="cargando">
            <span v-if="!cargando">Enviar información</span>
            <span v-else class="loader">Enviando...</span>
          </button>

        </form>
      </div>

      <div class="imagen-lateral flotar-der">
        <img src="../../../assets/DerechaContacto.png" alt="Asesora Derecha">
      </div>

    </div>
  </section>
</template>

<style scoped>
.contacto-section {
  padding: 80px 20px;
  background-color: #f8fafc;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden; /* Evita scroll horizontal si las imágenes son muy grandes */
}

.container-contacto {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px; /* Un poco menos de espacio para permitir imágenes más grandes */
  max-width: 1300px;
  margin: 0 auto;
}

/* --- ESTILOS DE LAS IMÁGENES INTERACTIVAS --- */
.imagen-lateral {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px; /* Aumentado para que se vean más grandes e imponentes */
  z-index: 1;
}

.imagen-lateral img {
  max-width: 100%;
  height: auto;
  /* El drop-shadow respeta la transparencia del PNG, dándole volumen */
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15));
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: pointer;
}

.imagen-lateral img:hover {
  transform: scale(1.08); /* Crece un poquito al pasar el mouse */
  filter: drop-shadow(0 20px 30px rgba(74, 144, 226, 0.3)); /* Sombra azulada */
}

/* Animaciones de flotación independiente */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.flotar-izq {
  animation: float 6s ease-in-out infinite;
}

.flotar-der {
  animation: float 6s ease-in-out infinite;
  animation-delay: -3s; /* Desfase para que no suban y bajen exactamente al mismo tiempo */
}

/* --- ESTILOS DEL FORMULARIO --- */
.card-contacto {
  position: relative;
  z-index: 2; /* Para que quede un poco por encima de las imágenes si se acercan mucho */
  background: #ffffff;
  width: 100%;
  max-width: 550px;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); /* Sombra un poco más pronunciada */
}

.cabecera-contacto {
  text-align: center;
  margin-bottom: 30px;
}

.cabecera-contacto h2 {
  color: #4A90E2;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
}

.cabecera-contacto p {
  color: #64748b;
  font-size: 15px;
  line-height: 1.5;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grupo-input {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.grupo-input label {
  font-size: 14px;
  font-weight: 600;
  color: #334155;
}

.grupo-input input {
  padding: 14px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
  color: #1e293b;
  transition: all 0.3s ease;
  font-family: inherit;
}

.grupo-input input::placeholder {
  color: #94a3b8;
}

.grupo-input input:focus {
  outline: none;
  border-color: #4A90E2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.15);
}

.grupo-input input:disabled {
  background-color: #f1f5f9;
  cursor: not-allowed;
}

.btn-enviar {
  margin-top: 10px;
  background-color: #4A90E2;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-enviar:hover:not(:disabled) {
  background-color: #357ABD;
}

.btn-enviar:active:not(:disabled) {
  transform: scale(0.98);
}

.btn-enviar:disabled {
  background-color: #93c5fd;
  cursor: not-allowed;
}

.alerta {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

.alerta-exito {
  background-color: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.alerta-error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

/* --- RESPONSIVIDAD --- */
/* Cambiamos el punto de quiebre a 992px (Tablets horizontales) para que no aplasten el formulario */
@media (max-width: 992px) {
  .imagen-lateral {
    display: none;
  }
  
  .contacto-section {
    padding: 50px 15px;
  }

  .card-contacto {
    padding: 35px 25px;
  }
}

@media (max-width: 600px) {
  .cabecera-contacto h2 {
    font-size: 24px;
  }
}
</style>