import Home from './pages/Home.vue';
import About from './pages/About.vue';
import OurPeople from './pages/OurPeople.vue';
import { createRouter, createWebHistory } from 'vue-router';




const routes = [
  {
    path: '/',
    component: Home 
  },
  {
    path: '/about',
    component: About 
  },
  {
    path: '/ourPeople',
    component: OurPeople
  },
]

const router = createRouter({ 
  routes,
  history: createWebHistory()
  
})

export default router;






