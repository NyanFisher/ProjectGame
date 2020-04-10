<template>
    <p class="name-person"> 
        {{get_name_person}}
    </p>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'NamePerson',
    computed: {
        ...mapGetters(['get_name_person']),
    }
}
</script>

<style>
  .name-person{
    position: inherit;
    left: -2px;
    top: -40px;
    padding: 5px 100px 10px 20px;
    margin: 0;
    min-width: 300px;
    height: 40px;
    background-color: rgba(0,0,0, 0.5);
    border: 2px solid #000000;
    border-top-right-radius: 45%;
    font-size: 30px;
  }
</style>