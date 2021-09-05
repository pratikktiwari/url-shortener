document.addEventListener('DOMContentLoaded',() => {
	document.getElementById('nav_bar_nav_bar').style.height = '60px';
	document.getElementById('toogle_nav_bar').onclick = () =>{
		if(document.getElementById('nav_bar_nav_bar').style.height == '235px'){
			document.getElementById('nav_bar_nav_bar').style.height = '60px';
		}
		else{
			document.getElementById('nav_bar_nav_bar').style.height = '235px';
		}
	}
});