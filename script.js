createTask (); 
changeBackgroundColor();
riskTask();
resetAll();
removeCompletedTask();

function createTask() {
    const taskButton = document.querySelector('#criar-tarefa');
    const orderList = document.querySelector('#lista-tarefas');
    const inputTask = document.querySelector('#texto-tarefa');

    taskButton.addEventListener('click' , function(event) {

        const newLiTask = document.createElement("li");
        newLiTask.innerText = inputTask.value;
        newLiTask.classList.add('newTask');

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


function riskTask() {
    const orderList = document.getElementById("lista-tarefas");
    console.log (orderList)

    orderList.addEventListener('dblclick' , function(event) {
        //console.log("Oi");
        if (event.target.classList.contains("completed")) {
                 event.target.classList.remove("completed");
            } else {
                 event.target.classList.add("completed");
        }
                
            
        });
}
   
function resetAll() {
    const resetAllButton = document.getElementById("apaga-tudo");
    const orderList = document.getElementById("lista-tarefas");
    const taskList = document.getElementsByTagName("li");

    resetAllButton.addEventListener("click" , function() {

        for ( let counter = taskList.length-1 ; counter >= 0 ; counter -=1) {
            
            orderList.removeChild(taskList[counter]);
        }
    });
}

function removeCompletedTask() {

    const orderList = document.getElementById("lista-tarefas");

    const completedTask = document.getElementsByClassName("completed");

    const clearSelectedButton = document.getElementById("remover-finalizados");

    clearSelectedButton.addEventListener('click' , function(){
        for ( let counter = completedTask.length-1 ; counter >= 0 ; counter -= 1) {
        orderList.removeChild(completedTask[counter]);
        }   //corri o array ao contrario usando o .length-1 (como acabei fazendo tbm no caso anterior). Quando o array tem 4 elementos.     length= 4 [-1] = 3 .:   
        
        // 3 >= 0 Sim! Então executa e deleta um elemento.  Na proxima:
        
        // 2 >= 0 Sim! Então executa e deleta um elemento.) Na proxima:  
        
        // 0 >= 0 Sim tbm! Na proxima:

        // -1 >= 0 ? Não, é menor! Então para de executar o código. e de deletar elementos.
               
    });
}