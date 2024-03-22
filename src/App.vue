<template id="Appvue">
	<div id="app">

		<!--路由视图-->
		<router-view />
		<!-- <router-link to='/first'>返回</router-link>| -->
		<div style="margin-top: 20px;">
			<router-link to='/large_screen' class="lin">large_screen</router-link>
			<router-link to='/index' class="lin">element-plus</router-link>
			<router-link to='/second' class="lin">layui-vue</router-link>
			<router-link to='/three' class="lin">echarts</router-link>
		</div>
		
		<!-- <button @click="ax">查看</button> -->

	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	#app{
		text-align: center;
	}
	.lin{
		margin-left: 8px;
		font-size: 16px;
		border: 1px solid;
		padding: 5px;
		border-radius: 5px;
	}
	.lin:hover{
		color: #0000c2;
	}
</style>