import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue'; // You'll create this or use your existing App.vue if it's simple
import PortfolioPage from '../views/PortfolioPage.vue'; // The component we discussed earlier

const routes = [
  {
    path: '/', // The URL path for this route
    name: 'Home', 
    component: Home 
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioPage
  },

];

const router = createRouter({
  history: createWebHistory(), // Recommended history mode for clean URLs (e.g., www.mysite.com/portfolio)
  routes, // Your defined routes
  scrollBehavior (to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    // This is good for user experience, especially on mobile
    return { top: 0 }
  }
});

// 4. Export the router instance
export default router;