<template>
    <div class='article'>
        <h1>This is container</h1>
        <h2>{{blogid}}</h2>
        <p>{{getOneArticle}}</p>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: [
            'blogid',
            'articles'
        ],
        data: function (){
            return {
                // articles: null
            }
        },
        methods: {
            getArticleById: function (id){
                // console.log(this.articles);
                return this.articles[id];
            }
        },
        computed: {
            getOneArticle: function (){
                if (this.articles){
                    return this.getArticleById(this.blogid);
                }
            }
        },
        mounted() {
            // console.log(this.$route.params.id);
        }
    }
</script>