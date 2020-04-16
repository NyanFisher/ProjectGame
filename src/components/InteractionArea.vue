<template>
<div>
  <div class="first-person" :style="{backgroundImage: get_first[0], backgroundPosition:get_first[1]}">
    </div>
    <div class="second-person" :style="{backgroundImage: get_second[0], backgroundPosition:get_second[1]}">
    </div>
    <div class="third-person" :style="{backgroundImage: get_third[0], backgroundPosition:get_third[1]}">
    </div>
  <div class="interaction-area">
    <NamePerson/>
    <TextInGame/>
    <ButtonContinue/>
  </div>
</div>
</template>

<script>

import TextInGame from './TexInGame'
import ButtonContinue from './ButtonContinue'
import NamePerson from './NamePerson'
import { mapGetters } from 'vuex'


export default {
    name: 'InteractionArea',
    components: {
      TextInGame,
      ButtonContinue,
      NamePerson
    },
    computed: {
        ...mapGetters(['get_choice', 'get_name_person', 'get_first_sprite', 'get_second_sprite', 'get_third_sprite']),
        
        get_first(){
            const list_sprite = this.get_first_sprite
            if (list_sprite == '')
                return ['', '']
            else
            {
                const background = "url(" + require('@/assets/img/' + list_sprite[0]) + ")"
                const position =  list_sprite[1] + 'px ' + list_sprite[2] + 'px'
                return [background, position]
            }
        },
        get_second(){
            const list_sprite = this.get_second_sprite
            if (list_sprite == '')
            {
              return ['', '']
            }
            else
            {
                const background = "url(" + require('@/assets/img/' + list_sprite[0]) + ")"
                const position =  list_sprite[1] + 'px ' + list_sprite[2] + 'px'
                return [background, position]
            }
        },
        get_third(){
            const list_sprite = this.get_third_sprite
            if (list_sprite == '')
                return ['', '']
            else
            {
                const background = "url(" + require('@/assets/img/' + list_sprite[0]) + ")"
                const position =  list_sprite[1] + 'px ' + list_sprite[2] + 'px'
                return [background, position]
            }
        },
    },
}
</script>

<style>
  .interaction-area {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    height: 250px;
    width: 100%;
    background-color: rgba(0,0,0, 0.5);
    border: 2px solid #000000;
  }
.first-person, .second-person, .third-person {
    position: absolute;
    height: 700px;
    width: 500px;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .first-person{
      bottom: 226px;
      left: 0; 
  }
  .second-person{
      bottom: 226px;
      left: 310px; 
  }
  .third-person{
      bottom: 226px;
      right: 50px; 
  }
</style>