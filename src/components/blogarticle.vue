<template>
    <div class='article' v-bind:class="articleStatus">
        <h6 class='date'>Date: {{getOneDate}}</h6>   
        <h1 id='title'>{{getOneTitle}}</h1>
        <p v-html="getOneArticle"></p>
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
            }

        },
        computed: {
            getOneTitle(){
                if (this.$store.state.allDetails){
                    // console.log(this.articles);
                    return this.getTitleById(this.blogid);
                }
            },
            getOneDate(){
                if (this.$store.state.allDetails){
                    // console.log(this.articles);
                    return this.getDateById(this.blogid);
                }
            },
            getOneArticle(){
                // console.log(this.$store.state.allArticles);
                if (this.$store.state.allArticles){
                    // console.log(this.articles);
                    return converter.makeHtml(this.getArticleById(this.blogid));
                }
            },
            articleStatus(){
                console.log()
                return (this.$store.state.sidebarClass=='active')?'disable':'active';
            }
        },
        mounted() {
            // console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>
    .article {
        margin-left: 230px;
        padding: 30px 80px
    }

    .active {
        margin-left: 0
    }

    .date {
        text-align: right;
        margin:0;
        color: #656565;
    }
    h1#title {
        text-align: center;
    }

</style>