<template id="seconddiv">
	<div>这是第二页</div>
	<div style="height: 800px;">
		<lay-button type="primary" @click="openDrawer">抽屉</lay-button>
		<lay-button type="primary" @click="openMsg">普通消息</lay-button>
		<lay-date-picker v-model="endTime" simple type="datetime" ></lay-date-picker>
		<lay-radio v-model="selected2" name="action" value="1">写作</lay-radio>
		<lay-radio v-model="selected2" name="action" value="2">画画</lay-radio>
		<lay-radio v-model="selected2" name="action" value="3">运动</lay-radio>
		<lay-radio v-model="selected2" name="action" value="4" :disabled="disabled">禁用</lay-radio>
		<lay-input v-model="data1" type="text" placeholder="请输入文字" prefix-icon="layui-icon-username" ></lay-input>
		<lay-button type="primary" @click="serach">查询</lay-button>
	</div>
	
</template>

<script setup>
	import {
		layer
	} from "@layui/layui-vue"
	import {
		ref,
		watch,
		reactive,onMounted
	} from 'vue';
	const endTime = ref("2024-03-19 15:36")
	
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
	const serach = function(){
		layer.msg(data1,{
			time:1000
		})
		
	}
</script>

<style>
	
</style>