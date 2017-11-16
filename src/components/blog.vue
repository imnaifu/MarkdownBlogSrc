<template>
    <div class='blog'>
        <h1>This is blog</h1>
        <sidebar></sidebar>
    </div>
</template>

<script type="text/javascript">
    import sidebar from './sidebar';
    export default {
        name: 'blog',
        components: {
            sidebar
        }
    }
</script>
