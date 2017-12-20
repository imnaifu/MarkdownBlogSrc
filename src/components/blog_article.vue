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
        <div class='article-inner' v-else-if="getTitle"><!-- normal article -->
            <p class='date'>{{getOneArticle.date}}</p>   
            <h1 id='title'>{{getOneArticle.title}}</h1>
            <div>
                <p class='article-text' v-html="$options.filters.md2html(getOneArticle.content, this.$store.state.imgPath)"></p>
            </div>
        </div>        
    </div>
</template>

<script type="text/javascript">
    export default {
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
            getTitle(){
                return this.$route.params.title;
            },
            getOneArticle(){
                if (this.$store.state.allArticlesFetched){
                    if (this.$store.state.articlesContent.hasOwnProperty(this.getTitle)){
                        return {
                            'title': this.getTitle,
                            'date': this.$store.state.articleInfo[this.getTitle]['date'],
                            'content': this.$store.state.articlesContent[this.getTitle]
                        }
                    }
                    else{
                        return {
                            'title': `Error 404 - '${this.getTitle}' not found`
                        }
                    }
                }else{
                     return {
                        'title': '',
                        'date': '',
                        'content': ''
                    }
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
        }
    }
</script>
