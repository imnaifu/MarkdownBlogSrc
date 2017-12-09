<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <div>
            <appHeader></appHeader>
            <appNav></appNav>
            <div>   
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
