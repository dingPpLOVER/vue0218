<template>
	<div id="largeScreen">
		<div class="top">xxx智能业务大数据监控平台</div>
		<div class="bottom">
			<div class="boxleft">
				<div class="le_top">
					<div class="texttitle">
						<div class="titex">大厅等候办理人数</div>
					</div>
					<div class="le_topsin">
						<div class="waitnum">15</div>
						<div class="waitntext">业务1</div>
					</div>
					<div class="le_topsin">
						<div class="waitnum">20</div>
						<div class="waitntext">业务2</div>
					</div>
					<div class="le_topsin">
						<div class="waitnum">8</div>
						<div class="waitntext">业务3</div>
					</div>
				</div>
				<div class="le_cen">
					<div class="texttitle">
						<div class="titex">当日业务已办理人数</div>
					</div>
					<div ref="echartsRef" id="echarts1"></div>
				</div>
				<div class="le_bot">
					<div class="texttitle">
						<div class="titex">平均业务办理时间</div>
					</div>
					<div ref="echartsline" id="echartsline"></div>
				</div>
			</div>
			<div class="boxcenter">
				<div class="ce_top"></div>
				<div class="ce_bot"></div>
			</div>
			<div class="boxrigth">
				<div class="ri_top"></div>
				<div class="ri_bot"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	// import * as echarts from 'echarts';
	import {eacjs,eacline} from '../assets/echarts.js'
	const echartsRef = ref(null)
	const echartsline = ref(null)
	onMounted(() => {
		var data = [20, 30, 25]
		var minvalue = Math.min(...data)
		var echartsRefvalue = echartsRef.value
		eacjs(data,minvalue,echartsRefvalue)
		var echartslinevlaue = echartsline.value
		eacline(data,minvalue,echartslinevlaue)
	});
</script>

<style scoped>
	@import url('/public/css/largescreen.css');
</style>