import Vue from 'vue';
import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const defaultOptions = {
    timeout: 60000,
    baseURL: isProduction ? '' : '/api',
    promptError: true, // 自动弹出错误信息判断
    headers: {
        'Content-Type': 'application/json',
    },
};

const request = axios.create({
    ...defaultOptions,
});

request.interceptors.request.use((options) => {
    const config = { ...options };
    // 发送请求前可加入设置信息
    return config;
});

request.interceptors.response.use((response) => {
    const { data } = response;
    if (data && !/^2\d{2}/.test(data.code)) {
        Vue.prototype.$Message.error({
            content: `${data.msg}`,
        });
        return Promise.reject(data);
    }
    return data;
}, (error) => {
    let reason = '';
    if (error.request && error.request.status !== 0) {
        reason = `${error.request.status}: ${error.response.data && error.response.data.error ? error.response.data.error : error.request.statusText}`;
    }
    Vue.prototype.$Message.error({
        content: reason || '服务器异常，请重新尝试',
    });
    return Promise.reject(new Error(reason));
});
export default request;
