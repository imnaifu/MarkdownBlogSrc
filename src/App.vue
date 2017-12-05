<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <div class='contianer-fluid' v-bind:class="contentClass">
            <appHeader></appHeader>
            <appNav></appNav>
            <div class='row content'>   
                <router-view></router-view>
            </div> 
            <appFooter>{{addhighlight}}</appFooter>
        </div>
    </div>
</template>

<script>
    import appHeader from './components/appHeader';
    import appFooter from './components/appFooter';
    import appNav from './components/appNav';


    export default {
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
            },
            addhighlight: function (){
                if (this.$store.state.allArticlesFetched){
                    $('pre code').each(function(i, block) {
                        hljs.highlightBlock(block);
                    });                    
                }
            }
        },
        mounted: function(){

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
    padding-bottom: 40px;
}

#content.active {
    /*width: 100%;*/
}

</style>
