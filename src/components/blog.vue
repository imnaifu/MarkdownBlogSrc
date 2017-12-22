<template>
    <div id="blog">
        <sidebar v-bind:title="getArticleTitle"></sidebar>
        <blogarticle></blogarticle>
    </div>
</template>

<script type="text/javascript">
    import sidebar from './sidebar';
    import blogarticle from './blog_article';
    export default {
        components: {
            sidebar,
            blogarticle
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
                    //random get one
                    let allArticleTitle = this.$store.state.allArticleTitle
                    if (allArticleTitle){
                        title = allArticleTitle[Math.floor(Math.random() * allArticleTitle.length)]; 
                        this.$route.params.title = title;
                    }   
                }
                return title;
            }
        }
    }
</script>
