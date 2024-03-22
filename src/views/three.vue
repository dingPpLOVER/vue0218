<template>
<<<<<<< HEAD
	<div ref="echartsRef" style="width: 600px; height: 400px;"></div>
	<button @click="getref">获取ref值</button>
	<div ref="dd">hello world !</div>
	<div :data-v="getv">{{abc}}</div>
	<div>{{message}}</div>
	<div>
		<button @click="numadd">点我+1</button>
		{{num}}
	</div>


</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import * as echarts from 'echarts';
	var num = ref(0)
	const echartsRef = ref(null)
	const message = ref(null)
	const dd = ref(null)
	function numadd(){
		num.value = num.value + 1
	}
	function getref() {
		message.value = dd.value
		console.log(dd.value)
	}
	const abc = ref(null)

	function getv() {
		abc.value = "你好456"
	}
	getv()
	onMounted(() => {
		const chart = echarts.init(echartsRef.value);
		const option = {
			// ECharts 配置项
			title: {
				text: 'ECharts 示例'
			},
			tooltip: {},
			xAxis: {
				data: ['A', 'B', 'C', 'D', 'E', 'F']
			},
			yAxis: {},
			series: [{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}]
		};

		chart.setOption(option);
	});
</script>

<style>
	/* 样式内容 */
=======
</template>

<script>
</script>

<style>
>>>>>>> 4fd9da1087ba67900f9da46041a5f97225da31bd
</style>