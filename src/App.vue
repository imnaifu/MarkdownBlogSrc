<template>
    <div id="app">
        <appHeader></appHeader> 
        <appNavigator></appNavigator>
        <router-view class='container'></router-view>
        <appFooter></appFooter>
    </div>
</template>

<script>
import appHeader from './components/appHeader';
import appFooter from './components/appFooter';
import appNavigator from './components/nav';

export default {
  name: 'app',
  components: {
    appHeader,
    appNavigator,
    appFooter,    
  }
}
</script>

<style scoped>
    #app {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #4568dc, #b06ab3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .container {
        width: 100%;
    }
</style>
