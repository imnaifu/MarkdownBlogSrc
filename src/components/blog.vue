<template>
    <div class='blog col-12'>
        <sidebar v-bind:title="getArticleTitle"></sidebar>
        <blogarticle v-bind:title="getArticleTitle"></blogarticle>
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
            getArticleTitle: function (){

                let title = null;
                if (this.$route.params.title){
                    title = this.$route.params.title;
                }else{
                    // console.log(this.$store.state.defaultArticleTitle);
                    if (this.$store.state.defaultArticleTitle){
                        title = this.$store.state.defaultArticleTitle;
                    }
                }
                return title;
            }
        }
    }
</script>
<style scoped>

</style>
