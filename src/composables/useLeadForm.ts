import { computed, reactive, ref } from 'vue'

type MensajeTipo = '' | 'error' | 'exito'

interface MensajeEstado {
  texto: string
  tipo: MensajeTipo
}

interface LeadPayload {
  email: string
  nombre: string
  apellido: string
  telefono: string
  ruc: string
  empresa: string
}

interface EnviarOpciones {
  mensajeExito?: string
}

const CONTACTO_ENDPOINT = 'https://hayllierp.creamosmarcati.com/wp-json/haylli/v1/contacto'
const MENSAJE_EXITO_DEFAULT = '¡Gracias! Te contactaremos por WhatsApp pronto.'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const extraerNombreApellido = (nombreCompleto: string) => {
  const partes = nombreCompleto.trim().split(/\s+/).filter(Boolean)
  return {
    nombre: partes[0] ?? '',
    apellido: partes.slice(1).join(' '),
  }
}

export const useLeadForm = () => {
  const formulario = reactive({
    nombreCompleto: '',
    ruc: '',
    empresa: '',
    telefono: '',
    email: '',
  })

  const cargando = ref(false)
  const mensaje = ref<MensajeEstado>({ texto: '', tipo: '' })

  const correoInvalido = computed(() => {
    const email = formulario.email.trim()
    return email.length > 0 && !EMAIL_REGEX.test(email)
  })

  const telefonoInvalido = computed(() => {
    const telefono = formulario.telefono.trim()
    return telefono.length > 0 && telefono.length < 9
  })

  const filtrarNumeros = (evento: Event) => {
    const input = evento.target as HTMLInputElement
    formulario.telefono = input.value.replace(/\D/g, '')
  }

  const filtrarRuc = (evento: Event) => {
    const input = evento.target as HTMLInputElement
    formulario.ruc = input.value.replace(/\D/g, '')
  }

  const limpiarFormulario = () => {
    formulario.nombreCompleto = ''
    formulario.ruc = ''
    formulario.empresa = ''
    formulario.telefono = ''
    formulario.email = ''
  }

  const enviarFormulario = async (opciones: EnviarOpciones = {}) => {
    if (!formulario.nombreCompleto || !formulario.ruc || !formulario.empresa || !formulario.telefono || !formulario.email) {
      mensaje.value = { texto: 'Por favor, completa todos los campos.', tipo: 'error' }
      return
    }

    if (!EMAIL_REGEX.test(formulario.email.trim())) {
      mensaje.value = { texto: 'Ingrese correctamente el correo.', tipo: 'error' }
      return
    }

    if (formulario.ruc.length !== 11) {
      mensaje.value = { texto: 'El RUC debe tener 11 dígitos.', tipo: 'error' }
      return
    }

    if (formulario.telefono.length !== 9) {
      mensaje.value = { texto: 'El número de WhatsApp debe tener 9 dígitos.', tipo: 'error' }
      return
    }

    cargando.value = true
    mensaje.value = { texto: '', tipo: '' }

    try {
      const { nombre, apellido } = extraerNombreApellido(formulario.nombreCompleto)
      const payload: LeadPayload = {
        email: formulario.email,
        nombre,
        apellido,
        telefono: formulario.telefono,
        ruc: formulario.ruc,
        empresa: formulario.empresa,
      }

      const respuesta = await fetch(CONTACTO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!respuesta.ok) {
        throw new Error('Error al enviar el formulario')
      }

      mensaje.value = {
        texto: opciones.mensajeExito ?? MENSAJE_EXITO_DEFAULT,
        tipo: 'exito',
      }
      limpiarFormulario()
    } catch {
      mensaje.value = {
        texto: 'Ocurrió un problema al enviar tus datos. Intenta nuevamente.',
        tipo: 'error',
      }
    } finally {
      cargando.value = false
    }
  }

  return {
    formulario,
    cargando,
    mensaje,
    correoInvalido,
    telefonoInvalido,
    filtrarNumeros,
    filtrarRuc,
    enviarFormulario,
  }
}
