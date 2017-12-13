// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue' //import Vue framework
import App from './App' //import root component
import router from './router' //import router setting
import store from './vuex/store.js'

Vue.config.productionTip = false;

/* eslint-disable no-new */
const vm = new Vue({
    el: '#app', //mount DOM
    router: router,
    store: store,
    template: '<App></App>', //this will replace the mounted element totally if has this 'template' string
    components: { 
        App
    },
    created: function() {
       this.$store.dispatch('actionFetch');
    }
});

Vue.filter('encodeURI', function(value){
    return encodeURI(value);
});

Vue.filter('decodeURI', function(value){
    return decodeURI(value);
});

