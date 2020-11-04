<template>
    <div class="wrap">
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";

    export default {
        components: {
            'v-header': Header,
            'v-footer': Footer
        }
    }
</script>

<style lang="scss">
    @import 'assets/styles/_variables';

    .wrap {
        background-color: $color-background;
    }
</style>
