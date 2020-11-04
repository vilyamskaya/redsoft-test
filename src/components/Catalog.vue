<template>
    <div class="catalog">
        <h1 class="catalog__title">Картины эпохи Возрождения</h1>
        <div class="catalog__cards">
            <catalog-item
                    v-for="product in products"
                    :key="product.id"
                    :title="product.title"
                    :author="product.author"
                    :id="product.id"
                    :price="product.price"
                    :newPrice="product.newPrice"
                    :inStock="product.inStock"
                    :cartState="product.cartState"
            ></catalog-item>
        </div>
    </div>
</template>

<script>
    import Product from "./Product"

    export default {
        components: {
            'catalog-item': Product
        },
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    @import '../assets/styles/_variables';

    .catalog {
        display: flex;
        flex-direction: column;
        width: 125rem;
        min-height: calc(100vh - 9.6rem * 2);
        margin: auto;

        &__title {
            font-size: $size-lg;
            font-weight: $weight-bold;
            margin: 4.5rem 1.6rem 3.9rem;
            line-height: (1.5 * $size-lg);
        }

        &__cards {
            display: flex;
            justify-content: center;
        }
    }
</style>
