<template>
    <div class='blog'>
        <h1>This is blog</h1>
        <sidebar v-bind:articles="articles"></sidebar>
        <blogarticle v-bind:blogid="this.$route.params.id" v-bind:articles="articles"></blogarticle>
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios';
    import sidebar from './sidebar';
    import blogarticle from './blogarticle';
    export default {
        name: 'blog',
        data: function (){
            return {
                articles: null,
                id: null
            }
        },
        components: {
            sidebar,
            blogarticle
        },
        methods: {
            fetchArticles:  function() {
                axios.get('../../static/data/articles.json').then( (response) => {
                    this.articles = response.data;
                }, (error) => {
                    console.log(error)
                })
            }  
        },
        mounted() {
            this.fetchArticles();
            // console.log(this.$route.params.id);
        },
        computed: {
            // get_articles: function (){
            //     // console.log(this.articles);
            //     return this.articles;
            // }
        }
    }
</script>
