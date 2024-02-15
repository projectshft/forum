
// create a feature that would allow the user to add a new "post"
// (a message associated with a user's name) to the '.posts' div.


var comment = document.addEventListener('DOMContentLoaded', function () {
    var submitCommentButton = document.querySelector('.btn.btn-primary');
    var commentSection = document.getElementById('commentSection');
        // when button is clicked, add comment to the list of other comments
        submitCommentButton.addEventListener('click', function () {
            // USe values of the new submitted name and message
            var name = document.getElementById('name').value;
            var message = document.getElementById('message').value;
        
            var newComment = `<p>${message} - Posted by: <span class="userName">${name}</span></p>`;
            commentSection.innerHTML += newComment;
    });
});


// submitCommentButton.addEventListener('click', function () {
//     // when button is clicked, add comment to list of comemnts above
//     console.log(document.getElementById('name'));
    
//   });
