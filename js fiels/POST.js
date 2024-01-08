function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "post title",
      body: "post body",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => postDiv(data));
}
function postDiv(json) {
  const postDiv = document.createElement("div");
  postDiv.innerHTML = `
     <h2> title : ${json.title} </h2>
     <h3> body : ${json.body} </h3>
     <h3> userId : ${json.userId} </h3>
     `;
  const post = document.getElementById("post-div");
  post.appendChild(postDiv);
}
