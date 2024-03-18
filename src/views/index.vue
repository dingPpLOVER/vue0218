<template>
	<div id="div">
		<div class="ele">

			<el-select v-model="value" placeholder="Select" style="width: 240px">
				<el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
					<span style="float: left">{{ item.label }}</span>
					<span
						style=" float: right;color: var(--el-text-color-secondary);font-size: 13px;">{{ item.value }}</span>
				</el-option>
			</el-select>
			<el-button type="primary" :icon="Search">Search</el-button>
			<div>
				<el-table :data="tab" style="width: 100%" :row-class-name="tableRowClassName">
					<el-table-column prop="class" label="班级" width="180" />
					<el-table-column prop="name" label="姓名" width="180" />
					<el-table-column prop="math_score" label="数学"/>
					<el-table-column prop="lang_score" label="语文"/>
					<el-table-column prop="english_score" label="英语"/>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import axios from 'axios'
	import { Search } from '@element-plus/icons-vue'
	import { ref } from 'vue'

	const value = ref('')
	const cities = ref(null)

	interface User {//单独定义interface，约束props设置类型约束
		class : string
		name : string
		math_score : string
		lang_score:string
		english_score:string
	}

	const tableRowClassName = ({
		row,
		rowIndex,
	} : {
		row : User
		rowIndex : number
	}) => {
		if (rowIndex === 1) {
			return 'warning-row'
		} else if (rowIndex === 3) {
			return 'success-row'
		}
		return ''
	}
	const tab = ref(null)
	const tableData : User[] = []

	axios({
		method: 'get',
		url: '/2024study.json',
		data: {
			name: 'John',
			age: 30
		}
	})
		.then(function (response) {
			console.log(response.data);
			tab.value = response.data
			var classname = []
			for (var i = 0; i < response.data.length; i++) {
				classname.push(response.data[i].class)
			}
			const uniqueArr = Array.from(new Set(classname));
			var cit = []
			for (var i = 0; i < uniqueArr.length; i++) {
				var obj = {}
				obj["value"] = uniqueArr[i]
				obj["label"] = uniqueArr[i]
				cit.push(obj)
			}
			cities.value = cit
		})
		.catch(function (error) {
			console.log(error);
		});
</script>

<style scoped>
	@import url('/public/css/index.css');
</style>