import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './style.css'

loadFonts()

const pinia = createPinia();

createApp(App)
  .use(vuetify)
  // .use(createPinia())
  .use(pinia)
  .mount('#app')

