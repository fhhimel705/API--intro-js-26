function photoData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      const photoData = document.getElementById("photo-data");
      for (const photo of data) {
        const photoDiv = document.createElement("div");
        photoDiv.innerHTML = `
            <h2> id : ${photo.id} </h2>
            <p> photo link : ${photo.url} </p>
            `;
        photoData.appendChild(photoDiv);
      }
    });
}
