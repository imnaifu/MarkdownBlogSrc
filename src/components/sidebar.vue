<template>
    <div id="sidebar" v-bind:class="sidebarStatus">
        <div id='sidebar-header'>
            <input type='text' placeholder='Type to search' v-model="search" id='serarch_input'>
        </div>
        <ul class='list-unstyled components' v-if="articleList">
            <li v-for="(val, key) in articleList" v-bind:class="(key==getActiveType)?'active':''">
                <a v-bind:href="(val.length>0)?('#' + key.trim().replace(/ /g,'')):'javascript:void(0);'" 
                   v-bind:data-toggle="(val.length>0)?'collapse':''" 
                   v-bind:aria-expanded="(val.length>0)?'false':''">
                   {{key}}
                </a>

                <ul v-if="(val.length>0)" 
                    class='list-unstyled collapse' 
                    v-bind:id="key.trim().replace(/ /g,'')" 
                    v-bind:class="(key==getActiveType)?'show':''">

                    <li v-for="(val2, key2) in val" 
                        v-bind:class="(val2['title']==getTitle)?'active':''"
                        v-on:click="clearResult()">
                        <!-- <router-link v-bind:to="'/blog/' + val2.id">{{val2.title}}</router-link> -->
                        <router-link v-bind:to="{name: 'blog_title', params: {title: val2.title}}">
                            {{val2.title}}
                        </router-link>
                    </li>

                </ul>    
            </li>
        </ul>
        <!-- format here {"css": [{}, {}]} -->

    </div>
</template>

<script type="text/javascript">
    export default {
        data: function(){
            return {
                // search:''
            }
        },
        methods: {
            clearResult(){
                //make sure every time load a new article, go to the top of article
                window.scrollTo(0, 0);

                //clear search
                this.$store.commit('setSearch', null);
                this.$store.commit('setShowSearch', false);
            }
        },
        watch: {},
        computed: {
            getTitle(){
                return this.$route.params.title;
            },
            articleList(){
                return this.$store.getters.getArticleInfosGroupByType;
            },   
            sidebarStatus(){
                return this.$store.state.sidebarStatus;
            },
            getActiveType(){
                let type = '';
                if (this.$store.state.articleInfo && this.getTitle){
                    type = this.$store.state.articleInfo[this.getTitle]['type'];
                }
                return type;
            },       
            search: {
                get() {
                    return this.$store.state.search;
                },
                set(value) {
                    this.$store.dispatch('actionSetSearch', {
                        value:value
                    });                                
                }

            }
        },
        mounted: function(){

        }        
    }
</script>

