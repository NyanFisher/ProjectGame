import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import common from './common'
import scenario from './scenario'
import chat from './chat'
import profile from './profile'
import statistics from './statistics'
Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    User,
    common,
    scenario,
    chat,
    profile,
    statistics
  }
})
