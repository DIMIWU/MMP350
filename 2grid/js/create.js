const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const createButton = document.getElementById("create-button");
const errorMessage = document.getElementById("error-message");



createButton.onclick = function(event) {
    
    const promise =
	firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
    
    promise.catch(function(error){
        errorMessage.textContent = error.message;
    });
    promise.then(function(){
        location.herf = "index.html";
    });


};