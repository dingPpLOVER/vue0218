import * as echarts from 'echarts';

function eacjs(data, minvalue, echartsRefvalue) {
	const chart = echarts.init(echartsRefvalue);
	const option = {
		// ECharts 配置项

		tooltip: {},
		xAxis: {
			data: ['业务1', '业务2', '业务3'],
			axisTick: {
				show: true // 将此处改为 true 则显示刻度线
			},
			axisLine: {
				lineStyle: {
					color: '#cccccc' // 修改为需要的颜色
				}
			}
		},
		yAxis: {
			axisTick: {
				show: true // 将此处改为 true 则显示刻度线
			},
			splitLine: {
				show: false // 不显示y轴网格线
			},
			axisLine: {
				show: true, // 显示Y轴轴线
				lineStyle: {
					color: '#cccccc' // 修改为需要的颜色
				}
			},
			min: minvalue - 5
		},
		series: [{
			name: '销量',
			type: 'bar',
			data: data,
			itemStyle: { //柱形圆角
				normal: {
					borderRadius: [10, 10, 0, 0] //位置左上右上右下左下
				}
			}

		}]
	};
	chart.setOption(option);
}

function eacline(data, minvalue, echartslinevlaue) {
	const chart = echarts.init(echartslinevlaue);
	const option = {
		xAxis: {
			data: ['业务1', '业务2', '业务3'],
			axisTick: {
				show: false // 将此处改为 true 则显示刻度线
			},
			axisLine: {
				lineStyle: {
					color: '#cccccc' // 修改为需要的颜色
				}
			}
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false // 将此处改为 true 则显示刻度线
			},
			splitLine: {
				show: false // 不显示y轴网格线
			},
			axisLine: {
				show: false, // 显示Y轴轴线
				lineStyle: {
					color: '#cccccc' // 修改为需要的颜色
				}
			},
			min: minvalue
		},
		series: [{
			data: data,
			type: 'line',
			smooth: true,
			lineStyle: {
				color: '#266a96', // 折线颜色
				width: 2, // 折线宽度
			},
			areaStyle: {
				color: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: '#266a96' // 0% 处的颜色
						},
						{
							offset: 1,
							color: 'rgba(0,0,0,0)' // 100% 处的颜色
						}
					],
					global: false // 缺省为 false
				}
			}

		}]
	};
	chart.setOption(option);
}
export {
	eacjs,
	eacline
}