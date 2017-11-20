<template>
    <div class='avatar'>
        <img v-bind:src="'../../static/data/img/' + getAvatarImg" alt="Wait for it ..." id='avatar'>
        <p>{{getMeText}}</p>
    </div>
</template>
<script>
	export default {
		data(){
			return {
			}
		},
		mounted(){

		},
		computed: {
			getAvatarImg(){
				if (this.$store.state.meImg){
					return this.$store.state.meImg;
				}else{
					return 'avatar.jpg'
				}
			},
			getMeText(){
				if (this.$store.state.meText){
					return this.$store.state.meText;
				}else{
					return "Hello I'm Blog Man."
				}
			}
		}
	}
</script>
<style scoped>
	.avatar {
		max-width: 50%;
		margin-top: 15vh;
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
