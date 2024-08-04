console.clear();

const nameInput = document.getElementById("name");
const postInput = document.getElementById("message");
const submitButton = document.getElementById("submit");
const viewPostsButton = document.getElementById("viewPosts");
const backToFormButton = document.getElementById("backToForm");
let posts = document.getElementById("posts");
let addPostCard = document.getElementById("postCard");

function createElement(tag, innerText, className) {
  let newElement = document.createElement(tag.toString());
  newElement.innerText = innerText;
  if (className) {
    newElement.classList.add(className);
  }
  return newElement;
  ;
}

function addPost(e) {
  e.preventDefault(); // Prevent default form submission behavior
  let name = nameInput.value;
  let text = postInput.value;

  if (name !== "" && text !== "") {
    let postContainer = createElement("div", null, "post-container");
    let postHeader = createElement("div", null, "post-header");
    let postBody = createElement("div", null, "post-body");
    
    let nameElement = createElement("h5", name, null);
    let textElement = createElement("p", text, null);
    let removeButton = createElement("a", " Remove ", "btn-link");
    let editButton = createElement("a", " Edit ", "btn-link");
    let viewComments = createElement("a", " View Replies ", "btn-link");
    let replyContainer = createElement('div', null, 'reply-container');
    let replyInput = createElement('input', null, 'reply-input');
    let submitReplyButton = createElement('a', " Reply ", "btn-link");
    
    let replyCount = 0; // Initialize reply count

    function updateReplyCount() {
      viewComments.innerText = `View (${replyCount}) Replies`;
      if (replyCount === 0) {
        viewComments.innerText = "Replies";
      }
    }

    // Remove button
    removeButton.addEventListener("click", () => {
      postContainer.remove();
    });
    
    // Edit button
    editButton.addEventListener('click', () => {
      let editedComment = prompt('Edit comment:');
      textElement.innerText = editedComment;
    });
    
    // View comments button
    viewComments.addEventListener('click', () => {
      replyContainer.classList.toggle('hide');
    });
    
    // Submit reply button
    submitReplyButton.addEventListener('click', () => {
      if (replyInput.value !== '') {
        let reply = createElement('div', replyInput.value, 'reply');
        replyContainer.appendChild(reply);
        replyInput.value = '';
        replyCount++;
        updateReplyCount();
      }
    });

    postHeader.appendChild(nameElement);
    postHeader.appendChild(removeButton);
    postHeader.appendChild(editButton);
    postHeader.appendChild(viewComments);

    postBody.appendChild(textElement);
    postBody.appendChild(replyContainer);
    postBody.appendChild(replyInput);
    postBody.appendChild(submitReplyButton);
    
    postContainer.appendChild(postHeader);
    postContainer.appendChild(postBody);
    
    posts.appendChild(postContainer);

    // Clear inputs
    nameInput.value = "";
    postInput.value = "";
  }
}

submitButton.addEventListener("click", addPost);

// Hide/show functionality for 'viewPosts' and 'backToForm' buttons
viewPostsButton.addEventListener('click', () => {
  addPostCard.classList.add('hide');
  posts.classList.remove('hide');
  backToFormButton.classList.remove('hide');
  viewPostsButton.classList.add('hide');
});

backToFormButton.addEventListener('click', () => {
  addPostCard.classList.remove('hide');
  posts.classList.add('hide');
  backToFormButton.classList.add('hide');
  viewPostsButton.classList.remove('hide');
});
