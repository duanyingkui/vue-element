import Vue from 'vue';
import Router from 'vue-router';
import loginRouter from '@/apps/login/router';
import homeRouter from '@/apps/home/router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        loginRouter,
        homeRouter,
    ],
});
