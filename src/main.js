// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //import Vue framework
// import Vuex from 'vuex'
import App from './App' //import root component
import router from './router' //import router setting


// Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app', //mount DOM
    router,
    template: '<App></App>', //this will replace the mounted element totally if has this 'template' string
    components: { 
        App
    },
})


