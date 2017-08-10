import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../view/home/home.vue';
import product from '../view/product/product1.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/product',
      component: product
    },
  ]
})
