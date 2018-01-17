// your code here
document.getElementsByClassName('post')[0].addEventListener('click', function (a) {
  a.preventDefault();
  let ul = document.getElementsByClassName('posts')[0].children[0];
  let upvoteCount = 0;
  let downvoteCount = 0;

  // Get the poster's name and message
  let postName = document.getElementById('name').value;
  if (postName.length == 0) {
    return;
  }
  let postMessage = document.getElementById('message').value;
  if (postMessage.length == 0) {
    return;
  }

  // Setup for elements to be created
  let newPost = document.createElement('li');
  let upvoteButton = document.createElement('button');
  let downvoteButton = document.createElement('button');
  let deleteButton = document.createElement('button');

  // Assign text values to elements
  newPost.innerHTML = "<strong>" + postName + ": </strong>" + postMessage;  // let newPost = document.createTextNode(postName + ': ' + postMessage + '\n');
  let upvoteText = document.createTextNode('\uD83D\uDC4D');
  let downvoteText = document.createTextNode('\uD83D\uDC4E');
  let deleteText = document.createTextNode('Delete');

  // Append textNodes to new elements
  upvoteButton.appendChild(upvoteText);
  downvoteButton.appendChild(downvoteText);
  deleteButton.appendChild(deleteText);
  upvoteButton.className += '' + 'btn btn-default btn-xs btn-post';
  downvoteButton.className += '' + 'btn btn-default btn-xs btn-post';
  deleteButton.className += '' + 'btn btn-default btn-xs btn-post';

  // Function to handle sorting of posts by upvotes in descending order
  function sortPosts() {
    let listItems = document.getElementsByClassName('posts')[0].children[0];
    listItems.sort()
  };

  // Upvote functionality :)
  upvoteButton.addEventListener('click', function() {
    upvoteCount++;
    upvoteButton.innerHTML = '\uD83D\uDC4D ' + upvoteCount;
  });

  // Downvote functionality :(
  downvoteButton.addEventListener('click', function() {
    downvoteCount++;
    downvoteButton.innerHTML = '\uD83D\uDC4E ' + downvoteCount;
  });

  // Delete functionality - removes the message and its
  deleteButton.addEventListener('click', function() {
    newPost.remove();
    upvoteButton.remove();
    downvoteButton.remove();
    deleteButton.remove();
  });

  // Append new elements in the unordered list
  ul.append(newPost);
  ul.appendChild(upvoteButton);
  ul.appendChild(downvoteButton);
  ul.appendChild(deleteButton);

});
