import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/index/main'),
  },
  {
    path: '/databases',
    name: 'databases',
    component: () => import('@/pages/index/databases'),
  },
  {
    path: '/ray',
    name: 'ray',
    component: () => import('@/pages/index/ray'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
