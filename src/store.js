import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    auth: {
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null
    },
    user: {
      _id: null,
      email: '',
      name: '',
    },
    error : [],

  },
  mutations: {
    UPDATE_AUTH(state, auth) {
      state.auth = auth
    },
    UPDATE_USER(state, user) {
      state.user = user;
  
    },
    UPDATE_ERROR(state, error) {
      state.error = error;
    },
  
    UPDATE_TOKEN(state, token) {
      state.auth.accessToken = token
    },
  
    CLEAR_ALL_DATA(state) {
      state.auth = {
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null
      }
      state.user = {
        id: null,
        email: '',
        name: '',
      }
      state.error = []
    },
    CLEAR_ERROR(state) {
      state.error = []
    }
  },
  actions: {
  
  },
  plugins: [new VuexPersistence().plugin]
})


/* state: {

  auth: {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null
  },
  user: {
    _id: null,
    email: '',
    name: '',
  },


},
mutations: {
  UPDATE_AUTH(state, auth) {
    state.auth = auth
  },
  UPDATE_USER(state, user) {
    state.user = user;

  },

  UPDATE_TOKEN(state, token) {
    state.auth.accessToken = token
  },

  CLEAR_ALL_DATA(state) {
    state.auth = {
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null
    }
    state.user = {
      id: null,
      email: '',
      name: '',
    }

  }
},
actions: {

} */