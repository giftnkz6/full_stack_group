import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/login',
    name: 'Log-in',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/userprofile',
    name: 'User Profile',
    component: () => import('../views/UserProfileView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
