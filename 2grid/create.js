const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const createButton = document.getElementById("create-button");


createButton.onclick = function(event) {
	
	firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value);


};