import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

import Auth from './auth'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.prototype.$http = Axios;
Vue.prototype.$auth = Auth; 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created: () => {
    if (process.env.NODE_ENV === 'development') {
        Axios.defaults.baseURL = 'http://localhost:3001/api';
       
    } else {
    
    }
},
}).$mount('#app')
