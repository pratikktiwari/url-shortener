window.addEventListener('DOMContentLoaded', ()=>{
	document.getElementById('signup_but_choice').onclick = ()=> {
		document.getElementById('signup_choice_form').style.display = 'block';
		document.getElementById('login_choice_form').style.display = 'none';

		document.getElementById("step_1_form").style.display = 'block';
		document.getElementById("step_2_form").style.display = 'none';
	}
	document.getElementById('login_but_choice').onclick = ()=> {
		document.getElementById('login_choice_form').style.display = 'block';
		document.getElementById('signup_choice_form').style.display = 'none';
	}
	// document.getElementsByName('form').onsubmit  = ()=>{
	// 	return false;
	// }
	document.getElementById('login_but').onclick = ()=> {
		var username = document.getElementById('form_username').value;
		var password = document.getElementById('form_password').value;

		if ((username === 'root' || username === sessionStorage.getItem("current_username")) && (password === 'root' || password === sessionStorage.getItem("current_password") )) {
			// alert('true');
			sessionStorage.setItem("current_username", username);
			window.location.href = 'index_l.html';
			// document.getElementById("result").innerHTML += sessionStorage.getItem("current_username")+'<br>';
		}
		else {
			alert('Wrong Username/ Password Combination');
			return false;
		}

		// sessionStorage.setItem("current_username", username);

		// document.getElementById("result").innerHTML += sessionStorage.getItem("current_username")+'<br>'; 
	}
	document.getElementById("next_step_2").onclick = ()=>{
		document.getElementById("step_1_form").style.display = 'none';
		document.getElementById("step_2_form").style.display = 'block';
		return false;
	}

	document.getElementById('signup_but').onclick = ()=> {
		var s_email = document.getElementById('s_form_email').value;
		var s_mobile = document.getElementById('s_form_mobile').value;
		var s_location = document.getElementById('s_form_location').value;
		var s_f_name = document.getElementById('s_form_full_name').value;
		var s_username = document.getElementById('s_form_username').value;
		var s_password = document.getElementById('s_form_password').value;

		sessionStorage.setItem("current_email", s_email);
		sessionStorage.setItem("current_mobile", s_mobile);
		sessionStorage.setItem("current_location", s_location);
		sessionStorage.setItem("current_f_name", s_f_name);
		sessionStorage.setItem("current_username", s_username);
		sessionStorage.setItem("current_password", s_password);

		alert('Account Created! Please Log in.');


		// document.getElementById("result").innerHTML += sessionStorage.getItem("current_email")+'<br>'; 
		// document.getElementById("result").innerHTML += sessionStorage.getItem("current_mobile")+'<br>'; 
		// document.getElementById("result").innerHTML += sessionStorage.getItem("current_location")+'<br>'; 
	}
});