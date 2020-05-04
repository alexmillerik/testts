import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: '',
    sizes: []
  },
  mutations: {
    setText(state, text: string) {
      state.text = text
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
