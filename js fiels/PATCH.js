function getPatch() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      id: 1,
      title: "patch title",
      body: "patch body",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => patchDiv(data));
}
function patchDiv(data) {
  const patchDiv = document.getElementById("patch-div");
  const createPatchDiv = document.createElement("div");
  createPatchDiv.innerHTML = `
<h2> title : ${data.title} </h2>
<h2> body : ${data.body} </h2>
<h2> userId : ${data.userId} </h2>
`;
  console.log(data);
  patchDiv.appendChild(createPatchDiv);
}
