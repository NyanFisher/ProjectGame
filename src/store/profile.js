
import Profile from "./profile-help";
import firebase from 'firebase/app'
import router from '../router'
export default {
    name: 'profile',
    state: {
        user_id: null,
        nickname: null,
        first_name: null,
        second_name: null,
        avatar: null,
        loading: false,
        all_users: [],
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
        change_load(state){
            state.loading = !state.loading
        },
        all_users(state, all_users){
            state.all_users = all_users
        }
    },
    actions: {
        swap_loading({commit}){
            commit('change_load')
        },
        async create_new_profile({commit, getters}, data_profile){
            commit('clear_error')
            commit('set_loading', true)
            try {
                const file = data_profile.file.get('image')
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
                if (!data_profile)
                {
                    router.push('/profile')
                    commit('set_loading', false)
                    return false
                }
                else {
                    router.push('/new-game')
                }
                commit('change_profile', data_profile)
                commit('set_loading', false)

              }
              catch (error) {
                console.log("ERROR")
                commit('set_loading', false)
                commit('set_error', error.message)
                throw error
            }
        },
        async set_all_users({commit}){
            const profiles_in_db = await firebase.database().ref('profile').once('value')
            const profiles = profiles_in_db.val()
            let all_users = []
            Object.keys(profiles).forEach(key => {
                const user = profiles[key]
                all_users.push(user)
            })
            commit('all_users', all_users)
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
        },
        user_profile(state){
            return state.user_id
        },
        get_all_users(state){
            return state.all_users
        }

       

    },
}