const loginButton = document.getElementById("login-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

loginButton.onclick = function(event) {
//	message.textContent = emailInput.value + " has logged in :)";
	
	const promise = firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value);
    promise.catch(function(error){
        message.textContent = error.message;
    });
};



/* auth state */

const displayName = document.getElementById("user-name");

//firebase.auth().currentUser.updateProfile({displayName: "Apple"});


firebase.auth().onAuthStateChanged(function(user){
//    console.log("user",yser.displayName);
    
    if(user){
        document.body.classList.add('auth');
        displayName.textContent = "Welcome," + user.displayName;
    }
    else{
        document.body.classList.remove('auth');
        displayName.textContent ="";
    }
    
});







/* log out*/
const logoutButton = document.getElementById("logout-button");
logoutButton.onclick = function() {
	firebase.auth().signOut();
};














