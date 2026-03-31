import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // <-- 1. Importamos el router

const app = createApp(App)

app.use(router) // <-- 2. Le decimos a la app que lo use
app.mount('#app')
