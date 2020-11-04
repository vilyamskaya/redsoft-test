import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
let cart = localStorage.getItem('cart');
let products = localStorage.getItem('products');

export default new Vuex.Store({
    state: {
        products: products ? JSON.parse(products) : [
            {
                id: 0,
                title: 'Рождение Венеры',
                author: 'Сандро Боттичелли',
                price: '2 000 000 $',
                newPrice: '1 000 000 $',
                inStock: true,
                cartState: 'not in cart'
            },
            {
                id: 1,
                title: 'Тайняя вечеря',
                author: 'Леонардо да Винчи',
                price: '3 000 000 $',
                newPrice: null,
                inStock: true,
                cartState: 'not in cart'
            },
            {
                id: 2,
                title: 'Сотворение Адама',
                author: 'Микеланджело',
                price: '6 000 000 $',
                newPrice: '5 000 000 $',
                inStock: true,
                cartState: 'not in cart'
            },
            {
                id: 3,
                title: 'Урок анатомии',
                author: 'Рембрандт',
                price: null,
                newPrice: null,
                inStock: false,
                cartState: 'not in cart'
            }
        ],
        cart: cart ? JSON.parse(cart) : []
    },
    getters: {
    },
    mutations: {
        pushToCart(state, item) {
            item.cartState = 'in cart'
            state.cart.push(item)
        },
        saveCart (state) {
            localStorage.setItem('cart', JSON.stringify(state.cart))
            localStorage.setItem('products', JSON.stringify(state.products))
        }
    },
    actions: {
        addToCart({commit}, item) {
            item.cartState = 'loading'
            setTimeout(() => axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(commit('pushToCart', item))
                .then(commit('saveCart'))
                .catch(err => console.log(err)), 2000)
        }
    }
})
