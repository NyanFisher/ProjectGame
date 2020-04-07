<template>
    <div class="background-game">

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
    components: {
        InteractionArea,
        ListChoices,

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
    min-height: 800px;

  }
  .background-game-back{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
</style>