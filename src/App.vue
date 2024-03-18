<template>
	<div id="app">

		<!--路由视图-->
		<router-view />
		<!-- <router-link to='/first'>返回</router-link>| -->
		<router-link to='/index'>第1页</router-link>|
		<router-link to='/second'>第2页</router-link>
		<!-- <button @click="ax">查看</button> -->

	</div>
</template>

<script>
	export default {
		name: "App",

	};
</script>

<style>
	#app{
		
		text-align: center;
	}
</style>