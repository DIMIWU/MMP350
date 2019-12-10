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
	
	const tags = postText.value.match(/#[a-z0-9]+/gi);
	if (tags) {
		post.tags = {};
		for (let i = 0; i < tags.length; i++) {
			const tag = tags[i].replace('#', '');
			post.tags[tag] = true;
		}
	}
	
	
	// push post to database
	ref.push(post);
	
	postText.value = ""; // reset the textarea
}