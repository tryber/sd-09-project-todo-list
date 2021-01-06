createTask () 
changeBackgroundColor()

function createTask() {
    const taskButton = document.querySelector('#criar-tarefa');
    const orderList = document.querySelector('#lista-tarefas');
    const inputTask = document.querySelector('#texto-tarefa');



    taskButton.addEventListener('click' , function(event) {

        const newLiTask = document.createElement("li");
        newLiTask.innerText = inputTask.value;
        // newLiTask.classList.add('newTask');

        orderList.appendChild(newLiTask)

        inputTask.value="";

    })
}

    function changeBackgroundColor() {

        const orderList = document.querySelector('#lista-tarefas');

        

        

        orderList.addEventListener('click' , function(event) {

            const selectedTask = document.querySelector('.selected');

            if (selectedTask !== undefined && selectedTask !== null) { 
                selectedTask.classList.remove('selected');
                event.target.classList.add('selected');
            };
                event.target.classList.add('selected');
                  
        });

    }