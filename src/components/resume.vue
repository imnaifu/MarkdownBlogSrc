<template>
    <div id="resume" v-if="this.$store.state.enableResume" 
        v-html="$options.filters.md2html(getResume, this.$store.state.imgPath)"></div>
</template>
<script>
    import showdown from 'showdown';
    const converter = new showdown.Converter();

	export default {
        computed: {
            getResume(){
                return this.$store.state.resumeData;
            }
        }
	}
</script>
