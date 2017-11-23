<template>
        <!-- sidebar -->
        <div id='sidebar' v-bind:class="sidebarStatus">
            <div class='sidebar-header'>
                <div class='addNew' v-if="this.$store.state.enableAddNew">
                    <router-link to="/new">
                        <!-- <i class="fa fa-plus" aria-hidden="true"></i> --> Add New
                    </router-link>
                </div>
            </div>


            <ul class='list-unstyled components' v-if="getAllTypes">
                <li v-for="(val, key) in getAllTypes" v-bind:class="(key==getActiveType)?'active':''">
                    <a v-bind:href="(val.length>0)?('#' + key):'javascript:void(0);'" v-bind:data-toggle="(val.length>0)?'collapse':''" v-bind:aria-expanded="(val.length>0)?'false':''">{{key}}</a>
                    <ul v-if="(val.length>0)" class='list-unstyled collapse' v-bind:id='key' v-bind:class="(key==getActiveType)?'show':''">
                        <li v-for="(val2, key2) in val" v-bind:class="(val2['title']==getActiveTitle)?'active':''">
                            <!-- <router-link v-bind:to="'/blog/' + val2.id">{{val2.title}}</router-link> -->
                            <router-link v-bind:to="{name: 'blog_title', params: {title: val2.title}}">{{val2.title}}</router-link>
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
            }
        },
        methods: {
        
        },
        props:[
            'title'
        ],
        watch: {
            allArticles: function (val){
                console.log('123');
                this.getAllTypes();
            }
        },
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
        },
        mounted: function(){
            $(window).on('resize', function(){
                let win = $(this);
                if (win.width() < 768){
                    $('#sidebar').addClass('disable');
                    $('#sidebar').removeClass('active');
                }
            });
        }        
    }
</script>

<style scoped>
/* sidebar */
#sidebar{
    width: 270px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh; /*viewpoint height*/
    z-index: 998;
    /*background: #404E66;*/
    background-image: linear-gradient(180deg, #29323c 0%, #485563 100%);
    color: #fff;
    transition: all 0.3s; 
    padding: 30px 0 50px 0;
    overflow-x: hidden;
    overflow-y: auto;

}

#sidebar .sidebar-header{
    /*background: #283550;*/
    padding:0 20px
}

#sidebar ul.components{
    padding:20px 0;
    border-bottom: 1px solid #404E66;
}

#sidebar ul p{
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px 15px;
    font-size: 1.1em;
    display: block;
    font-weight: 300
}

#sidebar ul li a:hover {
    color: black;
    background: #8EA4BF;
}

#sidebar ul li.active a[aria-expanded="true"] {
    /*to replace hover effect for active and expanded element*/
    color: #fafafa;
    /*background: #404E66;*/
}

ul ul a {
    /* a inside */
    font-size: 0.9em !important;
    padding-left: 30px !important;
    /*background: #34425f;*/
}

.addNew {
    text-align: right;
}

li.active li.active a {
    color: black;
    background: #8EA4BF;
}

a.active {
    background: #D7DCE3;
}

#sidebar.active {
    display: block;
}
   
div.addNew a:hover {
    display: inline-block;
    color: #8EA4BF;
}   

a[data-toggle='collapse'] {
    /* not sure if used */
    position:relative;
}

a[aria-expanded='false']::before, a[aria-expanded='true']::before {
    content: '\f063'; arrow down
    display: block;
    position:absolute;
    right:20px;
    font-family: 'FontAwesome';
    font-size: 0.6em;
}

a[aria-expanded='true']::before {
    content: '\f062';
}

a, a:hover, a:focus {
    color:inherit;
    text-decoration: none;
    transition: all 0.3s;  
}
</style>