import JDD from '../src/entry'
import App from './App.vue'
import Vue from 'vue'
import routes from './router';
import VueRouter from 'vue-router';
Vue.use(JDD);
// Vue.component('jdd-button',JDD.Button)
const router=new VueRouter({
    router,
    mode:'history'
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})