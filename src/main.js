import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import axios from 'axios'
import 'view-design/dist/styles/iview.css';
import './components/design.js'
import './assets/css/global.css';


// 配置axios
axios.defaults.baseURL = 'http://127.0.0.1:3001/'
    // 拦截请求
axios.interceptors.request.use(config => {
    return config;
});
// 拦截响应
axios.interceptors.response.use(config => {
    return config.data;
})
Vue.prototype.$http = axios;
// 使用animated动画插件
Vue.use(animated);



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')