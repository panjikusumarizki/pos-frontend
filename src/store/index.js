import Vue from 'vue'
import Vuex from 'vuex'
import auth from './users/auth'
import products from './products/products'
import ctg from './category/category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    products,
    ctg
  }
})
