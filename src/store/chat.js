import firebase from 'firebase/app'
import Chat from './chat-helper'
export default {
    name: 'chat',
    state: {
        chat_list: [],
    },
    actions: {
        async load_chat({commit}){
            commit('clear_error')
            commit('set_loading', true)
            try {
                const chat = await firebase.database().ref('chat').once('value')
                const messages = chat.val()
                const chat_array = [] 
                Object.keys(messages).forEach(key => {
                    const message = messages[key]
                    chat_array.push(
                        new Chat(
                            message.id_user,
                            message.message,
                            message.datetime
                        ),
                    )
                })
                commit('load_chat', chat_array)
                commit('set_loading', false)
            }
            catch (error) {
              console.log("ERROR")
              commit('set_loading', false)
              commit('set_error', error.message)
              throw error
            }
        },
        async set_new_message({commit, getters}, payload){
            commit('clear_error')
            commit('set_loading', true)
            try {
                const new_message = new Chat(
                    getters.user.id,
                    payload.message
                )

                const message = await firebase.database().ref('chat').push(new_message)


                commit('new_message', {
                    ...new_message,
                    id: message.key,
                })
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
        new_message(state, payload){
            state.chat_list.push(payload)
        },
        load_chat(state, payload){
            state.chat_list = payload
        }
    },
    getters: {
        get_chat_list(state){
            const chat = []
            state.chat_list.forEach(item => {
                const date_send = item.datetime
                console.log(date_send, Date.now() - 2700000)
                if (date_send  > Date.now() - 2700000){
                    chat.push(item)
                }
            })
            return chat
        }
    }
    
}