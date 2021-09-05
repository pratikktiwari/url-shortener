document.addEventListener('DOMContentLoaded', () => {
	var class_length = document.getElementsByClassName('counts_num').length;
	current_class = 0;
	var count_class = document.getElementsByClassName('counts_num')[current_class];
	var count_data = count_class.dataset.count;

	var real_data = document.getElementsByClassName('counts_num');
	var count_class = document.getElementsByClassName('counts_num');

	countThem();
	function countThem(){
		
			
		
	}
	// setInterval(function () {countThem()},2000);
});

// setInterval(function(){ slideFunction() }, 4000);

// for(var j = 0; j < class_length; j++){
// 			while(Number(count_class[j].innerHTML) <= Number(count_class[j].dataset.count)){
// 				count_class[j].innerHTML = (Number(count_class[j].innerHTML))+1;
// 				i++;
// 			}
// 		}

// for(var j = 0; j < class_length; j++){
// 			var total_count = Number(count_class[j].dataset.count);
// 			var count = 1;
			
// 			while(count<=total_count){
// 					count_class[j].innerHTML = count;
// 					count++;
// 				var interval = setTimeout(function () {},1000);
// 			}
// 			clearTimeout(interval);
console.log((Welcome to Note And Save).length);