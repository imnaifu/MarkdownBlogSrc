<template>
    <div class='article' v-on:click="sidebarDisable">  
        <div class='article-inner' v-if="getOneTitle">
            <p class='date'>Date: {{getOneDate}}</p>   
            <h1 id='title'>{{getOneTitle}}</h1>
            <div>
                <p class='article-text' v-html="getOneArticle"></p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import showdown from 'showdown';

    showdown.setFlavor('github'); //set global falvor
    const converter = new showdown.Converter({
        headerLevelStart: 2, //start with h2
        // literalMidWordUnderscores: true, 
        // literalMidWordAsterisks: true,
        strikethrough: true, //allow ~~a~~
        tables: true, 
        tasklists: true,
        smartIndentationFix: true,
        simpleLineBreaks: true,
        requireSpaceBeforeHeadingText: true,
        openLinksInNewWindow: true,
        emoji: true
    
    });

    export default {
        props: [
            'title',
        ],
        data: function (){
            return {
                allArticles: this.$store.state.allArticles
            }
        },
        methods: {
            //control of sidebar [not a good way]
            sidebarDisable(){
                if (this.$store.state.sidebarStatus == 'active'){
                    this.$store.commit('setSidebar', 'disable');
                }
            }

        },
        computed: {
            getOneTitle(){
                if (this.title){
                    return this.title;
                }
            },
            getOneDate(){
                if (this.$store.state.allArticlesFetched){
                    return this.$store.state.allDetails[this.title].date;
                }
            },
            getOneArticle(){
                if (this.$store.state.allArticlesFetched){
                    let article = converter.makeHtml(this.$store.state.allArticles[this.title]);
                    //add path to img using regex
                    let myRegex = /<img[^>]+src="?([^"\s]+)"?[^\/]*\/>/g;
                    let src = '';
                    let imgPath = this.$store.state.imgPath;

                    while ( src = myRegex.exec(article) ){
                        let img = src[1];
                        //escape outside image
                        if (!img.startsWith('http') && !img.startsWith('https')){
                            article = article.replace(src[1], imgPath + src[1]);
                        }
                    }

                    return article;
                }
            }
        },
        mounted() {

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
    
    .article a, a:hover {
        color: black;
        font-weight:500;
    }
</style>