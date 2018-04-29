import Vue from 'vue'
import App from './App.vue'
import VueAlertPlugin from './lib/index'
Vue.use(VueAlertPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
