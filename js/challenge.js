let counter = 0;
let interval;
let paused = false;
let likes = {};

window.onload = () => {
  interval = setInterval(updateTimer, 1000); // Update every second when page loads
};

function updateTimer() {
  if (!paused) {
    counter++;
    document.getElementById("counter").textContent = counter;
  }
}

// Increment the counter
document.getElementById("plus").addEventListener("click", () => {
  counter++;
  document.getElementById("counter").textContent = counter;
});

// Decrement the counter
document.getElementById("minus").addEventListener("click", () => {
  counter--;
  document.getElementById("counter").textContent = counter;
});

// Like the current counter value
document.getElementById("heart").addEventListener("click", () => {
  if (likes[counter]) {
    likes[counter]++;
  } else {
    likes[counter] = 1;
  }
  const likesList = document.querySelector('.likes');
  const likeItem = document.createElement('li');
  likeItem.textContent = `Number ${counter} has been liked ${likes[counter]} times`;
  likesList.appendChild(likeItem);
});

// Pause or resume the counter
document.getElementById("pause").addEventListener("click", () => {
  if (paused) {
    // Resume
    interval = setInterval(updateTimer, 1000);
    document.getElementById("pause").textContent = "Pause";
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
    document.getElementById("comment-input").disabled = false;
  } else {
    // Pause
    clearInterval(interval);
    document.getElementById("pause").textContent = "Resume";
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("comment-input").disabled = true;
  }
  paused = !paused;
});

// Submit a comment
document.getElementById("comment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = document.getElementById("comment-input").value;
  if (commentText.trim() !== "") {
    const commentList = document.getElementById("list");
    const newComment = document.createElement("p");
    newComment.textContent = commentText;
    commentList.appendChild(newComment);
    document.getElementById("comment-input").value = ""; // Clear the input
  }
});
