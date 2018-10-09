// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from './views/Home.vue'

// Vue.use(Router);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})
