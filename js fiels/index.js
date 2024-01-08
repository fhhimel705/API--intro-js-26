const usersUrl = "https://jsonplaceholder.typicode.com/users";

function usersData() {
  fetch(usersUrl)
    .then((res) => res.json())
    .then((data) => displayLNG(data));
}
function displayLNG(data) {
    const ul = document.getElementById("ul-users");
  for (const user of data) {
    // console.log("lng :", user.address.geo.lng);
    const li = document.createElement('li');
    li.innerText = `lng : ${user.address.geo.lng}`;
    ul.appendChild(li);
  }
}
