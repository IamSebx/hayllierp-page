<script setup lang="ts">
import { useLeadForm } from '../../../composables/useLeadForm'

const { formulario, cargando, mensaje, correoInvalido, telefonoInvalido, filtrarNumeros, filtrarRuc, enviarFormulario } = useLeadForm()

const enviarSolicitud = async () => {
  await enviarFormulario({ mensajeExito: '¡Solicitud enviada con éxito!' })
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
              <label for="ruc">RUC</label>
              <input type="text" id="ruc" v-model="formulario.ruc" @input="filtrarRuc" maxlength="11" placeholder="Ejemplo: 20123456789" :disabled="cargando" required>
            </div>

            <div class="grupo-input">
              <label for="empresa">Nombre de la empresa</label>
              <input type="text" id="empresa" v-model="formulario.empresa" placeholder="Ejemplo: Comercial ACME S.A.C." :disabled="cargando" required>
            </div>

            <div class="grupo-input">
              <label for="celular">Celular</label>
              <div class="input-prefix-wrap">
                <span class="input-prefix">+51</span>
                <input type="tel" id="celular" v-model="formulario.telefono" @input="filtrarNumeros" maxlength="9" placeholder="987654321" :disabled="cargando" required>
              </div>
              <span v-if="telefonoInvalido" class="input-warning">Ingrese correctamente el número (9 dígitos).</span>
            </div>

            <div class="grupo-input">
              <label for="email">E-mail</label>
              <input type="email" id="email" v-model="formulario.email" placeholder="Ejemplo: example@gmail.com" :disabled="cargando" required>
              <span v-if="correoInvalido" class="input-warning">Ingrese correctamente el correo.</span>
            </div>

            <div v-if="mensaje.texto" :class="['alerta', `alerta-${mensaje.tipo}`]">
              {{ mensaje.texto }}
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

.input-prefix-wrap {
  position: relative;
  display: block;
  width: 100%;
}

.input-prefix {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 14px;
  font-weight: 700;
  pointer-events: none;
}

.input-prefix-wrap input {
  padding-left: 52px;
}

.input-warning {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #b91c1c;
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

.alerta {
  padding: 12px 16px;
  border-radius: 12px;
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
