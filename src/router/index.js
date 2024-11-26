import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutUs from '../components/AboutUs.vue';
import Work from '../components/Work.vue';
import Production from '../components/Production.vue';
import ContactUs from '../components/ContactUs.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutUs },
    { path: '/work', name: 'Work', component: Work },
    { path: '/production', name: 'Production', component: Production },
    { path: '/contact', name: 'Contact', component: ContactUs },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;