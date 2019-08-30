export default {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ './views/home.vue'),
};
