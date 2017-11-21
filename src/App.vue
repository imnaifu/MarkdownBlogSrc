<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <div class='contianer-fluid' v-bind:class="contentClass">
            <appHeader></appHeader>
            <appNav></appNav>
            <div class='row content'>   
                <router-view></router-view>
            </div> 
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
        methods: {

        },
        data(){
            return {

            }
        },
        computed: {
            contentClass: function (){
                return this.$store.state.contentClass
            }
        },
        mounted: function(){
            this.$store.commit('fetchConfig');
            this.$store.commit('fetchAllDetailsAndArticles');

        }
    }
</script>

<style scoped>
/* content */   
.content {
    display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
}

#content.active {
    /*width: 100%;*/
}

</style>
