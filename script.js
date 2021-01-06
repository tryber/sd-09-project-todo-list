createTask (); 
//changeBackgroundColor();
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

        for ( let counter = 0 ; counter < taskList.length ; counter +=1) {
            
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
        }   //corri o array ao contrario para nao alterar o valor conforme vai diminuindo. No começo do carregamento da página as tasks ou as completed Tasks são 0. N tem nenhuma. Então ele executa somente uma vez. 0 < 0 (zero é menor que 0? Não é igual, Então executa e deleta um elemento.)
        // 1 é menor que 0 ? Não é maior! Então para de executar o código.
        //Dessa maneira
    });
}



