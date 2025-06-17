import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue';
import BookView from '@/views/BookView.vue';
import PrivacyView from '@/views/PrivacyView.vue';
import TermsConditionView from '@/views/TermsConditionView.vue';
import MissionView from '@/views/MissionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/books',
      name: 'books',
      component: BookView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy_policy',
      component: PrivacyView
    },
    {
      path: '/terms-condition',
      name: 'terms_condition',
      component: TermsConditionView
    },
    {
      path: '/mission-vision',
      name: 'mission_vision',
      component: MissionView
    },
  ],
})

export default router
