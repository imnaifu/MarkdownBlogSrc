<template>
        <!-- sidebar -->
        <div id='sidebar' class="" v-bind:class="sidebarClass">
            <div class='sidebar-header'>
                <div class='full'><h3>sidebar</h3></div>
            </div>
            <p><router-link to="/new">New</router-link></p>
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

                <li v-for="(val, key) in type_directory">
                    <a href="">{{key}}</a>
                    <ul v-if="val.length" class='list-unstyled'>
                        <li v-for="(val2, key2) in val" >
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
        computed: {
            type_directory: function (){
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
                
                // console.log(final_directory);
                return final_directory;
            },
            sidebarClass: function (){
                return this.$store.state.sidebarClass;
            }            
        },
        mounted: function(){

        }        
    }
</script>

<style scoped>
/* sidebar */
#sidebar{
    width:230px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh; /*viewpoint height*/
    z-index: 998;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s; 
    /*position: -webkit-sticky;*/
    /*position: sticky;*/
}

#sidebar.disable{
    margin-left: -230px;
}

#sidebar .sidebar-header{
    padding: 20px;
    background: #6d7fcc;
}

#sidebar ul.components{
    padding:20px 0;
    border-bottom: 1px solid #47748b;
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
    color: #7386D5;
    background: #fff;
}

#sidebar ul li.active a[aria-expanded="true"] {
    /*to replace hover effect for acitve and expanded element*/
    color: #fff;
    background: #6d7fcc;
}
    
</style>