function createElement(_class, text) {
	const element = document.createElement('div');
	element.classList.add(_class);
	element.textContent = text;
	return element;
}

function createPost(data, user) {
	const post = createElement('post');
	const text = createElement('text', data.text);
	const author = createElement('author', 'by ');
	const authorLink = document.createElement('a');
	authorLink.href = 'user.html?uid=' + data.uid;
	authorLink.textContent = user.displayName;
	author.appendChild(authorLink);
	
	var d = new Date(data.date);
	const date = createElement('date',(d.getMonth() + 1) + "." +  d.getDate() + "." + d.getFullYear());
	
//	posts.appendChild(post);
	posts.insertBefore(post, posts.firstElementChild);
	
	/* adding user profile image */
	const img = new Image();
	if (user.imageURL) {
		img.src = user.imageURL;
	} else {
		img.src = 'images/egg.jpg';
	}
	img.classList.add('profile-image');
	
	post.appendChild(img);
	post.appendChild(text);
	post.appendChild(author);
	post.appendChild(date);
	
}








