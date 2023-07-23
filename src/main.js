import 'tailwindcss/tailwind.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'
// import router from './router/index';



const app = createApp(App)

app
    .use(router) 
    .mount('#app');

