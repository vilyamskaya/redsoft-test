<template>
    <button
            class="button"
            type="submit"
            :class="{ 'button__in-cart': cartState === 'in cart' }"
            @click="addToCart($event.target)"
    >
        <span v-if="cartState === 'not in cart'">Купить</span>
        <span v-else-if="cartState === 'in cart'">В корзине</span>
        <img v-else-if="cartState === 'loading'" :src="require('../assets/images/loader.svg')" alt="loading" class="button__loading">

    </button>
</template>

<script>
    export default {
        props: {
            id: Number,
            cartState: String
        },
        computed: {
            cart () {
                return this.$store.state.cart
            }
        },
        methods: {
            addToCart () {
                let item = this.$store.state.products.find(item => item.id === this.id)
                if(item.cartState !== 'not in cart') return
                this.$store.dispatch('addToCart', item)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles/_mixins';

    .button {
        @include normal-btn;
        &__in-cart {
            position: relative;
            background-color: $color-brown-in-cart;
            padding-left: 2.7rem;
            &:before {
                content: '';
                background: url("../../public/img/check.svg") 0 0 no-repeat;
                width: 1.6rem;
                height: 1.3rem;
                position: absolute;
                top: (4.8rem - 1.3rem) / 2;
                left: 1rem;
            }
            &:hover {
                background-color: $color-brown-in-cart;
                cursor: default;
            }
        }
        &__loading {
            margin: auto;
        }
    }
</style>