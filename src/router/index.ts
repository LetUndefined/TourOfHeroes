import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import DashboardOverview from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: DashboardOverview,
        },
        {
          path: 'Heroes',
          name: 'Hero-list',
          component: () => import('@/views/HeroListView.vue'),
        },
        {
          path: 'Heroes/:id',
          name: 'Hero-details',
          component: () => import('@/views/HeroDetailsView.vue'),
        },
        {
          path: 'AddHeroes',
          name: 'Add-heroes',
          component: () => import('@/views/AddHeroes.vue'),
        },
      ],
    },
  ],
})

export default router
