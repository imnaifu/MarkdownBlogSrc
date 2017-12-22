// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'; //import Vue framework
import App from './App'; //import root component
import router from './router'; //import router setting
import store from './vuex/store.js';
import funcs from './assets/js/general_funcs.js';

Vue.config.productionTip = false;

Vue.filter('toUpper', funcs.toUpper);
Vue.filter('toLower', funcs.toLower);
Vue.filter('encodeURI', funcs.encodeURI);
Vue.filter('decodeURI', funcs.decodeURI);
Vue.filter('md2html', funcs.md2html);

/* eslint-disable no-new */
const vm = new Vue({
    el: '#app', //mount DOM
    router: router,
    store: store,
    template: '<App></App>', //this will replace the mounted element totally if has this 'template' string
    components: { 
        App
    },
    //fetch data when instance created and dom still not ready
    created(){
        this.$store.dispatch('actionFetch');
    }
});

