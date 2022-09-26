import Vue from 'vue'
import App from './App.vue'
import fuhui from 'fuhui'
import 'fuhui/fuhui.css'

Vue.config.productionTip = false

Vue.use(fuhui)

new Vue({
  render: h => h(App),
}).$mount('#app')
