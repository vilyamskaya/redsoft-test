<template>
    <div class="card" :class="{'out-of-stock': !inStock}">
        <img :src="img" :alt="title">
        <h2>«{{ title }}» {{ author }}</h2>
        <div v-if="inStock">
            <div class="price">
                <h3 :class="{'old-price': newPrice !== null}">{{ price }}</h3>
                <h3 v-if="newPrice !== null">{{ newPrice }}</h3>
            </div>
            <button
                    type="submit"
                    :class="{ 'btn-in-cart': inCart }"
                    @click="addToCart($event)"
            ><span v-if="inCart">В корзине</span>
                <span v-else>Купить</span>
            </button>
        </div>
        <div v-else>
            <p>Продана на аукционе</p>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            inCart () {
                return this.$store.getters.inCart
            }
        },
        props: {
            id: Number,
            img: String,
            title: String,
            author: String,
            price: String,
            newPrice: String || null,
            inStock: Boolean
        },
        methods: {
            addToCart(e) {
                this.$store.dispatch('addToCart', e)
            },
        }
    }
</script>

<style scoped lang="scss">

</style>