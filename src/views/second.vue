<template id="seconddiv">
	<div>这是第二页</div>
	<div style="height: 800px;">
		<lay-button type="primary" @click="openDrawer">抽屉</lay-button>
		<lay-button type="primary" @click="openMsg">普通消息</lay-button>
		<lay-date-picker v-model="endTime" simple type="datetime"></lay-date-picker>
		<lay-radio v-model="selected2" name="action" value="1">写作</lay-radio>
		<lay-radio v-model="selected2" name="action" value="2">画画</lay-radio>
		<lay-radio v-model="selected2" name="action" value="3">运动</lay-radio>
		<lay-radio v-model="selected2" name="action" value="4" :disabled="disabled">禁用</lay-radio>
		<lay-input v-model="data1" type="text" placeholder="请输入文字" prefix-icon="layui-icon-username" style="width: 180px;"></lay-input>
		<lay-button type="primary" @click="serach" class="inp2">查看输入信息</lay-button>
		<lay-table :page="page" :columns="columns8" :data-source="dataSource8" even @change="change" v-model="arr_" class="tab"></lay-table>
	</div>

</template>

<script setup>
	import {layer} from "@layui/layui-vue"
	import {ref,watch,reactive,onMounted} from 'vue';
	import axios from 'axios'
	Date.prototype.format2nd = function (fmt) {
	  var o = {
	      "M+": this.getMonth() + 1, //月份
	      "d+": this.getDate(), //日
	      "h+": this.getHours(), //小时
	      "m+": this.getMinutes(), //分
	      "s+": this.getSeconds(), //秒
	      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
	      "S": this.getMilliseconds() //毫秒
	  };
	  if (/(y+)/.test(fmt)) {
	    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	  }
	  for (var k in o) {
	    if (new RegExp("(" + k + ")").test(fmt)) {
	      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
	        (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    }
	  }
	  return fmt;
	}
	
	const endTime = ref((new Date()).format2nd("yyyy-MM-dd hh:mm:ss"))
	const openMsg = function() {
		layer.msg(endTime, {
			time: 1000
		})
	}
	const disabled = ref(true);
	const selected2 = ref("1");
	const openDrawer = function() {
		layer.drawer({
			title: "标题",
			content: selected2
		})
	}
	const data1 = ref(null);
	const serach = function() {
		layer.msg(data1, {
			time: 1000
		})
	}
	var dataSource8 = ref([])
	
	const change = (page) => {
		setTimeout(() => {
			dataSource8.value = loadDataSource(page.current, page.limit);
		}, 1000);
	}
	const arr_ = ref([])
	axios.get('/2024study.json')
		.then(function(response) {
			var arr = []
			var arrall = []
			for (var i = 0; i < response.data.length; i++) {
				var obj = {}
				obj["id"] = i + 1
				obj["class"] = response.data[i].class
				obj["name"] = response.data[i].name
				obj["math_score"] = response.data[i].math_score
				obj["lang_score"] = response.data[i].lang_score
				obj["english_score"] = response.data[i].english_score
				arr.push(obj)
				arrall.push(obj)
				arr_.value = arrall
			}
			dataSource8.value = arr.slice(0,10)
		})
		.catch(function(error) {
			console.log(error);
		});
		
		const page = reactive({current: 1,limit: 10,total:30});
		
		const loadDataSource = (page, pageSize) => {
			
			var arr = arr_.value
			var response = [];
			var startIndex = ((page - 1) * pageSize) + 1;
			var endIndex = page * pageSize;
			for (var i = startIndex; i <= endIndex; i++) {
				if (i < arr.length) {
					response.push({
						id: `${i}`,
						class: arr[i].class,
						name: arr[i].name,
						math_score: arr[i].math_score,
						lang_score: arr[i].lang_score,
						english_score: arr[i].english_score
					})
				}
			}
			return response;
		}
	const columns8 = [{
			title: "编号",
			width: "80px",
			key: "id"
		},
		{
			title: "年级",
			width: "200px",
			key: "class"
		}, {
			title: "姓名",
			width: "180px",
			key: "name"
		},
		{
			title: "数学",
			width: "100px",
			key: "math_score",
			sort: "desc"
		},
		{
			title: "语文",
			width: "180px",
			key: "lang_score",
			sort: "desc"
		}, {
			title: "英语",
			width: "400px",
			key: "english_score",
			ellipsisTooltip: true,
			sort: "desc"
		}
	]
</script>

<style>

</style>