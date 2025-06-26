import './scss/style.scss'
import { Vuetify } from './Vuetify';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Importar estilos globales
import './scss/style.scss'

// Importar Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router);
app.use(Vuetify);

app.mount('#app')
