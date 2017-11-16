<template>
    <div class='wrapper'>
        <!-- sidebar -->
        <nav id='sidebar'>
            <div class='sidebar-header'>
                <!-- <div class='full'><h3>{{sidebar.title.text}}</h3></div> -->
                <div class='full'><h3>sidebar</h3></div>

            </div>
<!-- 
            <ul class='list-unstyled components'>
                <p>{{sidebar.subtitle.text}}</p>
                <li v-for="(value, key) in sidebar.list" v-bind:class="value.active">
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


                <li class='active'>
                    <div><a href='#'><i class="" aria-hidden="true"></i> Home</a></div>
                </li>
                <li>
                    <div>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                            Pages
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#"></a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </li>
            </ul>

 -->
            <ul class='list-unstyled components'>
                <p>sidebar.subtitle.text</p>
                <li>
                    <a>
                        <i aria-hidden="true"></i> value.value
                    </a>
                    <ul class='collapse list-unstyled'>
                        <li>
                            <a>value2.value</a>
                        </li>
                    </ul>
                </li>


                <li class='active'>
                    <div><a href='#'><i class="" aria-hidden="true"></i> Home</a></div>
                </li>
                <li>
                    <div>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                            Pages
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#"></a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>
