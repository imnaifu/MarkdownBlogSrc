<template>
    <div class="hello">
        <h1>msg</h1>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                        <i class="glyphicon glyphicon-align-left"></i>
                        <span>Toggle</span>
                    </button>
                </div>

                <div>
                    <ul class="nav">
                        <li class='nav-item'><router-link to="me" class='nav-link'>Me</router-link></li>
                        <li class='nav-item'><router-link to="resume" class='nav-link'>Resume</router-link></li>
                        <li class='nav-item'><router-link to="blog" class='nav-link'>Blog</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
// export default {
//   // name: 'app_navigator',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }
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
