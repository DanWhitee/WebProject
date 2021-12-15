import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/index/index.vue'),
    children: [
      {
        path: 'ray',
        name: 'ray',
        component: () => import(/* webpackChunkName: "ray" */ '@/pages/index/ray/index.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
