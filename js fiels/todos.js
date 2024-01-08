function todosData(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data =>{
        const todosData = document.getElementById("todos-data");
        for(const todos of data){
            const todosDiv = document.createElement('div');
            // if(todos.completed === true){

            //     todosDiv.innerHTML = `
            //     <h2> id : ${todos.id} </h2>
            //     <p> todos : completed </p>
            //     `
            // }
            // else{
            //     todosDiv.innerHTML = `
            //     <h2> id : ${todos.id} </h2>
            //     <p> todos : incompleted </p>
            //     `;
            // }
            todosDiv.classList.add("title-div");
            todosDiv.innerHTML = `
               <h2> id : ${todos.id} </h2>
               <p> todos : ${todos.completed === true? 'complete' : 'incomplete'} </p>
               `;
            todosData.appendChild(todosDiv);
        }
    })
}