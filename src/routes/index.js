import { createRouter,createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        component:()=> import('../views/Home-view.vue'),
        meta:{
            title:'Home'
        }
    },
    {
        path: '/AboutMe',
        component:()=> import('../views/About-view.vue'),
        meta:{
            title:'About Me'
        }

    },
    {
        path: '/ContactMe',
        component:()=> import('../views/Contact-view.vue'),
        meta:{
            title:'Contact Me'
        }

    },
    {
        path: '/Skills',
        component:()=> import('../views/Skills-view.vue'),
        meta:{
            title:'Skills'
        }

    }

];

const router = createRouter({
    history:createWebHistory(),
    routes : routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "Default Title";
    next();
});

export default router