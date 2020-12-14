<template>
  <div class="hello board">
	<div v-for="(item, index) in menuSelector" :key="index" class="card transi">
		<img :src="require(`../assets/imgs/${item}.jpg`)" class="pix" @click="selectPix(item)">
	</div>
	<div v-for="(text, index) in greetings" :key="index" class="card text">
		{{text}}
	</div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: [
	'menuSelector',
	'greetings'
  ],
  methods: {
	selectPix(pixName){
		this.$emit('select-pix', pixName)
	}
  }
}
</script>


<style scoped>

.board {
	display: flex;
	flex-wrap: wrap;
	align-content: space-between;
	padding: 60px;
	align-items: center;
	justify-content: center;
}

.card {
	padding: 10px;
	
}

.pix {
	border: 2px solid #bbb;
	transition: 1s;
}

.pix:hover {
	border: 2px solid #444;
	transition: 1s;
}

.text {
	font-size: smaller;
	padding: 10px;
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
