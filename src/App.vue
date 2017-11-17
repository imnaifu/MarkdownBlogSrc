<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <div id='content' v-bind:class="contentClass">
            <appHeader></appHeader> 
            <appNav></appNav>
            <router-view class='container' ></router-view>
            <appFooter></appFooter>
        </div>
    </div>
</template>

<script>
import appHeader from './components/appHeader';
import appFooter from './components/appFooter';
import appNav from './components/appNav';
import store from './vuex/store.js'

export default {
    store,
    name: 'app',
    components: {   
        appHeader,
        appNav,
        appFooter,    
    },
    data(){
        return {

        }
    },
    computed: {
        contentClass: function (){
            return this.$store.state.contentClass
        }
    }
}


</script>

<style scoped>
    #app {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #4568dc, #b06ab3); 
    }
    .container {
        width: 100%;
    }
</style>
