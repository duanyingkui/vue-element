export default {
    path: '/',
    redirect: '/login',
    component: () => import(/* webpackChunkName: "home" */ '@/app.vue'),
    children: [
        {
            name: 'home',
            path: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/home.vue'),
        },
        {
            name: 'login',
            path: 'login',
            component: () => import(/* webpackChunkName: "home" */ './views/home.vue'),
        },
    ],
};
