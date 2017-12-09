<template>
    <div id="sidebar" v-bind:class="sidebarStatus">
        <div class='sidebar-header'>
            <div class='search'>
                <input type='text' placeholder='Type to search' v-model="search" id='serarch_input'>
            </div>
        </div>
        <hr>

        <ul class='list-unstyled components' v-if="getAllTypes">
            <li v-for="(val, key) in getAllTypes" v-bind:class="(key==getActiveType)?'active':''">
                <a v-bind:href="(val.length>0)?('#' + key.trim().replace(' ','')):'javascript:void(0);'" 
                   v-bind:data-toggle="(val.length>0)?'collapse':''" 
                   v-bind:aria-expanded="(val.length>0)?'false':''">
                   {{key}}
                </a>

                <ul v-if="(val.length>0)" 
                    class='list-unstyled collapse' 
                    v-bind:id="key.trim().replace(' ','')" 
                    v-bind:class="(key==getActiveType)?'show':''">

                    <li v-for="(val2, key2) in val" 
                        v-bind:class="(val2['title']==getActiveTitle)?'active':''"
                        v-on:click="clearResult()">
                        <!-- <router-link v-bind:to="'/blog/' + val2.id">{{val2.title}}</router-link> -->
                        <router-link v-bind:to="{name: 'blog_title', params: {title: val2.title}}">
                            {{val2.title}}
                        </router-link>
                    </li>

                </ul>    
            </li>
        </ul>
        <!-- fromat here {"css": [{}, {}]} -->

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
        props:[
            'title'
        ],
        watch: {},
        computed: {
             getAllTypes: function (){
                let final_directory = {}; //whole directory

                // only do this if exist
                if (this.$store.state.allArticlesFetched){
                    for (let i of this.$store.state.allTypes){
                        if (!final_directory[i]){
                            Object.defineProperty(final_directory, i, {
                                value: [],
                                writable: true,
                                enumerable: true,
                                configurable: true
                            });                            
                        }
                    }

                    for (let val of this.$store.state.allArticleTitle){
                        let articleDetails = this.$store.state.allDetails[val];
                        final_directory[articleDetails['type']].push(articleDetails); 
                    }
                }
                return final_directory;
            },   
            sidebarStatus: function (){
                return this.$store.state.sidebarStatus;
            },
            getActiveTitle(){
                if (this.title){
                    return this.title;
                }
            },
            getActiveType(){
                let type = '';
                if (this.$store.state.allDetails && this.title){
                    type = this.$store.state.allDetails[this.title]['type'];
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

