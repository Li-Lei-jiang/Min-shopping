import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global'
import './filters'
import api from './http/api'
import ViewUI from 'view-design';
import dayjs from 'dayjs'
import "nprogress/nprogress.css";
import 'view-design/dist/styles/iview.css';

Vue.prototype.$api = api
Vue.prototype.$dayjs = dayjs
Vue.config.productionTip = false
Vue.use(ViewUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')