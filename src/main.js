import Vue from 'vue';
// import '@/common/filters';
import '@/common/assets/styles/index.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
