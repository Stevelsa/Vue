import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import '@/style/style.scss'
// import '@/permission'
import '@/icons'


import App from './App'
import router from './router'
import store from './store'
import {postRequest} from '@/api/api'
import {getRequest} from '@/api/api'

Vue.prototype.postRequest = postRequest;
Vue.prototype.getRequest = getRequest;

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
