import Vue from 'vue'
import Router from 'vue-router'
import catalog from '../components/Catalog'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: catalog
        }
    ]
})