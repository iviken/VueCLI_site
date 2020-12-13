<template>
  <div class="hello subMenu">
	<div class="menu transi">
		<h1>{{ msg }}</h1>
		<a href="index.html"><img alt="logo" src="@/assets/imgs/portfolio_logo_bw.png"></a>
		<ul>
			<li>
				<div class="form_radio_btn" @click="selectRadio('radio1')">
					<input id="radio1" type="radio" name="radio" value="1">
					<label for="radio1">PHOTO GALLERY</label>
				</div>
			</li>
			<li>
				<div class="form_radio_btn" @click="selectRadio('radio2')">
					<input id="radio2" type="radio" name="radio" value="2">
					<label for="radio2">ASSEMBLY INSTRUCTIONS</label>
				</div>
			</li>
			<li>
				<div class="form_radio_btn" @click="selectRadio('radio3')">
					<input id="radio3" type="radio" name="radio" value="3">
					<label for="radio3">METAL STRUCTURES</label>
				</div>
			</li>
			<li>
				<div class="form_radio_btn" @click="selectRadio('radio4')">
					<input id="radio4" type="radio" name="radio" value="4">
					<label for="radio4">COLLABORATION</label>
				</div>
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  },
  methods: {
	selectRadio(index){
		this.$emit('select-menu',index)
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subMenu{
	display: flex;
	align-items: center;
	justify-content: center;
}

.menu{
	background: #fff6;
	width: 50%;
	
}

.form_radio_btn input[type=radio] {
	display: none;
}

.form_radio_btn label{
	font-size: 9pt;
	color: #444;
	transition: 0.5s;
}

.form_radio_btn label:hover{
	color: #777;
	transition: 0.5s;
}

.form_radio_btn input[type=radio]:checked+label {
	color: #111;
	transition:	1s;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
