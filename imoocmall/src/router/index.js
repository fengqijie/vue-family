import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/pages/GoodsList'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'GoodsList',
        component: GoodsList,
        // children: [{
        //         path: "Header",
        //         name: "Header",
        //         component: Header
        //     },
        //     {
        //         path: "Footer",
        //         name: "Footer",
        //         component: Footer
        //     }
        // ]
    }, ]
})