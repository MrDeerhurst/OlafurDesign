import { createRouter, createWebHistory } from 'vue-router';
import PortfolioPage from '@/views/PortfolioPage.vue';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue') // Example home page
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioPage
  },
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  }
});

export default router;