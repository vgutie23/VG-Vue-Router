//Vanessa Gutierrez 02/27/2021
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
