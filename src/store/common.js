export default {
    state: {
        loading: false, //служит для отображения загрузки
        error: null,
    },
    mutations: {
        set_loading(state, payload){
            state.loading = payload
        },
        set_error(state, payload){
            state.error = payload
        },
        clear_error(state){
            state.error = null
        }
    },
    actions: {
        set_loading({commit}, payload) {
            commit('set_loading', payload)
        },
        set_error({commit}, payload) {
            commit('set_error', payload)
        },
        clear_error({commit}) {
            commit('clear_error')
        }
        
    },
    getters: {
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        }
    }
}