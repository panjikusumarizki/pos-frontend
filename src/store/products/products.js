import axios from 'axios'
const { url } = require('../../helpers/env')

const state = () => {
  return {
    all: {
      data: [],
      isLoading: false
    },
    detail: []
  }
}

const getters = {
  getterProduct (state) {
    return state.all
  },
  getterDetail (state) {
    return state.detail
  }
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.all.data = payload
  },
  SET_ALL_LOADING (state, payload) {
    state.all.isLoading = payload
  },
  SET_DETAIL (state, payload) {
    state.detail = payload
  }
}

const actions = {
  getAllProduct (context, payload) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/product/getAll?search=${payload}`).then((response) => {
        context.commit('SET_ALL_DATA', response.data.data)
      }).catch((err) => {
        reject(err.message)
      }).finally(() => {
        context.commit('SET_ALL_LOADING', false)
      })
    })
  },
  sortBy (context, payload) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/product/getAll?sortBy=${payload}`).then((response) => {
        context.commit('SET_ALL_DATA', response.data.data)
      }).catch((err) => {
        reject(err.message)
      }).finally(() => {
        context.commit('SET_ALL_LOADING', false)
      })
    })
  },
  sortType (context, payload) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/product/getAll?sortType=${payload}`).then((response) => {
        context.commit('SET_ALL_DATA', response.data.data)
      }).catch((err) => {
        reject(err.message)
      }).finally(() => {
        context.commit('SET_ALL_LOADING', false)
      })
    })
  },
  addProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/product/insert`, payload).then((response) => {
        resolve(response.data.message)
      }).catch((err) => {
        reject(err.message)
      })
    })
  },
  deleteProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${url}/product/delete/${payload}`).then((response) => {
        resolve(response.data.message)
      }).catch((err) => {
        reject(err.message)
      })
    })
  },
  getDetails (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/product/getDetail/${payload}`).then((response) => {
        context.commit('SET_DETAIL', response.data.data)
        resolve(response.data.data)
      }).catch((err) => {
        reject(err.message)
      })
    })
  },
  updateProduct (context, payload) {
    return new Promise((resolve, reject) => {
      const formData = new FormData()
      formData.append('name', payload.nameDetail)
      formData.append('price', payload.priceDetail)
      formData.append('picture', payload.imageDetail)
      formData.append('id_category', payload.id_category)

      axios.put(`${url}/product/update/${payload.idUpd}`, formData).then((response) => {
        resolve(response.data)
        // console.log(response)
      }).catch((err) => {
        reject(err.message)
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
