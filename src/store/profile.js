
import Profile from "./profile-help";
import firebase from 'firebase/app'

export default {
    name: 'profile',
    state: {
        user_id: null,
        nickname: null,
        first_name: null,
        second_name: null,
        avatar: null,
        loading: false
    },
    mutations: {
        async change_profile(state, data_profile){
            state.user_id = data_profile.user_id
            state.nickname = data_profile.nickname
            state.first_name = data_profile.first_name
            state.second_name = data_profile.second_name
            state.avatar = data_profile.avatar
            state.loading = true
        },
        chacge_load(state){
            state.loading = !state.loading
        }
    },
    actions: {
        swap_loading({commit}){
            commit('chacge_load')
        },
        async create_new_profile({commit, getters}, data_profile){
            commit('clear_error')
            commit('set_loading', true)
            try {
                const file = data_profile.file.get('image')
                console.log(file)
                await firebase.storage().ref(`${file.name}`).put(file)
                    .then(function(){
                        console.log("Uploaded file")
                }) 
                const avatar = await firebase.storage().ref().child(file.name).getDownloadURL()
                const profile = new Profile(
                    getters.user.id,
                    data_profile.nickname,
                    avatar,
                    data_profile.first_name,
                    data_profile.second_name,
                    )
                await firebase.database().ref('profile').push(profile)
                commit('change_profile', profile)
                commit('set_loading', false)
              }
              catch (error) {
                console.log("ERROR")
                commit('set_loading', false)
                commit('set_error', error.message)
                throw error
              }
        },
        async get_profile_in_db({commit, getters}){
            commit('clear_error')
            commit('set_loading', true)
            try {
                
                const profiles_in_db = await firebase.database().ref('profile').once('value')
                const profiles = profiles_in_db.val()
                let data_profile = null
                Object.keys(profiles).forEach(key => {
                    const profile = profiles[key]
                    if (profile.user_id == getters.user.id)
                    {
                        data_profile = new Profile(
                            profile.user_id,
                            profile.nickname,
                            profile.avatar,
                            profile.first_name,
                            profile.second_name,
                        )
                    }
                })
                commit('change_profile', data_profile)
                commit('set_loading', false)
                console.log('hello')
              }
              catch (error) {
                console.log("ERROR")
                commit('set_loading', false)
                commit('set_error', error.message)
                throw error
              }
        }
    },
    getters: {
        get_loading(state){
            return state.loading
        },
        get_img(state){
            return state.avatar
        },
        get_nickname(state){
            return state.nickname
        },
        get_first_name(state){
            return state.first_name
        },
        get_second_name(state){
            return state.second_name
        }

    },
}