import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ('../views/login/login')
    },
    {
        path: "/signin",
        name: "signin",
        component: () =>
            import ('../views/signin/signin')
    },
    {
        path: "/shoppingcart",
        name: "shoppingcart",
        component: () =>
            import ('../views/shoppingcart/shoppingcart')
    },
]

const isPro = process.env.NODE_ENV === 'production'


const router = new VueRouter({
    mode: isPro ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
})

export default router