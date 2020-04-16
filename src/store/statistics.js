import Statistics from "./statistics-help"
import firebase from 'firebase/app'

export default {
    name: 'statistics',
    state: {
        id_statistics: null,
        id_user: null,
        time_in_game: null,
        count_points: null,
        number_visits: null,
        array_stats_time: [],
        array_stats_point: []
    },
    actions: {
        async set_statistics_time_and_points({commit}){
            commit('clear_error')
            commit('set_loading', true)
            try {
                const statistics_from_db = await firebase.database().ref('statistics').once('value')
                const profiles_from_db = await firebase.database().ref('profile').once('value')
                const statistics = statistics_from_db.val()
                const profiles = profiles_from_db.val()
                let array_users = []
                Object.keys(profiles).forEach((key_profile) => {
                    const profile = profiles[key_profile]
                    Object.keys(statistics).forEach((key_stat) => {
                        if (profile.user_id == statistics[key_stat].id_user){
                            array_users.push(
                                {
                                    avatar: profile.avatar,
                                    nickname: profile.nickname,
                                    count_time: statistics[key_stat].time_in_game,
                                    count_points: statistics[key_stat].count_points
                                }
                            )
                        }
                    })
                })
                commit('set_stat_time_and_points', array_users)
                commit('set_loading', false)
            }
            catch (error){
                console.log("Error load statistics")
                commit('set_error', error.message)
                throw error
            }
        },
        async set_statistics_from_db({commit, getters}){
            commit('clear_error')
            commit('set_loading', true)
            try {
                const user_statistics = await firebase.database().ref('statistics').once('value')
                const statistics_from_db = user_statistics.val()
                let statistics = null
                let id_statistics = null
                Object.keys(statistics_from_db).forEach(key => {
                    const stat = statistics_from_db[key]
                    if (stat.id_user == getters.user.id)
                    {
                        id_statistics = key
                        statistics = new Statistics(
                            stat.id_user,
                            stat.number_visits,
                            stat.time_in_game,
                            stat.count_points
                        )
                    }
                })
                if (statistics)
                    commit('set_statistics', {statistics, id_statistics})
                commit('set_loading', false)
            }
            catch (error){
                console.log("Error load statistics")
                commit('set_error', error.message)
                throw error
            }
        },
        async update_statistics({commit, getters}, data_statistics){
            commit('clear_error')
            commit('set_loading', true)
            try {
                let statistics = null
                const id_statistics = getters.get_id_statistics
                if (getters.get_id_statistics)
                {
                    const number_visits = getters.get_number_visits + data_statistics.number_visits
                    const count_points = getters.get_count_points + data_statistics.count_points
                    const time_in_game = getters.get_time_in_game + data_statistics.time_in_game

                    statistics = new Statistics(
                        getters.user.id,
                        number_visits,
                        time_in_game,
                        count_points
                    )
                    await firebase.database().ref('statistics').child(id_statistics).update(statistics)
                }
                else {
                    statistics = new Statistics(
                        getters.user.id,
                        data_statistics.number_visits,
                        data_statistics.time_in_game,
                        data_statistics.count_points
                    )
                    await firebase.database().ref('statistics').push(statistics)
                }
                commit('set_statistics', {statistics, id_statistics})
                commit('set_loading', false)

            }
            catch (error) {
                console.log("ERROR")
                commit('set_loading', false)
                commit('set_error', error.message)
                throw error
              }
        }
    },
    mutations: {
        set_statistics(state, data){
            state.id_statistics = data.id_statistics
            state.id_user = data.statistics.id_user
            state.time_in_game = data.statistics.time_in_game
            state.count_points = data.statistics.count_points
            state.number_visits = data.statistics.number_visits
        },
        set_stat_time_and_points(state, data){
            state.array_stats_time = data.sort(function(a, b) {
                return b.count_time - a.count_time
            })
            state.array_stats_point = data.sort(function(a, b) {
                return b.count_point - a.count_point
            })
        }
    },
    getters: {
        get_id_statistics(state){
            return state.id_statistics
        },
        get_time_in_game(state){
            return state.time_in_game
        },
        get_count_points(state){
            return state.count_points
        },
        get_number_visits(state){
            return state.number_visits
        },
        get_stat_time(state){
            return state.array_stats_time
        },
        get_stat_points(state){
            return state.array_stats_point
        }
    }
}