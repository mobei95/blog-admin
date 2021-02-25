import { createRouter, createWebHistory } from 'vue-router';
import layout from '../components/baseComponents/layout.vue';

const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue'),
      },
      {
        path: '/editor',
        name: 'editor',
        component: () => import('../views/editor'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
