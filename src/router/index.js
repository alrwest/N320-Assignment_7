import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Teams from '../views/TeamsView.vue'

//setting up our routes
const routes = [
  //path for home page
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //path to load user sessions
  {
    path: '/teams',
    name: 'teams',
    //lazy loading
    component: Teams
  }
]

//creating the router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
