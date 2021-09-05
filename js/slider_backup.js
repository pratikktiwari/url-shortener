
document.addEventListener('DOMContentLoaded',() => {
	const slide_main = document.getElementById('slider_container');
	const next_btn = document.getElementById('next_slide');

	var current_slide_no = 0;

	for(var i = 0; i < document.getElementsByClassName('slide_content').length; i++){
		document.getElementsByClassName('slide_content')[i].style.display = 'none';
	}

	function slideFunction(){

		const slider_class = document.getElementsByClassName('slide_content');

		if(current_slide_no >= slider_class.length){
			current_slide_no = 0;
		}

		var current_slide = document.getElementsByClassName('slide_content')[current_slide_no];

		if(current_slide.style.display ==='none' || current_slide.style.display ===''){
			current_slide.style.display = 'block';
		}

		++current_slide_no;

		for(var i = 0; i < document.getElementsByClassName('slide_content').length; i++){
			if(i != current_slide_no-1){
				document.getElementsByClassName('slide_content')[i].style.display = 'none';
			}
		}
	}

	// document.getElementById('next_slide').onclick = slideFunction();

	setInterval(function(){ slideFunction() }, 1000);
});
