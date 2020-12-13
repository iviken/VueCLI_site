<template>
	<div class="preZoomBoard" :class="`${isVisible}`">
		<div class="zoomBoard">
			<img :src="require(`../assets/imgs/fullSize/${pixName}.jpg`)" class="bigPix" @click="closePix">
		</div>
	</div>
</template>

<script>
export default {
  name: 'PixZoom',
  props: [
	'pixName',
	'isVisible'
  ],
  methods: {
	closePix(){
		//this.isVisible = 'setHidden';
		this.$emit('close-pix', 'setHidden');
	}
  }
}
</script>


<style scoped>
.setVisible {
	visibility: visible;
}

.setHidden {
	visibility: hidden;
}

.preZoomBoard {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 100;
	width: 100vw;
	height: 100vh;
	background: #3336;
}

.zoomBoard {
	
}

.bigPix{
	height: 65vh;
}

.transi {
  animation-name: Appearance;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(.1,-.6,.2,0);
}

@-webkit-keyframes Appearance {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@-o-keyframes Appearance {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@-moz-keyframes Appearance {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes Appearance {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

</style>
