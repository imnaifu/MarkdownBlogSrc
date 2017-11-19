<template>
    <div class=''>
        <h1>This is resume</h1>
    </div>
</template>
<script>
	export default {
		data(){
			return {
			}
		},
		mounted(){
			this.$store.commit('disableToggleButton');
		}
	}
</script>
