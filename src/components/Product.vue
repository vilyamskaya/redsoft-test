<template>
    <div class="product" :class="{'product__out-of-stock': !inStock}">
        <img :src="require(`../assets/images/image${id}.png`)" :alt="title" class="product__image"/>
        <div class="product__container">
            <h2 class="product__title">«{{ title }}» {{ author }}</h2>
            <div v-if="inStock" class="product__wrapper">
                <div class="product__wrapper-price">
                    <h3 :class="{'product__price-old': newPrice !== null,
                     'product__price': newPrice === null}">{{ price }}</h3>
                    <h3 class="product__price" v-if="newPrice !== null">{{ newPrice }}</h3>
                </div>
                <v-button class="product__button" :id="id" :cartState="cartState"></v-button>
            </div>
            <div class="product__sold" v-else>
                <p>Продана на аукционе</p>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseButton from "./BaseButton";

    export default {
        components: {
            'v-button': BaseButton
        },
        computed: {},
        props: {
            id: Number,
            img: String,
            title: String,
            author: String,
            price: String,
            newPrice: String || null,
            inStock: Boolean,
            cartState: String
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/_variables';

    .product {
        border: 1px solid $color-border;
        margin: 0 1.6rem;

        &:hover {
            border-color: $color-border-active;
        }

        &__container {
            padding: 2.4rem;
        }

        &__title {
            font-size: $size-md;
            line-height: (1.5 * $size-md);
            font-weight: $weight-normal;
            margin-bottom: 2.2rem;
        }

        &__image {
            width: 28rem;
            height: 16rem;
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-price {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }

        &__price {
            font-size: $size-sm;
            line-height: (1.5 * $size-sm);
            font-weight: $weight-bold;

            &-old {
                color: $color-old-price;
                font-weight: $weight-light;
                text-decoration: line-through;
            }
        }

        &__sold {
            display: flex;
            align-items: center;
            font-size: $size-sm;
            line-height: (1.5 * $size-sm);
            font-weight: $weight-bold;
            height: 4.8rem;
        }

        &__out-of-stock {
            opacity: .5;

            &:hover {
                border-color: $color-border;
            }
        }
    }
</style>