// console.log('Hello World



	const loginButton = document.getElementById("login_button");
	const emailInput = document.getElementById("email");
	const passwordInput = document.getElementById("password");
	const message = document.getElementById("login_message");





	// console.log("email". "password");




	// console.log(loginButton);
	loginButton.onclick = function(event){



		// console.log("Good Clik!!");


		// console.log('this',this);
		// console.log('event',event);



		// console.log(emailInput.value);
		// console.log(passwordInput.value);


		message.textContent = emailInput.value + "has logged in :)";




	};