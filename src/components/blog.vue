<template>
    <div class='blog col-12'>
        <sidebar v-bind:blogid="this.$route.params.id"></sidebar>
        <blogarticle v-bind:blogid="this.$route.params.id"></blogarticle>
    </div>
</template>

<script type="text/javascript">
    import sidebar from './sidebar';
    import blogarticle from './blogarticle';
    export default {
        data: function (){
            return {
            }
        },
        components: {
            sidebar,
            blogarticle
        },
        methods: {

        },
        mounted() {
            this.$store.commit('disableSidebar'); //alway disable sidebar first
        },
        computed: {
            // get_articles: function (){
            //     // console.log(this.articles);
            //     return this.articles;
            // }
        }
    }
</script>
<style scoped>

</style>
