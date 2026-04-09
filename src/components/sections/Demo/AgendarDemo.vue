<script setup lang="ts">
import { reactive, ref } from 'vue'

const formulario = reactive({
  nombreCompleto: '', // Unificado
  celular: '',
  email: ''
})

const cargando = ref(false)
const mensaje = ref({ texto: '', tipo: '' })

const filtrarNumeros = (evento: Event) => {
  const input = evento.target as HTMLInputElement
  formulario.celular = input.value.replace(/\D/g, '')
}

const enviarSolicitud = async () => {
  if (!formulario.nombreCompleto || !formulario.celular || !formulario.email) {
    mensaje.value = { texto: 'Por favor, completa todos los campos.', tipo: 'error' }
    return
  }

  if (formulario.celular.length !== 9) {
    mensaje.value = { texto: 'El celular debe tener 9 dígitos.', tipo: 'error' }
    return
  }

  cargando.value = true
  mensaje.value = { texto: '', tipo: '' }

  try {
    const respuesta = await fetch('https://hayllierp.creamosmarcati.com/wp-json/haylli/v1/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formulario.email,
        nombre: formulario.nombreCompleto, // Se envía el nombre completo aquí
        telefono: formulario.celular
      })
    })

    if (!respuesta.ok) throw new Error('Error al enviar')

    mensaje.value = { texto: '¡Solicitud enviada con éxito!', tipo: 'exito' }
    formulario.nombreCompleto = ''
    formulario.celular = ''
    formulario.email = ''
  } catch (error) {
    mensaje.value = { texto: 'Ocurrió un error. Inténtalo de nuevo.', tipo: 'error' }
  } finally {
    cargando.value = false
  }
}
</script>

<template>
  <section class="demo-layout">
    <div class="contenedor-principal">
      
      <div class="columna-texto">
        <h1 class="titulo-principal">Agenda una demo</h1>
        <h2 class="subtitulo">Descubre cómo podemos optimizar tus operaciones y aumentar tu productividad.</h2>
        <p class="descripcion">
          Llena tus datos en el siguiente formulario y un asesor de Haylli se pondrá en contacto contigo para coordinar la fecha de la demo y enviarte la información a tu WhatsApp.
        </p>
      </div>

      <div class="bloque-registro">
        <div class="tarjeta-form">
          <h3 class="form-titulo">COTIZAR SERVICIOS</h3>
          <p class="form-subtitulo">Completa correctamente tus datos y pronto nos comunicaremos contigo</p>

          <form @submit.prevent="enviarSolicitud" class="formulario">
            <div class="grupo-input">
              <label for="nombreCompleto">Nombres Completos</label>
              <input type="text" id="nombreCompleto" v-model="formulario.nombreCompleto" placeholder="Ejemplo: Juan Enriquez Benitez" :disabled="cargando" required>
            </div>

            <div class="grupo-input">
              <label for="celular">Celular</label>
              <input type="tel" id="celular" v-model="formulario.celular" @input="filtrarNumeros" maxlength="9" placeholder="Ejemplo: 985961235" :disabled="cargando" required>
            </div>

            <div class="grupo-input">
              <label for="email">E-mail</label>
              <input type="email" id="email" v-model="formulario.email" placeholder="Ejemplo: example@gmail.com" :disabled="cargando" required>
            </div>

            <button type="submit" class="btn-enviar" :disabled="cargando">
              <span v-if="!cargando">Enviar</span>
              <span v-else>Enviando...</span>
            </button>
          </form>
        </div>

        <div class="personaje-contenedor">
          <img src="../../../assets/DerechaContacto.png" alt="Asesora Haylli" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.demo-layout {
  padding: 100px 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  min-height: 80vh;
}

.contenedor-principal {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1.2fr; /* Divide el espacio en dos columnas claras */
  gap: 80px;
  align-items: center;
}

/* --- TEXTO IZQUIERDA --- */
.titulo-principal {
  color: #003a5d;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 15px;
}

.subtitulo {
  color: #005a8d;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 20px;
}

.descripcion {
  color: #64748b;
  font-size: 16px;
  line-height: 1.6;
}

/* --- CONTENEDOR DERECHO (Tarjeta + Personaje) --- */
.bloque-registro {
  position: relative; /* Necesario para posicionar al personaje */
  display: flex;
  align-items: center;
}

.tarjeta-form {
  background-color: #f8fafc;
  border-radius: 20px;
  padding: 50px;
  width: 100%;
  max-width: 500px; /* Un ancho generoso pero controlado */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
  z-index: 2; /* Por encima del fondo */
}

.form-titulo {
  color: #0f172a;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
}

.form-subtitulo {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 30px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grupo-input {
  display: flex;
  flex-direction: column;
  width: 100%; /* Asegura que ocupen todo el ancho de la tarjeta */
}

.grupo-input label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #334155;
}

.grupo-input input {
  width: 100%;
  padding: 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  background-color: white;
  box-sizing: border-box; /* Crucial para que el padding no desborde el input */
}

.btn-enviar {
  background-color: #0073e6;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;
}

.btn-enviar:hover {
  background-color: #005bb5;
}

/* --- EL PERSONAJE --- */
.personaje-contenedor {
  position: absolute;
  right: -220px; /* Lo saca hacia la derecha de la tarjeta */
  bottom: -20px;
  z-index: 1; /* Un poco por detrás o al nivel si no se traslapan */
}

.personaje-contenedor img {
  height: 450px; /* Ajusta el tamaño según tu imagen */
  width: auto;
  filter: drop-shadow(10px 10px 20px rgba(0,0,0,0.1));
}

/* --- RESPONSIVE --- */
@media (max-width: 1150px) {
  .personaje-contenedor {
    display: none; /* Mejor ocultarlo si no hay espacio lateral */
  }
  .contenedor-principal {
    grid-template-columns: 1fr;
    max-width: 600px;
    gap: 40px;
    text-align: center;
  }
  .tarjeta-form {
    max-width: 100%;
  }
}
</style>