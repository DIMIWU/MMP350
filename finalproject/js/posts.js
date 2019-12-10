	
function createElement(_class, text) {
	const element = document.createElement('div');
	element.classList.add(_class);
	element.textContent = text;
	return element;
}

function createPost(postData, _userData, postId,postImg) {
    
    const userData = _userData || {};
    
	const post = createElement('post'); // container element
    const postImg = createElement('postImage') 
	const text = createElement('text', postData.text);
	const author = createElement('author', 'by ');
	const authorLink = document.createElement('a');
	authorLink.href = 'user.html?uid=' + postData.uid;
	authorLink.textContent = userData.displayName;
	author.appendChild(authorLink);
	
	var d = new Date(postData.date);
	const date = createElement('date',(d.getMonth() + 1) + "." +  d.getDate() + "." + d.getFullYear());
	
//	posts.appendChild(post);
	posts.insertBefore(post, posts.firstElementChild);
	
	/* adding user profile image */
	const img = new Image();
	if (userData.imageURL) {
		img.src = userData.imageURL;
	} else {
		img.src = 'images/cat.jpg';
	}
	img.classList.add('profile-image');
    
    
    
    /* adding post image */
	const img = new Image();
	if (userData.imageURL) {
		img.src = userData.imageURL;
	} else {
		img.src = 'images/cat.jpg';
	}
	img.classList.add('profile-image');
    
    
    const imageButton = document.getElementById('submit-post-image');
imageButton.addEventListener('click', function() {
	// get the file
	const file = document.getElementById('post-image-file').files[0];
	if (file) {
		// upload the file
		const storage = firebase.storage();
		const user = firebase.auth().currentUser;
		const ref = storage.ref('posts').child(user.uid).child('add-post-image');
		const promise = ref.put(file);
		
		promise.then(function(image) {
			return image.ref.getDownloadURL();
		}).then(function(url) {
			userRef.update({ imageURL: url });
//			document.getElementById('profile-image').src = url;
			document.getElementById('add-post-image').style.display = 'none';
		});
	}
	
});

    
	
	/* link to the post - permanent link */
	const postLink = document.createElement('a');
	postLink.href = 'post.html?id=' + postId;
	postLink.textContent = "Permalink";
	
	post.appendChild(img);
	post.appendChild(text);
	post.appendChild(author);
	post.appendChild(date);
	post.appendChild(postLink);
	
}








	
//function createElement(_class, text) {
//	const element = document.createElement('div');
//	element.classList.add(_class);
//	element.textContent = text;
//	return element;
//}
//
//function createPost(postData, _userData, postId) {
//    
//    const userData = _userData || {};
//    
//	const post = createElement('post'); // container element
//	const text = createElement('text', postData.text);
//	const author = createElement('author', 'by ');
//	const authorLink = document.createElement('a');
//	authorLink.href = 'user.html?uid=' + postData.uid;
//	authorLink.textContent = userData.displayName;
//	author.appendChild(authorLink);
//	
//	var d = new Date(postData.date);
//	const date = createElement('date',(d.getMonth() + 1) + "." +  d.getDate() + "." + d.getFullYear());
//	
////	posts.appendChild(post);
//	posts.insertBefore(post, posts.firstElementChild);
//	
//	/* adding user profile image */
//	const img = new Image();
//	if (userData.imageURL) {
//		img.src = userData.imageURL;
//	} else {
//		img.src = 'images/cat.jpg';
//	}
//	img.classList.add('profile-image');
//	
//	/* link to the post - permanent link */
//	const postLink = document.createElement('a');
//	postLink.href = 'post.html?id=' + postId;
//	postLink.textContent = "Permalink";
//	
//	post.appendChild(img);
//	post.appendChild(text);
//	post.appendChild(author);
//	post.appendChild(date);
//	post.appendChild(postLink);
//	
//}
















