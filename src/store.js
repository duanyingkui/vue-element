import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const strict = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    strict,
    modules: {},
});
