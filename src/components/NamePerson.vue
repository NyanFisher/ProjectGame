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
    left: 0;
    top: -55px;
    padding: 10px 20px;
    min-width: 180px;
    height: 19px;
    background-color: royalblue;
  }
</style>