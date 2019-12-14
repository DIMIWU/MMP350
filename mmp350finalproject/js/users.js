const usersDiv = document.getElementById('users');
const usersRef = firebase.database().ref('users');

usersRef.on('child_added', function(snapshot) {
	const userInfo = snapshot.val();
	
	const userDiv = createElement('user');
	usersDiv.appendChild(userDiv);
	
	const userName = createElement('name');
	userDiv.appendChild(userName);
	
	const userLink = document.createElement('a');
	userLink.href = 'user.html?uid=' + snapshot.key;
	userLink.textContent = userInfo.displayName;
	userName.appendChild(userLink);
	
	if (userInfo.bio) {
		const bio = createElement('bio', userInfo.bio);
		userDiv.appendChild(bio);
	}
	
	if (userInfo.imageURL) {
		const userImage = new Image();
		userImage.src = userInfo.imageURL;
		userDiv.appendChild(userImage);
	}
});