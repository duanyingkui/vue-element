import Vue from 'vue';
// import '@/common/filters';
import '@/common/assets/styles/index.scss';
import App from './app.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
