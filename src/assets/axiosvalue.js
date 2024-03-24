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
export {waitnumfun}