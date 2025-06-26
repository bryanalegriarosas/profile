import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue'),
      meta: { title: 'Inicio' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/projects/ProjectsView.vue'),
      meta: { title: 'Proyectos' }
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('@/views/skills/SkillsView.vue'),
      meta: { title: 'Habilidades' }
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('@/views/experience/ExperienceView.vue'),
      meta: { title: 'Experiencia' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact/ContactView.vue'),
      meta: { title: 'Contacto' }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
})

// Cambiar el título de la página según la ruta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | Mi Portafolio` : 'Mi Portafolio'
  next()
})

export default router
