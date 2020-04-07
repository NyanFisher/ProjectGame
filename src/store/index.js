import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import common from './common'
import scenario from './scenario'
import chat from './chat'
Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    User,
    common,
    scenario,
    chat,
  }
})
