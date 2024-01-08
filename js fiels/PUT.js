function getPut() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "put title",
      body: "put body",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => putDiv(data));
}
function putDiv( data){
const putDiv = document.getElementById("put-div");
const createPutDiv = document.createElement('div');
createPutDiv.innerHTML = `
<h2> title : ${data.title} </h2>
<h2> body : ${data.body} </h2>
<h2> userId : ${data.userId} </h2>
`
console.log(data);
putDiv.appendChild(createPutDiv);
}