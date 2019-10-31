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
        
        
        const userRef = firebase.database().ref('users').child(user.uid);
        userRef.on ('value',function(snapshot){
            const userInfo = snapshot.val();
            displayName.textContent = "Welcome," + userInfo.displayName;
        
        });
    
    
    
    
        const profileButton = document.getElementById("edit-profile");
        profileButton.onclick = function(){
            location.herf = "profile.html?uid=" +user.uid
            
        };
    
    
    
    
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














