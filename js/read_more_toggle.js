document.addEventListener('DOMContentLoaded', () =>{
	document.getElementById('read_more_button').onclick = () =>{
		document.getElementById('hidden_text').style.display = 'block';
		document.getElementById('read_more_button').style.display = 'none';
	}
	document.getElementById('read_less_button').onclick = () =>{
		document.getElementById('hidden_text').style.display = 'none';
		document.getElementById('read_more_button').style.display = 'block	';
	}
});

// document.addEventListener('DOMContentLoaded', () =>{
// 	document.getElementById('read_more_button').onclick = () =>{
// 		document.getElementById('hidden_text').style.width = '100%';
// 		document.getElementById('hidden_text').style.display = 'inline-block';
// 		document.getElementById('read_more_button').style.display = 'none';
// 	}
// 	document.getElementById('read_less_button').onclick = () =>{
// 		document.getElementById('hidden_text').style.width = '0';
// 		document.getElementById('hidden_text').style.width = '0';
// 		document.getElementById('read_more_button').style.display= 'block';
// 	}
// });