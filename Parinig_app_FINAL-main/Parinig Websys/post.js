


// Event listener for form submission
document.getElementById('announcementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form input values
    const title = document.getElementById('announcementTitle').value;
    const message = document.getElementById('announcementMessage').value;

    // Create a new post
    createAnnouncementPost(title, message);

    // Clear the form after submission
    document.getElementById('announcementTitle').value = '';
    document.getElementById('announcementMessage').value = '';
});

// Function to create and display a new announcement post
function createAnnouncementPost(title, message) {
    // Create the new post element
    const post = document.createElement('div');
    post.classList.add('announcement');

    // Create user info section
    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const avatar = document.createElement('img');
    avatar.src = 'claire redfield.jpg'; // Placeholder avatar
    avatar.alt = 'User Avatar';

    const userName = document.createElement('h4');
    userName.id = 'user-name';
    userName.textContent = 'Claire Redfield'; // Static user name (you could make this dynamic)

    userInfo.appendChild(avatar);
    userInfo.appendChild(userName);

    // Create title, date, and message content
    const postTitle = document.createElement('h4');
    postTitle.textContent = title;

    const postDate = document.createElement('small');
    postDate.textContent = `Posted on: ${new Date().toLocaleString()}`;

    const postMessage = document.createElement('p');
    postMessage.textContent = message;

    // Create reactions section (buttons)
    const reactions = document.createElement('div');
    reactions.classList.add('reactions');

    const likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    likeButton.textContent = 'Like';

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-button');
    commentButton.textContent = 'Comment';

    reactions.appendChild(likeButton);
    reactions.appendChild(commentButton);

    // Append all parts to the post
    post.appendChild(userInfo);
    post.appendChild(postTitle);
    post.appendChild(postDate);
    post.appendChild(postMessage);
    post.appendChild(reactions);

    // Append the new post to the announcement list
    document.getElementById('announcementList').prepend(post); // Adds the new post at the top
    return false; // Prevents form submission
}
