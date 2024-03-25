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
			name: "单位（人）",
			nameTextStyle: {
				color: '#cccccc'
			},
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
			name: "单位（分钟）",
			nameTextStyle: {
				color: '#cccccc'
			},
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

function piee(pieid_) {
	const chart = echarts.init(pieid_);
	const option = {
		legend: {
			textStyle: {
				color: '#ffffff'
			},
			left: 'left',
			orient: 'vertical', //垂直排列
			top: 50
		},
		toolbox: {
			show: true,
		},
		color: ['#42eaea', '#6feaea', '#09d4d4', '#038a8a', '#2d9f9f'],
		series: [{
			name: 'Nightingale Chart',
			type: 'pie',
			radius: [50, 110],
			center: ['60%', '40%'],
			roseType: 'area',
			itemStyle: {
				borderRadius: 8
			},
			data: [{
					value: 40,
					name: '员工id1'
				},
				{
					value: 38,
					name: '员工id2'
				},
				{
					value: 32,
					name: '员工id3'
				},
				{
					value: 30,
					name: '员工id4'
				},
				{
					value: 28,
					name: '员工id5'
				}
			],
			labelLine: {
				show: true, // 显示索引线
				length: 2, // 索引线长度
				length2: 2, // 标签与扇区的连线长度
				smooth: 0.2, // 索引线平滑度
			},
			label: {
				normal: {
					show: true, // 显示标签
					textSize: 15,
					color: '#ffffff'
					// color:function(params){
					// 	// return params.data.itemStyle.color
					// 	console.log(params.data.itemStyle.color)
					// }
				}
			}
		}]
	};
	chart.setOption(option);
}

function pieri(pir) {
	const chart = echarts.init(pir);
	const option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			// orient: 'vertical',
			left: 'center',
			textStyle: {
				color: '#ffffff'
			},
		},
		color: ['#9a9af7', '#7979f7', '#4c4cee'],
		series: [{
			name: '业务完成量',
			type: 'pie',
			radius: '50%',
			data: [{
					value: 1048,
					name: '业务1'
				},
				{
					value: 735,
					name: '业务2'
				},
				{
					value: 580,
					name: '业务3'
				}
			],
			label: {
				normal: {
					textStyle: {
						color: '#ffffff',
					}
				}
			},
			labelLine: {
				show: false,
				length: 2, // 索引线长度
				length2: 2, // 标签与扇区的连线长度
			},
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			// 开启3D效果
			radius: [0, '30%'],
			center: ['50%', '50%'],
			// 设置3D图表的视角
			viewControl: {
				projection: 'orthographic' // 正射投影
			},
		}]
	};
	chart.setOption(option);
}
export {
	eacjs,
	eacline,
	piee,
	pieri
}