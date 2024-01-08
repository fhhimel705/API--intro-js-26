function albumData() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => {
      const albumData = document.getElementById("album-data");
      for (const album of data) {
        const albumDiv = document.createElement("div");
        albumDiv.innerHTML = `
        <h2>id : ${album.id} </h2>
        <p> album title : ${album.title} </p>
        `;
        albumData.appendChild(albumDiv);
      }
    });
}
