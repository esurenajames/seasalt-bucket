import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Menu from '@/pages/Menu.vue';
import About from '@/pages/About.vue';
import Location from '@/pages/Location.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: Home 
  },
  { 
    path: '/menu', 
    name: 'menu',
    component: Menu 
  },
  { 
    path: '/about', 
    name: 'about',
    component: About 
  },
  { 
    path: '/location', 
    name: 'location',
    component: Location,
    props: route => ({ 
      selectedLocation: route.query.selected ? parseInt(route.query.selected) : 0 
    })
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If paths are the same (only query params changed), don't scroll
    if (to.path === from.path) {
      return false;
    }
    
    // If there's a saved position (like when using browser back/forward), use that
    if (savedPosition) {
      return savedPosition;
    }
    
    // For actual route changes, scroll to top
    return { top: 0 };
  },
});

export default router;