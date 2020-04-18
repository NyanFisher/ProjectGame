<template>
<div>
    <button class="button-next" v-on:click="next_step" v-show="show_button" ref="next_step">
        Далее
    </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "ButtonContinue",
    computed: {
        ...mapGetters(['show_button'])
    },
    methods: {
        ...mapActions(['next_step'])
    },
    mounted: function () {
        this.$nextTick(function() {
            this.$refs.next_step.focus()
        })
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