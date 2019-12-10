const postText = document.getElementById('post-text');
const publishButton = document.getElementById('publish');

publishButton.addEventListener('click', publishPost);
postText.addEventListener('keyup', function (event) {
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
    const promise = ref.push(post);
    promise.then(function (snapshot) {
        addImage(snapshot.key);
    });
}


let file;
const imageButton = document.getElementById('submit-post-image');
const imageFile = document.getElementById('post-image-file');
imageButton.addEventListener('click', function () {
    // get the file
    file = imageFile.files[0];
    if (file) {
        imageFile.style.display = 'none';
        imageButton.style.display = 'none';
    }
});

function addImage(postId) {
    if (file) {
        // upload the file
        const storage = firebase.storage();
        const user = firebase.auth().currentUser;
        const ref = storage.ref('posts').child(postId).child('add-post-image');
        const promise = ref.put(file);

        promise.then(function (image) {
            return image.ref.getDownloadURL();
        }).then(function (url) {
            imageFile.style.display = 'block';
            imageButton.style.display = 'block';
            console.log(postId);
            const postRef = firebase.database().ref('posts').child(postId);
            postRef.update({
                imageURL: url
            });
        });
    }
}




// const postText = document.getElementById('post-text');
// const publishButton = document.getElementById('publish');

// publishButton.addEventListener('click', publishPost);
// postText.addEventListener('keyup', function(event) {
// 	if (event.which == 13) {
// 		publishPost();
// 	}
// });

// const ref = firebase.database().ref('posts');

// function publishPost() {
// 	const post = {}; // empty object
// 	post.text = postText.value;
// 	post.uid = firebase.auth().currentUser.uid;
// 	post.date = Date.now();
// 	postText.value = "";

// 	// push post to database
// 	ref.push(post);
// }







// const imageButton = document.getElementById('submit-image');
// imageButton.addEventListener('click', function() {
// 	// get the file
// 	const file = document.getElementById('image-file').files[0];
// 	if (file) {
// 		// upload the file
// 		const storage = firebase.storage();
// 		const user = firebase.auth().currentUser;
// 		const ref = storage.ref('users').child(user.uid).child('profile-image');
// 		const promise = ref.put(file);

// 		promise.then(function(image) {
// 			return image.ref.getDownloadURL();
// 		}).then(function(url) {
// 			userRef.update({ imageURL: url });
// 			document.getElementById('profile-image').src = url;
// 			document.getElementById('add-image').style.display = 'none';
// 		});
// 	}

// });