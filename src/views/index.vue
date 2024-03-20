<template id="indexbox">
	<div style="margin-top: 10px;">
		<el-input v-model="input" style="width: 240px" placeholder="请输入" />
		<el-button type="primary" :icon="Search" style="margin-left: 8px;" @click="searchfun">查询</el-button>
		<el-table :data="tableData" style="width: 100%" v-model="tab" height="300px">
			<el-table-column prop="class" label="班级" width="180" />
			<el-table-column prop="name" label="名称" width="180" />
			<el-table-column prop="score" label="分数" />
		</el-table>
	</div>

</template>

<script setup>
	import axios from 'axios'
	import {Search} from '@element-plus/icons-vue'
	import {ElMessage} from 'element-plus'
	import {ref} from 'vue'
	const input = ref('')
	const searchfun = function() {
		ElMessage('您输入了:' + input.value)
		var arr = []
		for(var i = 0 ; i < tab.value.length ; i ++ ){
			if(tab.value[i].name == input.value){
				arr.push(tab.value[i])
			}
			tableData.value = arr
		}
		if(arr.length == 0){
			ElMessage('没有查询到该学员的信息')
		}
	}
	const tableData = ref([])
	const tab = ref([])
	axios.get('/2024study.json')
		.then(function(response) {
			console.log(response.data)
			var arr = []
			for(var i = 0 ; i < response.data.length ; i ++ ){
				var obj = {}
				obj["class"] = response.data[i].class
				obj["name"] = response.data[i].name
				obj["score"] = response.data[i].lang_score
				arr.push(obj)
			}
			tableData.value = arr
			tab.value = arr
			console.log(tableData.value)
		})
		.catch(function(error) {
			console.log(error);
		});
</script>

<style scoped>
	@import url('/public/css/index.css');
</style>