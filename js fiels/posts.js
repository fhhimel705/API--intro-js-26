function postData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const postTitle = document.getElementById('post-title');
        for(const title of data){
            const div = document.createElement('div');
            div.classList.add('title-div');
            div.innerHTML = `
            <h3> title of id: ${title.id} </h3>
            <p> title: ${title.title}</p>
            `
            postTitle.appendChild(div);
            
        }
    })
}
