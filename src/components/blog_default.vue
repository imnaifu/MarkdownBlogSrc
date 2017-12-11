<template>
    <div id="blog_default">
        <div class="wrapper">
            <div v-for="(val, key) in getAllArticleInfos" class='flex-item'>
                <h1>{{key}}</h1>
                <ul>
                    <li v-for="(val2, key2) in val">
                        <router-link v-bind:to="{name: 'blog_title', params: {title: val2.title}}">
                            {{val2.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        computed:{
            getAllArticleInfos: function (){
                return this.$store.getters.getAllArticleInfos;
            }
        }
    }
</script>
