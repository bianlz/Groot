<template>
	<div>
		<navheader></navheader>
		<div class="wrapper row-offcanvas row-offcanvas-left">
	    <menubar :img='img' :name='name' :menus='menus' ></menubar>
			<contents></contents>
	  </div>
	</div>
</template>
<script>

import navheader from '@/components/view/dashboard/navheader'
import menubar from '@/components/view/dashboard/menu'
import contents from '@/components/view/dashboard/content'

export default {
  name: 'Dashboard',
  prop:{img:'',name:'',menus:''},
  data () {
    return {
    	img:'',
    	name:'',
      menus:''
    };
  },
  mounted:function(){
  	this.img = this.$route.query.img;
  	this.name = this.$route.query.name;
  	// console.log(JSON.stringify(this.$route.params));
   //  this.img = this.$route.img;
  },
  components:{navheader,menubar,contents}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
