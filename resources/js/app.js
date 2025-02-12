import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(BootstrapVue);
Vue.use(FlashMessage);

Vue.config.productionTip = false



new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
