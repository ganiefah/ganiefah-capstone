import { createRouter, createWebHistory } from 'vue-router'
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
import HomeView from '../views/HomeView.vue'

const routes = [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter() {
        if (!cookies.get('LegitUser')) {
          router.push({ name: 'login' })
        }
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
      }
  },
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/ProductView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
      }
  },
  },
  {
    path: '/help',
    name: 'help',
    component: () => import( '../views/HelpView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
      }
  },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
      }
  },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
      }
  },
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import( '../views/ProfileView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
      }
  },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/CartView.vue'),
    beforeEnter() {
      if (!cookies.get('LegitUser')) {
        router.push({ name: 'login' })
      }
  },
  },
  {
    path: '/more',
    name: 'ViewMore',
    component: () => import( '../views/MoreView.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout', 
    component: () => import( '../views/CheckoutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
