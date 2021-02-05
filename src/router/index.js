import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import singleFamily from '../views/singleFamily.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/family/:id',
    name: 'singleFamily',
    component: singleFamily,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
