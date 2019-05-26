import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

Vue.use(Vuex)

// Create a new store
const store = new Vuex.Store({
  mutations,
  actions,
  modules,
  state,
})

export default store
