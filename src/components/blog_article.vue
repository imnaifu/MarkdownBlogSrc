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
    export default {
        props:{
            title: {
                type: String, //type checking here
                required: true //must have 
            }
        },
        data() {
            return {
                allArticles: this.$store.state.allArticles,
                title: this.$route.params.title
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
        created() {
            // //get article 
            
            // axios.get(state.articlePath +　article.filename).then((response1) => {
            //     store.commit('setAllArticles',  {
            //         "title": article.title,    
            //         "content":response1.data
            //     });
            //     if (i == len-1){
            //         //set last article the nest article
            //         store.commit('setNewestArticle', article.title);
            //         //set it true when complete getting the last one
            //         store.commit('setAllArticlesFetched', true);
            //     }
            // }, (error1) => {
            //     alert("Error getting " + article.filename 
            //           + "\nPlease check article_info.json" );
            //     console.log(error1);
            // });

        }
    }
</script>
