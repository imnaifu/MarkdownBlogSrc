<template>
    <div class='blog'>
        <h1>This is blog</h1>
        <sidebar></sidebar>
    </div>
</template>

<script type="text/javascript">
    import sidebar from './sidebar';
    import axios from 'axios';

    export default {
        name: 'blog',
        components: {
            sidebar
        },
        methods: {
            fetchArticles: function (){
                axios.get('../../static/data/articles.json').then( (response) => {
                    this.articles = response.data
                }, (error) => {
                    console.log(error)
                })
            }  
        },
        mounted: function (){
            this.fetchArticles();
        }
    }
</script>
