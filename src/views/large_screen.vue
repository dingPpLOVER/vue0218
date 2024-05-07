<template>
	<div id="largeScreen">
		<div class="top">xxx智能业务大数据监控平台</div>
		<!-- <router-view />
		<div style="margin-top: 20px;">
			<router-link to='/large_screen' class="lin">large_screen</router-link>
			<router-link to='/index' class="lin">element-plus</router-link>
			<router-link to='/second' class="lin">layui-vue</router-link>
			<router-link to='/three' class="lin">echarts</router-link>
		</div> -->
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
				<div class="ce_top">
					<!-- <div class="texttitle">
						<div class="titex">顾客满意度</div>
					</div> -->
					<div class="ce_tot">
						<div class="cebotsin" v-for="(de,index ) in degreearr" :key="index">
							<div class="cet_text">{{de.name}}好评率</div>
							<div class="cet_val" style="color: #ffffff;">{{de.val}}</div>
						</div>
					</div>
					<div class="ce_tobech">
						<div id="ce_tobech" ref="cetobech"></div>
					</div>
					
				</div>
				<div class="ce_bot">
					<div class="texttitle">
						<div class="titex">当月数据表现</div>
					</div>
					<div class="month_data" @mouseenter = "stopint" @mouseleave="startint">
						<div class="mdpageall">
							<div v-for="(tag,index) in tags" :key="index" @click="sepage(index)"
								:class="{'md_page_':selectedTab === index}" class="md_page">{{tag}}</div>
						</div>
						<div class="tagpage">
							<!-- <div v-for="(con,index) in content" :key="index"
								:class="{'tagpagesin':selectedTab ===index}">
								<div style="color: #ffffff;" v-if="selectedTab === index">{{con}}</div>
							</div> -->
							<div :class="{'tagpagesin_':selectedTab !== 0}" class="tagpagesin">
								<div class="tps_le">
									<div class="tps_text" >本月达成:<span class="tps_span">285</span></div>
									<div class="tps_text" >目标达成:<span class="tps_span">300</span></div>
									<div class="tps_text" >目标达成率:<span class="tps_span">95%</span></div>
									<div class="tps_text" >本季度累积达成:<span class="tps_span">600</span></div>
									<div class="tps_text" >本季度目标达成:<span class="tps_span">900</span></div>
									<div class="tps_text" >本季度达成率:<span class="tps_span">66.6%</span></div>
									<div class="tps_text" >上季度达成率:<span class="tps_span">55.5%</span></div>
									<div class="tps_text" >季度增长:<span class="tps_span">11.1%</span><img src="../../public/img/arr_up.png" class="image"/></div>
								</div>
								<div class="tps_right">
									<div class="tps_title">业务完成排名</div>
									<div id="tps_ri" ref="pieid"></div>
								</div>
								
							</div>
							<div :class="{'tagpagesin_':selectedTab !== 1}" class="tagpagesin">
								<div class="tps_le">
									<div class="tps_text" >本月达成:<span class="tps_span">265</span></div>
									<div class="tps_text" >目标达成:<span class="tps_span">300</span></div>
									<div class="tps_text" >目标达成率:<span class="tps_span">88%</span></div>
									<div class="tps_text" >本季度累积达成:<span class="tps_span">455</span></div>
									<div class="tps_text" >本季度目标达成:<span class="tps_span">900</span></div>
									<div class="tps_text" >本季度达成率:<span class="tps_span">50.6%</span></div>
									<div class="tps_text" >上季度达成率:<span class="tps_span">50.5%</span></div>
									<div class="tps_text" >季度下降:<span class="tps_span">0.1%</span><img src="../../public/img/arr_down.png" class="image"/></div>
								</div>
								<div class="tps_right">
									<div class="tps_title">业务完成排名</div>
									<div id="tps_ri2" ref="pieid2"></div>
								</div>
							</div>
							<div :class="{'tagpagesin_':selectedTab !== 2}" class="tagpagesin">
								<div class="tps_le">
									<div class="tps_text" >本月达成:<span class="tps_span">285</span></div>
									<div class="tps_text" >目标达成:<span class="tps_span">300</span></div>
									<div class="tps_text" >目标达成率:<span class="tps_span">95%</span></div>
									<div class="tps_text" >本季度累积达成:<span class="tps_span">600</span></div>
									<div class="tps_text" >本季度目标达成:<span class="tps_span">900</span></div>
									<div class="tps_text" >上季度达成率:<span class="tps_span">50.6%</span></div>
									<div class="tps_text" >上季度达成率:<span class="tps_span">50.5%</span></div>
									<div class="tps_text" >季度下降:<span class="tps_span">0.1%</span><img src="../../public/img/arr_down.png" class="image"/></div>
								</div>
								<div class="tps_right">
									<div class="tps_title">业务完成排名</div>
									<div id="tps_ri3" ref="pieid3"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="boxrigth">
				<div class="ri_top">
					<div class="texttitle">
						<div class="titex">当月业务办理量</div>
					</div>
					<div id="riech" ref="pierri"></div>
				</div>
				<div class="ri_bot" >
					<div class="texttitle">
						<div class="titex">接待人员情况</div>
					</div>
					<div class="ri_tab" ref="tabheight" >
						<div class="ritabhead">
							<div class="rth_th">员工ID</div>
							<div class="rth_th">已完成人数</div>
							<div class="rth_th">状态</div>
						</div>
						<div class="ritabbody" :style="{'height':boheight+'px'}" ref="tbscref"  @mouseenter = "tabstop" @mouseleave="tabstart">
							<div v-for="(item,index) in tabvalue" class="ritabbtr" :key="index">
								<div class="rth_td">00{{item.number}}</div>
								<div class="rth_td">{{item.complected}}</div>
								<div class="rth_td"  v-if="item.status==='接待中'" style="color:#00ff7f">{{item.status}}</div>
								<div class="rth_td" v-else style="color:#cccccc">{{item.status}}</div>
							</div>
						</div>
					</div>
				</div>
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
		eacline,piee,piee2,piee3,pieri
	} from '../assets/echarts.js'
	import {
		waitnumfun,tabstatus,sevenvalue
	} from '../assets/axiosvalue.js'
	var degreearr = ref([{"name":"业务一","val":"90%"},{"name":"业务二","val":"80%"},{"name":"业务三","val":"85%"}])
	const cetobech = ref(null)
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
	}
	const tabscroll = function (){
		// console.log('容器高度'+tbscref.value.offsetHeight,'滚动高度'+tbscref.value.scrollTop)
		if(tbscref.value){//onMounted在其他路由中依然会调用该方法
			if(tbscref.value.scrollTop < (tbscref.value.scrollHeight-tbscref.value.offsetHeight)){
				tbscref.value.scrollTop ++ 
			}else{
				tbscref.value.scrollTop = 0
			}
		}
	}
	const waitnum = ref([])
	const echartsRef = ref(null)
	const echartsline = ref(null)
	
	const pieid = ref(null)
	const pieid2 = ref(null)
	const pieid3 = ref(null)
	
	const pierri = ref(null)
	const tabvalue = ref([])
	const tabheight = ref(null)
	const boheight = ref(null)
	var tabscr = null
	const tbscref =ref(null)
	onMounted(() => {
		var data = [20, 30, 25]
		var minvalue = Math.min(...data)
		var echartsRefvalue = echartsRef.value
		eacjs(data, minvalue, echartsRefvalue)
		var echartslinevlaue = echartsline.value
		eacline(data, minvalue, echartslinevlaue)
		waitnumfun(waitnum)
		tabstatus(tabvalue,)
		inter = setInterval(set,1000)
		
		var pieid_ = pieid.value
		piee(pieid_)
		var pieid_2 = pieid2.value
		piee2(pieid_2)
		var pieid_3 = pieid3.value
		piee3(pieid_3)
		
		var pieri_ = pierri.value
		pieri(pieri_)
		boheight.value = tabheight.value.offsetHeight - 60
		tabscr = setInterval(tabscroll,100)
		var cetobechval = cetobech.value
		sevenvalue(cetobechval)
	});
	onUnmounted(function(){
		//切换
		clearInterval(inter)
		 // 滚动
		clearInterval(tabscroll)
	})
	const stopint = function(){
		clearInterval(inter)
	}
	const startint = function(){
		inter = setInterval(set,1000)
	}
	const tabstop = function(){
		clearInterval(tabscr)
	}
	const tabstart = function(){
		tabscr = setInterval(tabscroll,100)
	}
</script>

<style scoped>
	@import url('/public/css/largescreen.css');
	
</style>