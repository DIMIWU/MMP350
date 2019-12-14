const uid = location.search.split('=')[1];
const userRef = firebase.database().ref('users').child(uid);

const profileName = document.getElementById('profile-name');
const bioInput = document.getElementById('bio');
const firstName = document.getElementById('profile_firstname');
const lastName = document.getElementById('profile_lastname');
const website = document.getElementById('profile_website');
const updateButton = document.getElementById('update-profile');

userRef.on('value', function(snapshot) {
	const userInfo = snapshot.val();
	profileName.value = userInfo.displayName;
	
	if (userInfo.bio) {
		bioInput.value = userInfo.bio;
	}
    
    if (userInfo.profile_firstname) {
		firstName.value = userInfo.profile_firstname;
	}
    if (userInfo.profile_lastname) {
		lastName.value = userInfo.profile_lastname;
	}
    if (userInfo.profile_website) {
		website.value = userInfo.profile_website;
	}
    
	
	if (userInfo.imageURL) {
		document.getElementById('edit-profile-image').src = userInfo.imageURL;
		document.getElementById('add-image').style.display = 'none';
	}
});

updateButton.onclick = function() {
	userRef.update({
		displayName: profileName.value,
		bio: bioInput.value,
        profile_firstname: firstName.value,
        profile_lastname: lastName.value,
        profile_website: website.value
	});
};

const imageButton = document.getElementById('submit-image');
imageButton.addEventListener('click', function() {
	// get the file
	const file = document.getElementById('image-file').files[0];
	if (file) {
		// upload the file
		const storage = firebase.storage();
		const user = firebase.auth().currentUser;
		const ref = storage.ref('users').child(user.uid).child('profile-image');
		const promise = ref.put(file);
		
		promise.then(function(image) {
			return image.ref.getDownloadURL();
		}).then(function(url) {
			userRef.update({ imageURL: url });
			document.getElementById('profile-image').src = url;
			document.getElementById('add-image').style.display = 'none';
		});
	}
	
});











