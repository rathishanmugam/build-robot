import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import pinDirective from './shared/pin-directive';
import currencyFilter from './shared/currency-filter';


Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
