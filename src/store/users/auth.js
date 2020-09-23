import axios from 'axios'
const { url } = require('../../helpers/env')

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}

const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/users/login`, payload).then((response) => {
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('refreshToken', response.data.data.refreshToken)
        resolve(response.data.message)
      }).catch((err) => {
        reject(err.message)
      })
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/users/register`, payload).then((response) => {
        resolve(response.data.message)
      }).catch((err) => {
        reject(err.message)
      })
    })
  },
  logout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      resolve('Logout success')
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  getters
}
