<template>
	<aside class="right-side">
	  	<!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Edit User
            </h1>
            <ol class="breadcrumb">
                <li>
                    <a href="index.html">
                        <i class="fa fa-fw ti-home"></i> Dashboard
                    </a>
                </li>
                <li>
                    <a href="#"> Users</a>
                </li>
                <li class="active">
                    Edit User
                </li>
            </ol>
        </section>
        <!-- Main content -->
        <section class="content">
            <router-view></router-view>
        </section>
	</aside>
</template>
<script>
export default {
  name: 'Contents',
  data () {
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>