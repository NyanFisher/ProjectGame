<template>
<div>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    :aria-labelledby="iconName"
    role="presentation"
  ></svg>
    <button class="button-next" v-on:click="next_step" v-on:keyup.right="next_step" v-show="show_button">
        Next
    </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "ButtonContinue",
    data() {
        return {
            width: 20,
            height: 20,
            iconName: 'hel'
        }
    },
    computed: {
        ...mapGetters(['show_button'])
    },
    methods: {
        ...mapActions(['next_step'])
    }
}
</script>

<style scoped>
.button-next{
    position: absolute;
    padding: 5px 20px;
    bottom: 10px;
    right: 10px;

}
</style>