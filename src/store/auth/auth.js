import axios from 'axios'

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
      axios.post('http://localhost:3001/users/login', payload).then((response) => {
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('refreshToken', response.data.data.refreshToken)
        resolve(response.data.message)
      }).catch((err) => {
        console.log(err)
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  getters
}
