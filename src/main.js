import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index.js'
import './assets/styles/styles.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')