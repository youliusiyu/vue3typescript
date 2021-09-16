import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

console.log('process.env.BASE_URL', process.env.BASE_URL)
console.log('process.env.VUE_APP_SECRET', process.env.VUE_APP_SECRET)
console.log('process.env.VUE_APP_BASE_URL', process.env.VUE_APP_BASE_URL)
console.log('process.env.VUE_APP_TITLE', process.env.VUE_APP_TITLE)
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
