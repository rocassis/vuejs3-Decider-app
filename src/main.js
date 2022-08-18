import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'
import Toaster from "@meforma/vue-toaster";

createApp(App).use(Toaster).mount('#app')
