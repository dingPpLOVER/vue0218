import axios from 'axios'
import {cetobechline} from './echarts.js'
function waitnumfun(waitnum) {
	axios.get('/waitnum.json')
		.then(function(response) {
			waitnum.value = response.data
		})
		.catch(function(error) {
			console.log(error);
		});
	return waitnum.value	
}
function tabstatus(tabvalue){
	axios.get('/tabsta.json')
		.then(function(response) {
			tabvalue.value = response.data
			// console.log(tabvalue.value)
		})
		.catch(function(error) {
			console.log(error);
		});
}
function sevenvalue(cetobechval){
	axios.get('/seven.json')
		.then(function(response) {
			var data = response.data
			var xdata= []
			var ydata1 = []
			var ydata2 = []
			var ydata3 = []
			for(var i = 0 ; i < data.length ; i ++ ){
				xdata.push(moda(i))
				ydata1.push(data[i].value1)
				ydata2.push(data[i].value2)
				ydata3.push(data[i].value3)
			}
			cetobechline(cetobechval,xdata,ydata1,ydata2,ydata3)
		})
		.catch(function(error) {
			console.log(error);
		});
}
function moda(num){
	var dat = new Date(new Date().getTime()-num * 24 *60 * 60 * 1000)
	var month = dat.getMonth()+1
	var data = dat.getDate()
	return month+'月'+data+'日'
}
export {waitnumfun,tabstatus,sevenvalue}