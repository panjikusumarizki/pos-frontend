import axios from 'axios'
const { url } = require('../../helpers/env')

const state = () => {
  return {
    all: {
      data: [],
      isLoading: false
    }
  }
}

const getters = {
  getterCtg (state) {
    return state.all
  }
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.all.data = payload
  },
  SET_ALL_LOADING (state, payload) {
    state.all.isLoading = payload
  }
}

const actions = {
  getAllCtg (context) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise(() => {
      axios.get(`${url}/category/getAll`).then((response) => {
        context.commit('SET_ALL_DATA', response.data.data)
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        context.commit('SET_ALL_LOADING', false)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
