import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../components/Catalog'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: Catalog
        },
        {
            path: '/delivery',
            name: 'delivery',
            component: Catalog
        },
        {
            path: '/pay',
            name: 'pay',
            component: Catalog
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Catalog
        },
        {
            path: '/about',
            name: 'about',
            component: Catalog
        },
    ]
})