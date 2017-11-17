<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="btn btn-info navbar-btn" v-on:click="toggle">
                    <span>Toggle</span>
                </button>
            </div>
            <div>
                <ul class="nav">
                    <li class='nav-item'><router-link to="/me" class='nav-link'>Me</router-link></li>
                    <li class='nav-item'><router-link to="/resume" class='nav-link'>Resume</router-link></li>
                    <li class='nav-item'><router-link to="/blog" class='nav-link'>Blog</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            // msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        toggle(){
            console.log(this.$store.commit('toggleSidebar'));
        }
    },
    mounted(){
        console.log(this.$store.state.contentClass);
        console.log(this.$store.state.sidebarClass);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
