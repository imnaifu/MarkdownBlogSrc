<template>
    <div class='blog col-12'>
        <sidebar></sidebar>
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
            // console.log(this.$route.params.id);
            this.$store.commit('activeTogglButton');
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
    .blog {
        /*width: 100%;*/
        /*margin-left: 15%;*/
    }
</style>
