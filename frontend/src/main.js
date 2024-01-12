import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueSplide from '@splidejs/vue-splide';

// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueSplide)

app.mount('#app')
