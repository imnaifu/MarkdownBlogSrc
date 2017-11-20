<template>
        <!-- sidebar -->
        <div id='sidebar' v-bind:class="sidebarStatus">
            <div class='sidebar-header'>
                <!-- <div class='home'><h3>Home</h3></div> -->
                <div class='addNew'>
                    <router-link to="/new" type='button' class='btn btn-outline-dark btn-sm'>
                        <!-- <i class="fa fa-plus" aria-hidden="true"></i> --> Add New
                    </router-link>
                </div>
            </div>
            <ul class='list-unstyled components'>

<!--       
                 <li v-for="(value, key) in type_directory" v-bind:class="type.active">
                    <a v-bind:href="value.href"  
                        v-bind:data-toggle="value.has_sub?'collapse':''" 
                        v-bind:aria-expanded="value.has_sub?'false':''">
                        <i v-bind:class="value.icon" aria-hidden="true"></i> {{value.value}}
                    </a>
 
                    <ul v-if="value.sub" class='collapse list-unstyled' v-bind:id="value.sub_id">
                        <li v-for="(value2, key2) in value.sub" v-bind:class:="value2.active">
                            <a v-bind:href="value2.href">{{value2.value}}</a>
                        </li>
                    </ul>                
                </li>

 -->

                <li v-for="(val, key) in getAllTypes" v-bind:class="(key==getActiveType)?'active':''">
                    <a v-bind:href="(val.length>0)?('#' + key):'javascript:void(0);'" v-bind:data-toggle="(val.length>0)?'collapse':''" v-bind:aria-expanded="(val.length>0)?'false':''">{{key}}</a>
                    <ul v-if="(val.length>0)" class='list-unstyled collapse' v-bind:id='key' v-bind:class="(key==getActiveType)?'show':''">
                        <li v-for="(val2, key2) in val" v-bind:class="(val2['id']==getActiveId)?'active':''">
                            <!-- <router-link v-bind:to="'/blog/' + val2.id">{{val2.title}}</router-link> -->
                            <router-link v-bind:to="{name: 'blog_id', params: {id: val2.id}}">{{val2.title}}</router-link>
                        </li>
                    </ul>    
                </li>


<!--                 
                <li class='active'>
                    <div><a href='#'><i class="" aria-hidden="true"></i> Home</a></div>
                </li>
                <li>
                    <div>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                            
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#"></a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </li>
 -->          
            </ul>
        </div>
</template>

<script type="text/javascript">
    import axios from 'axios';
    export default {
        data: function(){
            return {
            }
        },
        methods: {
        },
        props:[
            'blogid'
        ],
        computed: {
            getAllTypes: function (){
                let final_directory = {}; //whole directory

                // only do this if exist
                if (this.$store.state.allTypes && this.$store.state.allDetails){
                    for (let i of this.$store.state.allTypes){
                        Object.defineProperty(final_directory, i, {
                            value: [],
                            writable: true,
                            enumerable: true,
                            configurable: true
                        });
                    }
                    for (let val of this.$store.state.allDetails){
                        final_directory[val.type].push(val);
                    }
                }
                
                return final_directory;
            },
            sidebarStatus: function (){
                return this.$store.state.sidebarStatus;
            },
            getActiveId(){
                let blogid = this.blogid;
                return blogid;
            },
            getActiveType(){
                let type = '';
                if (this.$store.state.allDetails){
                    type = this.$store.state.allDetails[this.blogid]['type'];
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
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh; /*viewpoint height*/
    z-index: 998;
    background: #404E66;
    color: #fff;
    transition: all 0.3s; 
}

#sidebar .sidebar-header{
    padding: 20px;
    background: #283550;
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
    padding: 10px;
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
    background: #404E66;
}

ul ul a {
    /* a inside */
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #34425f;
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
   
</style>