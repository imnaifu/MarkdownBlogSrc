<template>
	<div>
		<textarea id='simplemed'></textarea>
	</div>
</template>
<script>
	import SimpleMDE from 'simplemde';
	export default {
		mounted(){
			var simplemde = new SimpleMDE({ 
				element: document.getElementById("simplemed")
			});
		}
	}
</script>
