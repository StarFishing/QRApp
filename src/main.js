import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'common/stylus/reset.styl'
import VueQriously from 'vue-qriously'
import VueQrcodeReader from 'vue-qrcode-reader'
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueQriously)
Vue.use(VueQrcodeReader)
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
