export default {
    path: '/',
    redirect: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/app.vue'),
    children: [
        {
            name: 'login',
            path: 'login',
            component: () => import(/* webpackChunkName: "login" */ './views/login.vue'),
        },
    ],
};
