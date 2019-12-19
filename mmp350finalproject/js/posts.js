	
function createElement(_class, text) {
	const element = document.createElement('div');
	element.classList.add(_class);
	element.textContent = text;
	return element;
}

function createPost(postData, _userData, postId) {
    
    const userData = _userData || {};
    
	const post = createElement('post'); // container element
//    const postImg = createElement('postImage') 
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
	console.log(postData);
	if (postData.imageURL) {
        const postImg = new Image();
		postImg.src = postData.imageURL;
        postImg.classList.add('post-image-file');
        post.appendChild(postImg);
	} 
	
	
	/* link to the post - permanent link */
	const postLink = document.createElement('a');
    postLink.classList.add('permalink');
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
















