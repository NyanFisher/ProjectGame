import firebase from 'firebase/app'
import User from './user-help'


export default{
  state: {
      user: null,
      submit_status: null,
  },
  mutations: {
    set_user(state, payload){
      state.user = payload
    },
    change_status(state, payload){
      state.submit_status = payload
    }

  },
  actions: {
    change_status({commit}, payload){
      commit('change_status', payload)
    },
    async register_user({commit}, {email, password}){
      commit('clear_error')
      commit('set_loading', true)
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        commit('set_user', new User(user.user.uid))
        commit('set_loading', false)
      }
      catch (error) {
        console.log("ERROR")
        commit('set_loading', false)
        commit('set_error', error.message)
        throw error
      }
    },
    async login_user({commit}, {email, password}){
      commit('clear_error')
      commit('set_loading', true)
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        commit('set_user', new User(user.user.uid))
        commit('set_loading', false)
      }
      catch (error) {
        console.log("ERROR")
        commit('set_loading', false)
        commit('set_error', error.message)
        throw error
      }
    },
    logged_user({commit}, payload){
      commit('set_user', new User(payload.uid))
    },
    logout_user({commit}){
      firebase.auth().signOut()
      commit('set_user', null)
    }
  },
  getters: {
      user(state){
        return state.user
      },
      check_user(state) {
        return state.user !== null
      },
      get_submit_status(state) {
        return state.submit_status
      }
  }
}
