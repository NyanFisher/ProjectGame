<template>
    <ul>
        <li v-for="user in all_users" :key="user.nickname">

        </li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['all_users'])
    }
}
</script>

<style scoped>

</style>