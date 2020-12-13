<template>
  <div id="app">
    <!--img alt="logo" src="./assets/portfolio_logo_mini.png"-->
    <Menu msg="" @select-menu="selectRadio"/>
	<Gallery :menuSelector="menuSelector" :greetings="greetings" @select-pix="selectPix"/>
	<PixZoom :pixName="pixName" :isVisible="isVisible" @close-pix="closePix"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Gallery from './components/Gallery.vue'
import PixZoom from './components/PixZoom.vue'

export default {
  name: 'App',
  components: {
    Menu,
	Gallery,
	PixZoom
  },
  data(){
	return {
		menuSelector: [],
		greetings: 'HELLO',
		pixName: 'p1',
		isVisible: 'setHidden'
	}
  },
  methods: {
	selectRadio(index){
		switch (index){
			case 'radio1':
				this.menuSelector = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12'];
				//document.body.style.backgroundImage = "url('imgs/back1.jpg')";
				this.greetings = '';
				//document.body.style.transition= "background 2s ease";
			break;
			case 'radio2':
				this.menuSelector = ['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12'];
				this.greetings = '';
			break;
			case 'radio3':
				this.menuSelector = ['m1','m2','m3','m4','m5','m6','m7','m8','m9','m10','m11','m12','m13','m14','m15'];
				this.greetings = '';
			break;
			case 'radio4':
				this.menuSelector = [];
				this.greetings = ['По вопросам сотрудничества звоните или пишите на Whatsapp: +7 977 6437154','----------------------------------------------------Сайт сделан на Vue----------------------------------------------------'];
			break;
		}
	},
	
	selectPix(pixName){
		this.pixName = pixName;
		this.isVisible = 'setVisible';
		console.log(pixName);
	},
	
	closePix(styleName){
		this.isVisible = styleName;
	}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}

body {
	overflow-x: hidden;
	background-image: url("./assets/back1.jpg");
}
/*	Для ПК	*/
@media (min-width:	1024px){

	body {
		overflow: hidden;
	}

}

</style>
