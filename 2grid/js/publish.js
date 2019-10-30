const postText = document.getElementById('post-text');
const publishButton = document.getElementById('publish');

publishButton.addEventListener('click', publishPost);
postText.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});

const ref = firebase.database().ref('posts');

function publishPost() {
	const post = {}; // empty object
	post.text = postText.value;
	post.uid = firebase.auth().currentUser.uid;
	post.date = Date.now();
	postText.value = "";
	
	// push post to database
	ref.push(post);
}