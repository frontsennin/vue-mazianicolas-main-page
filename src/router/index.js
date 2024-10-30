import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactView from '@/views/ContactView.vue';

const routes = [
    {
        path: '/', 
        redirect: '/about'
    },
    {
        path: '/about',
        name: "About",
        component: AboutView
    },
    {
        path: '/skills',
        name: "Skills",
        component: SkillsView
    },
    {
        path: '/contact',
        name: "Contact",
        component: ContactView
    },
    { path: '/:pathMatch(.*)*', redirect: '/about' }
  
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;