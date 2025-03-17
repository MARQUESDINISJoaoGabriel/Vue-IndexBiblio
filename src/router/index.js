import { createRouter, createWebHistory } from 'vue-router';
import Library from '../views/Library.vue';
import Add from '../views/Add.vue';
import Favorites from '../views/Favorites.vue';

const routes = [
  { path: '/library', component: Library },
  { path: '/add', component: Add },
  { path: '/favorites', component: Favorites },
  { path: '/', redirect: "/library"}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
