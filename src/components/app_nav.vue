<template>
    <div id="app_nav">
        <ul id='navbar'>
            <li class='nav-item' v-if="showToggleButtonByRoute" id='toggleButton'>
                <a class="nav-link" v-on:click="sidebarActive" href='javascript:void(0);'>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
            </li>
            <li class='nav-item'>
                <router-link to="/me" class='nav-link'>{{getNavText[0]}}</router-link>
            </li>
            <li class='nav-item' v-if="this.$store.state.enableResume">
                <router-link to="/resume" class='nav-link'>{{getNavText[1]}}</router-link>
            </li>
            <li class='nav-item'>
                <router-link to="/blog/" class='nav-link'>{{getNavText[2]}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        sidebarActive(){
            this.$store.commit('setSidebar', 'active');
        }
    },
    computed: {
        showToggleButtonByRoute(){
            let route_name = this.$route.name;
            if (route_name === 'blog_title'){
                //only show button if under blog
                return true;
            }else{
                return false;
            }
        },
        getNavText(){
            return this.$store.state.navText;
        }
    }
}
</script>
