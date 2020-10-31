import Vue from 'vue'
import Vuex from 'vuex'
//import {AxiosInstance as axios} from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {
                id: 0,
                img: require('/..assets/image0.png'),
                title: 'Рождение Венеры',
                author: 'Сандро Боттичелли',
                price: '2 000 000 $',
                newPrice: '1 000 000 $',
                inStock: true
            },
            {
                id: 1,
                img: require('../assets/image1.png'),
                title: 'Тайняя вечеря',
                author: 'Леонардо да Винчи',
                price: '3 000 000 $',
                newPrice: null,
                inStock: true
            },
            {
                id: 2,
                img: require('../assets/image2.png'),
                title: 'Сотворение Адама',
                author: 'Микеланджело',
                price: '6 000 000 $',
                newPrice: '5 000 000 $',
                inStock: true
            },
            {
                id: 3,
                img: require('../assets/image3.png'),
                title: 'Урок анатомии',
                author: 'Рембрандт',
                price: null,
                newPrice: null,
                inStock: false
            }
        ],
        cart: []
    },
    getters: {
        inCart (state, item) {
            return state.cart.includes(item)
        }
    },
    mutations: {
        pushToCart(state, item) {
            state.cart.push(item)
        }
    },
    actions: {
        // addToCart({commit}, item) {
        //     axios.get('https://jsonplaceholder.typicode.com/posts/1')
        //         .then(commit('pushToCart', item))
        //         .catch(err => console.log(err))
        // }
    }
})
