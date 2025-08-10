import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/counter',
      name: 'counter',

      component: () => import('../components/Counter.vue'),
    },
        {
      path: '/list-task',
      name: 'listTask',

      component: () => import('../components/ListTask.vue'),
    },
  
  ],
})

export default router
