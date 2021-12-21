import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import "animate.css"

import "@/assets/themes/index.scss"
import "@/assets/styles/index.scss"

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
