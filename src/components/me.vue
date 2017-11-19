<template>
    <div class='avatar'>
        <img src="../assets/avatar.jpg" alt="Me" id='avatar'>
        <p>Hi, I'm Naifu.</p>
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
<style scoped>
	.avatar {
		max-width: 50%;
		margin-top: 130px;
	}
	#avatar {
		width: 200px;
		height: 200px;
		margin:auto;
		display: block;	
		border-radius: 50%;
	}
	p{
		font-size: 50px;
		text-align: center;
	}
</style>
