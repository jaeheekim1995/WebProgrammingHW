// Example created using user placeholder information from: https://jsonplaceholder.typicode.com/users

// JSON data examples can be found in testUserData.json file

// GLOBAL SELECTOR VARIABLES
const showBtn = document.querySelector(".show-users-btn");
const userOutput = document.querySelector(".user-output");

// Event Listener - button click
showBtn.addEventListener("click", fetchUsers);

// Get User Data in JSON format from JSON Placeholder
function fetchUsers() {
  console.log("Click!");

  // URL goes in the fetch parameters
  fetch(` https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      // Error checking, if API not successfully fetched from
      if (!response.ok) {
        alert("Error!");
        throw new Error("Something went wrong...");
      }
      // Convert (Parse) the JSON data
      return response.json();
    })
    .then(function (data) {
      // Take each piece of information retreived and render data.
      data.forEach((user) => {
        console.log(user.username);
        const newLi = document.createElement("li");
        newLi.innerHTML = `
        <div class="card">
        <h2>${user.name}</h2>
        <h3>${user.username}</h3>
        <h3>${user.email}</h3>
        <p>${user.phone}</p>
        </div>`;
        userOutput.appendChild(newLi);
      });
    });
}
