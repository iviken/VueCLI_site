import Vue from 'vue'
import App from './App.vue'
import {com} from './compon'

Vue.config.productionTip = false

console.log(com);
new Vue({
  render: h => h(App),
}).$mount('#app')
