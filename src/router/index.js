import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '@/views/DashBoard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        name:'dashboard',
        component:DashBoard,
      },
      {
        path:'/register',
        name:'register',
        component:()=> import('@/views/Register.vue'),
      },
      {
        path:'/login',
        name:'login',
        component:()=> import('@/views/Login.vue'),
      },
      {
        path:'/shop/nike',
        name:'nikeproduct',
        component:()=> import('@/views/NikeProduct.vue'),
      }
  ]
})

export default router
