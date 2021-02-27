//Vanessa Gutierrez 02/27/2021
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Menu from './views/Menu.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/404.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/menu', component: Menu },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
