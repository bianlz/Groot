<template>
	<div>
		<navheader></navheader>
		<div class="wrapper row-offcanvas row-offcanvas-left">
	    	<menubar></menubar>
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
  data () {
    return {};
  },
  components:{navheader,menubar,contents}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
