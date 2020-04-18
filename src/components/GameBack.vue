<template>
    <div class="background-game" id='fullscreen'>
        <button class="fullscreen-span" @click="full"></button>
        <button class="chat-open" @click="chat_hide"></button>
        <transition name="fade">
            <Chat class="chat-in-game" @changing_text="is_writing" v-if="!get_chat_hide"/>
        </transition>
        <img class="background-game-back" :src="require('../assets/img/' + background_style)">
        <ListChoices/>       
        <InteractionArea/>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import InteractionArea from './InteractionArea'
import ListChoices from './ListChoices'
import Chat from '@/components/Chat'
export default {
    name: 'GameBack',
    data() {
        return {
            is_full: false,
            chat_list: 0,
            is_write: false
        }
    },
    components: {
        InteractionArea,
        ListChoices,
        Chat
    },
    methods: {
        fullScreen(element) {
            if(element.requestFullscreen) {
                element.requestFullscreen();
            } else if(element.webkitrequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if(element.mozRequestFullscreen) {
                element.mozRequestFullScreen();
            }
        },
        full(){ 
            var canvas = document.getElementById('fullscreen');
            if (!this.is_full){
                this.is_full = true
                this.fullScreen(canvas)
            }
            else{
                this.is_full = false
                document.exitFullscreen();
            }
        },
        chat_hide() {
            if (this.get_chat_hide){
                this.$store.commit('swap_hide', false)
            }
            else {
                this.$store.commit('swap_hide', true)
            }
        },
        is_writing(event){
            if (event){
                this.is_write = true
            }
            else{
                this.is_write = false
            }
        }
    },
    computed: {
        ...mapGetters(['get_background', 'get_last_background', 'get_chat_hide']),
        
        background_style(){
            let background = ''
            if (this.get_background){
                background = this.get_background
            }
            else {
                background = this.get_last_background
            }
            return background
        }
    },
     mounted: function() {
        this.$nextTick(function() {
            this.$store.dispatch('load_chat')
            this.chat_list = this.$store.getters.get_chat_list.length
            setInterval(() => {
                this.$store.dispatch('load_chat')
                const getter_chat_list = this.$store.getters.get_chat_list
                if (this.chat_list < getter_chat_list.length){
                    this.chat_list = getter_chat_list.length
                    this.$store.commit('swap_hide', false)
                }
                else if (this.is_write){
                    this.$store.commit('swap_hide', false)
                }
                else {
                    this.$store.commit('swap_hide', true)
                }
            },20000)
        })
    }
    
}
</script>

<style>
  .background-game {
    position: relative;
    background-color: #ffffff;
    background-repeat: no-repeat;
    min-height: 955px;
  }
  .background-game-back{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  .fullscreen-span{
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    border: none;
    background-color: transparent;
    background-image: url('../assets/img/fullscreen.png');
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 20px;
    cursor: pointer;
}
.chat-open{
    position: absolute;
    top: 10px;
    right: 80px;
    z-index: 2;
    border: none;
    background-color: transparent;
    background-image: url('../assets/img/chat.png');
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 20px;
    cursor: pointer;
}
.chat-in-game{
    position: absolute;
    top: 70px;
    right: 0px;
    z-index: 1;
}
.fullscreen-span:hover{
     transition: 1s;
     transform:  scale(1.2) rotate(90deg);
}
.chat-open:hover{
     transition: 1s;
     transform: scale(1.2);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>