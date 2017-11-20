<template>
    <div class='resume' v-if="this.$store.state.enableResume" v-html="getResume">

    </div>
</template>
<script>
    import showdown from 'showdown';
    const converter = new showdown.Converter();

	export default {
		data(){
			return {
			}
		},
		mounted(){

		},
        computed: {
            getResume(){
                if (this.$store.state.resumeData){
                    return converter.makeHtml(this.$store.state.resumeData);
                }
            },
        }

	}
</script>
<style scoped>
.resume {
    margin:0 auto;
    padding:50px 25px 25px 25px;
    max-width: 740px;
}
</style>