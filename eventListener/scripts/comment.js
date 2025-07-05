document.getElementById('comment-btn')
    .addEventListener('click', function () {

        const yourComment = document.getElementById('your-Comment');
        const comment = yourComment.value;

        const commentContainer = document.getElementById('comment-container');

        const commentElement = document.createElement('p');
        commentElement.classList.add('comment');
        commentElement.innerText = comment;

        commentContainer.appendChild(commentElement);

        yourComment.value = '';
    })