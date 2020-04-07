<template>

    <p class="text-in-game">
        {{get_text}}
    </p>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TextInGame',
    computed: {
        ...mapGetters(['get_text'])
    }
}
</script>

<style scoped>
.text-in-game{
    margin: 0;
    padding: 20px;
}
</style>