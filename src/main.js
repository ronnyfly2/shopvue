import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './stylus/base/base.styl'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
