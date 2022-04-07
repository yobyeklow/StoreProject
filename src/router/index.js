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
        path:'/api/register',
        name:'register',
        component:()=> import('@/views/Register.vue'),
      },
  ]
})

export default router
