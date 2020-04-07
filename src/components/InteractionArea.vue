<template>
  <div class="interaction-area">
    <NamePerson/>
    <TextInGame/>
    <ButtonContinue/>
  </div>
</template>

<script>

import TextInGame from './TexInGame'
import ButtonContinue from './ButtonContinue'
import NamePerson from './NamePerson'

export default {
    name: 'InteractionArea',
    components: {
      TextInGame,
      ButtonContinue,
      NamePerson
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
  }
</style>