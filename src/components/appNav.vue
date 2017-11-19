<template>
    <ul class="nav justify-content-end">
        <li class='nav-item '>
            <a class="nav-link" v-on:click="toggle" v-bind:class="toggleButtonStatus" href='javascript:void(0);' title='toggle'>
                <i class="fa fa-bars" aria-hidden="true"></i>
            </a>
        </li>
        <li class='nav-item'>
            <router-link to="/me" class='nav-link' title='Me'>Me</router-link>
        </li>
        <li class='nav-item'>
            <router-link to="/resume" class='nav-link' title='Resume'>Resume</router-link>
        </li>
        <li class='nav-item'>
            <router-link to="/blog" class='nav-link' title='Blog'>Blog</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            // toggleButtonStatus: this.$store.state.toggleButtonStatus
        }
    },
    methods: {
        toggle(){
            this.$store.commit('toggleSidebar');
        }
    },
    computed: {
        toggleButtonStatus: function(){
            return this.$store.state.toggleButtonStatus
        }
    },
    mounted(){
        // console.log(this.$store.state.contentClass);
        // console.log(this.$store.state.sidebarClass);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
