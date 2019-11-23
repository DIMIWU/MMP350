/* database query */
const postId = location.search.split('=')[1];
const posts = document.getElementById('posts');
const postRef = firebase.database().ref('posts').child(postId);

// get post first 
postRef.on('value', function(snapshot) {
	const postData = snapshot.val();
	
	console.log(postData);
	
	// get user from postData.uid
	const userRef = firebase.database().ref('users').child(postData.uid);
	userRef.on('value', function(snapshot) {
		const userInfo = snapshot.val();
		createPost(postData, userInfo, postId); 
	});
});


