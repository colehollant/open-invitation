import VueCompositionApi from '@vue/composition-api'
import PortalVue from 'portal-vue'
Vue.use(PortalVue)
Vue.use(VueCompositionApi)
import '@/assets/css/tailwind.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')