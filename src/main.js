import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import ElementPlus from "element-plus"

loadFonts()

createApp(App)
  .use(ElementPlus)
  .mount('#app')
