<template>
    <div class="background-game" id='fullscreen'>
        <span class="fullscreen-span" @click="full"></span>
        <img class="background-game-back" :src="background_style">
        <ListChoices/>       
        <InteractionArea/>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import InteractionArea from './InteractionArea'
import ListChoices from './ListChoices'
export default {
    name: 'GameBack',
    data() {
        return {
            is_full: false
        }
    },
    components: {
        InteractionArea,
        ListChoices,

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
        }
    },
    computed: {
        ...mapGetters(['get_background', 'get_last_background']),
        
        background_style(){
            let background = ''
            if (this.get_background){
                background = require('@/assets/img/' + this.get_background)
            }
            else {
                background = require('@/assets/img/' + this.get_last_background)
            }
            return background
        }
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
    z-index: 1;
    background-image: url('../assets/img/fullscreen.png');
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 20px;
    cursor: pointer;
}
.fullscreen-span:hover{
     transition: 1s;
     transform:  scale(1.2) rotate(90deg);
}
</style>