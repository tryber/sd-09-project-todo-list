createTask () 

function createTask() {
    const taskButton = document.querySelector('#criar-tarefa');
    const orderList = document.querySelector('#lista-tarefas');
    const inputTask = document.querySelector('#texto-tarefa');



    taskButton.addEventListener('click' , function(event) {

        const newLiTask = document.createElement("li");
        newLiTask.innerText = inputTask.value;

        orderList.appendChild(newLiTask)

        inputTask.value="";
        
    })
}