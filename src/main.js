import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import ElementPlusCrx from 'element-plus-crx'

import App from './App.vue'
import router from './router'
import '@/api/mock'

// css
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/ui-cover.css'
import '@/styles/class.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(ElementPlusCrx)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
