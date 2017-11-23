<template>
    <ul class="nav justify-content-end">
        <li class='nav-item' v-if="showToggleButtonByRoute" id='toggleButton'>
            <a class="nav-link" v-on:click="sidebarActive" href='javascript:void(0);'>
                <i class="fa fa-bars" aria-hidden="true"></i>
            </a>
        </li>
        <li class='nav-item'>
            <router-link to="/me" class='nav-link'>{{this.$store.state.navText[0]}}</router-link>
        </li>
        <li class='nav-item' v-if="this.$store.state.enableResume">
            <router-link to="/resume" class='nav-link'>{{this.$store.state.navText[1]}}</router-link>
        </li>
        <li class='nav-item'>
            <router-link to="/blog/" class='nav-link'>{{this.$store.state.navText[2]}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        sidebarActive(){
            this.$store.commit('setSidebar', 'active');
        }
    },
    computed: {
        showToggleButtonByRoute(){
            let route_name = this.$route.name;
            if (route_name === 'blog' || route_name === 'blog_id'){
                //only show button if under blog
                return true;
            }else{
                return false;
            }
        },
    },
    mounted(){

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav {
        margin: 15px 10px;
    }
    .navbar {
        position: fixed;
        top:0;
        left:0;
        /*margin: 0 -10px;*/
        width: 100%;
        height: 7%;
        /*z-index: 999;*/
        border:none;
        border-radius: 0;
        margin-bottom: 10px;
        /*box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);*/
    }

    .navbar-btn, .active{
        box-shadow: none;
        outline: none !important;
        border: none;
        background: transparent;
        color: black;
    }

    .disable {
        display: none;
    }

</style>
