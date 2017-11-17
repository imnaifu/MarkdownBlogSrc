<template>
    <div class='wrapper'>
        <!-- sidebar -->
        <nav id='sidebar' v-bind:class="sidebarClass">
            <div class='sidebar-header'>
                <!-- <div class='full'><h3>{{sidebar.title.text}}</h3></div> -->
                <div class='full'><h3>sidebar</h3></div>

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
        </nav>
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios';
    export default {
        data: function(){
            return {
                types: '',
                directories: ''

            }
        },
        methods: {
            fetchTypes: function (){
                axios.get('../../static/data/types.json').then( (response) => {
                    this.types = Object.values(response.data.types);
                    // console.log(this.types);
                }, (error) => {
                    console.log(error)
                })
            },
            fetchDirectories: function (){
                axios.get('../../static/data/directories.json').then( (response) => {
                    this.directories = Object.values(response.data);
                    // console.log(this.directories);
                }, (error) => {
                    console.log(error)
                })
            }
        },
        computed: {
            type_directory: function (){
                let final_directory = {}; //whole directory
                for (let i of this.types){
                    Object.defineProperty(final_directory, i, {
                        value: [],
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                for (let val of this.directories){
                    final_directory[val.type].push(val);
                }
                // console.log(final_directory);
                return final_directory;
            },
            sidebarClass: function (){
                return this.$store.state.sidebarClass;
            }            
        },
        mounted: function(){
            this.fetchTypes();
            this.fetchDirectories();
        }        
    }
</script>

