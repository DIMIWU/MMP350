const loginButton = document.getElementById("login-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

loginButton.onclick = function(event) {
//	message.textContent = emailInput.value + " has logged in :)";
	
	firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value);
};