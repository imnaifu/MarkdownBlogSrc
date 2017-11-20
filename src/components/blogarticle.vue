<template>
    <div class='article' v-on:click="sidebarDisable">  
        <div class='article-inner'>
            <p class='date'>Date: {{getOneDate}}</p>   
            <h1 id='title'>{{getOneTitle}}</h1>
            <p class='article-text' v-html="getOneArticle"></p>
        </div>
    </div>
</template>

<script type="text/javascript">
    import showdown from 'showdown';
    const converter = new showdown.Converter();

    export default {
        props: [
            'blogid',
        ],
        data: function (){
            return {
                // articles: this.$store.state.allArticles
                // details: this.$store.state.allDetails
            }
        },
        methods: {
            getTitleById: function (id){
                // console.log(this.articles);
                return this.$store.state.allDetails[id]['title'];
            },
            getDateById: function (id){
                // console.log(this.articles);
                let date = this.$store.state.allDetails[id]['date'];
                return date
            },
            getArticleById: function (id){
                // console.log(this.articles);
                return this.$store.state.allArticles[id];
            },

            //control of sidebar [not a good way]
            sidebarDisable(){
                if (this.$store.state.sidebarStatus == 'active'){
                    this.$store.commit('disableSidebar');
                }
            }

        },
        computed: {
            getOneTitle(){
                if (this.$store.state.allDetails){
                    return this.getTitleById(this.blogid);
                }
            },
            getOneDate(){
                if (this.$store.state.allDetails){
                    return this.getDateById(this.blogid);
                }
            },
            getOneArticle(){
                if (this.$store.state.allArticles){
                    let article = converter.makeHtml(this.getArticleById(this.blogid));
                    console.log(article);
                    let myRegex = /<img[^>]+src="?([^"\s]+)"?[^\/]*\/>/gm;
                    let src = myRegex.exec(article);
                    // let src = article.getElementByTagName('img');
                    console.log(src);
                    return article;
                }
            },
        },
        mounted() {
            // console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>
    .active {
        margin-left: 0
    }

    .date {
        font-size: 15px;
        text-align: right;
        margin: 5px 0 ;
        color: #656565;
    }
    h1#title {
        text-align: center;
    }


    .article-inner {
        margin:0 auto;
        padding:0 25px;
        max-width: 740px;
    }

    .article-text {
        padding: 30px 0 ;
        min-height: 75vh;
    }


</style>