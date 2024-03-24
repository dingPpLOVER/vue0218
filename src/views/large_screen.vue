<template>
	<div id="largeScreen">
		<div class="top">xxx智能业务大数据监控平台</div>
		<div class="bottom">
			<div class="boxleft">
				<div class="le_top">
					<div class="texttitle">
						<div class="titex">大厅等候办理人数</div>
					</div>
					<div class="le_topsin" v-for="item in waitnum" :key="item">
						<div class="waitnum">{{item.val}}</div>
						<div class="waitntext">{{item.name}}</div>
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
				<div class="ce_bot">
					<div class="texttitle">
						<div class="titex">当月数据表现</div>
					</div>
					<div class="month_data">
						<div class="mdpageall">
							<div v-for="(tag,index) in tags" :key="index" @click="sepage(index)"
								:class="{'md_page_':selectedTab === index}" class="md_page">{{tag}}</div>
						</div>
						<div class="tagpage">
							<div v-for="(con,index) in content" :key="index"
								:class="{'tagpagesin':selectedTab ===index}">
								<div style="color: #ffffff;" v-if="selectedTab === index">{{con}}</div>

							</div>
						</div>
					</div>
				</div>
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
		onMounted,onUnmounted,
		ref
	} from 'vue';
	// import * as echarts from 'echarts';
	import {
		eacjs,
		eacline
	} from '../assets/echarts.js'
	import {
		waitnumfun
	} from '../assets/axiosvalue.js'
	var tags = ref(['业务1', '业务2', '业务3'])
	const content = ref(['内容1', '内容2', '内容3'])
	const selectedTab = ref(0)
	const sepage = function(index) {
		selectedTab.value = index
	}
	var inter = null
	const set = function(){
		selectedTab.value ++ 
		if(selectedTab.value>=3){
			selectedTab.value=0
		}
		console.log(selectedTab.value)
	}
	const waitnum = ref([])
	const echartsRef = ref(null)
	const echartsline = ref(null)
	onMounted(() => {
		var data = [20, 30, 25]
		var minvalue = Math.min(...data)
		var echartsRefvalue = echartsRef.value
		eacjs(data, minvalue, echartsRefvalue)
		var echartslinevlaue = echartsline.value
		eacline(data, minvalue, echartslinevlaue)
		waitnumfun(waitnum)
		inter = setInterval(set,1000)
	});
	onUnmounted(function(){
		clearInterval(inter)
	})
</script>

<style scoped>
	@import url('/public/css/largescreen.css');
</style>