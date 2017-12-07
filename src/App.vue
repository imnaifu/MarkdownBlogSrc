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
    import $ from "jquery";
    import Popper from "popper.js";
    window.Popper = Popper;
    window.$ = $;
    require('bootstrap');
    import appHeader from './components/app_header';
    import appFooter from './components/app_footer';
    import appNav from './components/app_nav';


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
            //actually this is also point to a data, with the get function set as below
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
        mounted: function(){},
    }
</script>
