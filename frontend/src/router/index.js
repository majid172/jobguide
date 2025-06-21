import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue';
import TeacherView from '@/views/TeacherView.vue';
import BookView from '@/views/BookView.vue';
import PrivacyView from '@/views/PrivacyView.vue';
import TermsConditionView from '@/views/TermsConditionView.vue';
import MissionView from '@/views/MissionView.vue';
import DashboardView from '@/views/users/DashboardView.vue';
import SubCategoryView from '@/views/users/SubCategoryView.vue';
import SubjectView from '@/views/users/SubjectView.vue';
import ExamView from '@/views/users/ExamView.vue';
import McqExamView from '@/views/users/McqExamView.vue';

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
      path: '/teachers',
      name: 'teachers',
      component: TeacherView
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

    // auth users
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: "/subcategories/:id",
      name: "subcategories",
      component: SubCategoryView,
      meta: { requiresAuth: true },
    },
    {
      path: "/subcategory-to-subjects/:id",
      name: "subcategoryToSubjects",
      component: SubjectView,
      meta: { requiresAuth: true },
    },
    {
      path: "/subject-to-exams/:id",
      name: "subjectToExams",
      component: ExamView,
      meta: { requiresAuth: true },
    },
    {
      path: "/start-mcq-exam/:id",
      name: "startMcqExam",
      component: McqExamView,
      meta: { requiresAuth: true },
    },
  ],
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.meta.requiresAuth && !isAuthenticated) {

    next({ path: '/' });
  } else {
    next();
  }
});

export default router
