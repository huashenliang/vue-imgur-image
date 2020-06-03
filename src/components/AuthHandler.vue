<template>
    <div>
        Please wait
    </div>
</template>

<script>
import {mapActions} from 'vuex';

    export default {
        name: 'AuthHandler',
        created(){
            this.finalizeLogin(window.location.hash)
        },
        methods: {
            ...mapActions(['finalizeLogin'])
        }
    }
</script>

<style lang="scss" scoped>

</style>