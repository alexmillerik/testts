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
    setSizes(state, sizes) {
      state.sizes = sizes
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
