import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import { sum, minus } from './util.js'
import './assets/css/base.css'

// console.log(`sum:${sum(12, 40)}`);

Vue.config.productionTip = false

Vue.use(VueLazyload, {
    // preLoad: 1.3,
    // error: 'dist/error.png',
    loading: 'static/lazyload.jpg',
    // attempt: 1
})

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})