import axios from 'axios'

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
			console.log(tabvalue.value)
		})
		.catch(function(error) {
			console.log(error);
		});
}
export {waitnumfun,tabstatus}