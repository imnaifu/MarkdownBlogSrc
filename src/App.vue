<template>
    <div id="app">
        <appNav></appNav>
        <div id='container'>   
            <router-view></router-view>
        </div> 
        <appFooter></appFooter>
    </div>
</template>

<script>
    import $ from "jquery";
    import Popper from "popper.js";
    window.Popper = Popper;
    window.$ = $;
    require('bootstrap');
    
    import appFooter from './components/app_footer';
    import appNav from './components/app_nav';


    export default {
        name: 'app',
        components: {   
            appNav,
            appFooter,    
        }
    }
</script>
