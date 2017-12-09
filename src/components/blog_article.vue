<template>
    <div id="blog_article" v-on:click="sidebarDisable">
        <div class='article-inner' v-if="showSearch"><!-- search result -->
            <ul v-if="hasSearchResult">
                <li v-for="(val, key) in getSearchResult">
                    <p v-on:click="clearResult()">
                        <router-link v-bind:to="encodeURI('/blog/' + key)">{{key}}</router-link>    
                    </p>
                    <p v-html="val.content"></p>
                    <!-- <p>{{val.content}}</p> -->
                </li>
            </ul>
            <h2 v-else>
                No results found for '{{this.$store.state.search}}'
            </h2>
        </div>  
        <div class='article-inner' v-else-if="getOneTitle"><!-- normal article -->
            <p class='date'>{{getOneDate}}</p>   
            <h1 id='title'>{{getOneTitle}}</h1>
            <div>
                <p class='article-text' v-html="getOneArticle"></p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import showdown from 'showdown';
    import showdownHighlight from 'showdown-highlight';

    // showdown.setFlavor('github'); //set global falvor
    const converter = new showdown.Converter({
        headerLevelStart: 2, //start with h2
        // literalMidWordUnderscores: true, 
        // literalMidWordAsterisks: true,
        strikethrough: true, //allow ~~a~~
        tables: true, 
        tasklists: true,
        smartIndentationFix: true,
        // simpleLineBreaks: true,
        requireSpaceBeforeHeadingText: true,
        openLinksInNewWindow: true,
        emoji: true,
        extensions: [showdownHighlight],
        parseImgDimensions: true
    
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
            },
            clearResult(){
                //make sure every time load a new article, go to the top of article
                window.scrollTo(0, 0);

                //clear search
                this.$store.commit('setSearch', null);
                this.$store.commit('setShowSearch', false);
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
            },
            showSearch(){
                return this.$store.state.searchResults.showSearch;
            },
            hasSearchResult(){
                return this.$store.state.searchResults.hasResult;
            },
            getSearchResult(){
                return this.$store.state.searchResults.results
            }
        },
        mounted() {
        }
    }
</script>
