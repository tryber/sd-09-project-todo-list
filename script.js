function addTasks(){    
    const olListaTarefas = document.querySelector('#lista-tarefas');
    const buttonCreateTasks = document.querySelector('#criar-tarefa');    
    buttonCreateTasks.addEventListener('click', function(){
        const lengthValeu = document.querySelector('#texto-tarefa').value.length
        if(lengthValeu > 0){
            const textTasks = document.querySelector('#texto-tarefa');      
            const createLi = document.createElement('li');
            createLi.innerText = textTasks.value;
            olListaTarefas.appendChild(createLi);  
            textTasks.value = '';
        }               
    })     
}
addTasks();

function itemSelected(){
    const olListaTarefas = document.querySelector('ol#lista-tarefas');
    olListaTarefas.addEventListener('click', function(event){
        const li = event.target;
        li.classList.add('selectedList')        
    })   
}
itemSelected();

// const selectedListaTarefas = document.querySelectorAll('ol#lista-tarefas li');
// if(selectedListaTarefas.length > 0){
//     for(let indexList = 0; indexList < selectedListaTarefas.length; indexList += 1){
//         selectedListaTarefas[indexList].addEventListener('click', function(){
//             selectedListaTarefas[indexList].classList.add('selectedList');                
//         })
//     }
// }    