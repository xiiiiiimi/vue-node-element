import Vue from 'vue'
import App from './App.vue'
//-- element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

//-- view-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './router/router';
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

//-- create vue
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
