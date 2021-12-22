import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import "@/assets/themes/index.scss"
import "@/assets/styles/index.scss"

const app = createApp(App)

app
.use(store)
.use(router)
.mount('#app')
