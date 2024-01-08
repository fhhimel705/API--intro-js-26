function commentData(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => {
        const emailComment = document.getElementById("email-commnet");
        for(const comment of data ){
            const commentsDiv = document.createElement('div');
            commentsDiv.innerHTML = `
            <h2> email : ${comment.email} </h2>
            <p> comment : ${comment.body} </p>
            `
            emailComment.appendChild(commentsDiv);
        }
    })
}