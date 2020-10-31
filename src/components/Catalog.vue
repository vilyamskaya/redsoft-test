<template>
    <div class="cards">
        <h1>Картины эпохи Возрождения</h1>
        <catalog-item
                v-for="product in products"
                :key="product.id"
                :title="product.title"
                :author="product.author"
                :id="product.id"
                :img="product.img"
                :price="product.price"
                :newPrice="product.newPrice"
                :inStock="product.inStock"
        ></catalog-item>
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

</style>
