import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/shutokudekimasendeshita',
    name:'shutokudekimasendeshita',
    component: () => import('@/views/Shutokudekimasendeshita.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
