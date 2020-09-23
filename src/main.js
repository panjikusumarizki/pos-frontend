import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { url } from '../src/helpers/env'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

import axios from 'axios'

axios.interceptors.response.use((response) => {
  return response
}, (err) => {
  if (err.response.data.message === 'Authentication failed, Token was expired') {
    return new Promise((resolve, reject) => {
      const refresh = localStorage.getItem('refreshToken')
      axios.post(`${url}/users/refreshToken`, {
        refreshToken: refresh
      }).then((result) => {
        localStorage.setItem('token', result.data.data.newToken)
        window.location = '/'
      }).catch((err) => {
        console.log(err)
      })
    })
  }
})

axios.defaults.headers = {
  token: localStorage.getItem('token')
}

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
