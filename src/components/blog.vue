<template>
    <div id="blog" class='col-12'>
        <sidebar v-bind:title="getArticleTitle"></sidebar>
        <blogarticle v-bind:title="getArticleTitle"></blogarticle>
    </div>
</template>

<script type="text/javascript">
    import sidebar from './sidebar';
    import blogarticle from './blog_article';
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
            this.$store.commit('setSidebar', 'disable'); //alway disable sidebar first
        },
        computed: {
            getArticleTitle: function (){
                let title = null;
                if (this.$route.params.title){
                    title = this.$route.params.title;
                }else{
                    let allArticleTitle = this.$store.state.allArticleTitle
                    if (allArticleTitle){
                        title = allArticleTitle[Math.floor(Math.random() * allArticleTitle.length)]; //random get one
                        this.$route.params.title = title;
                    }   
                }
                return title;
            }
        }
    }
</script>
