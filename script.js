let text = document.querySelector('#texto-tarefa');
let createElementLi = document.createElement('li');
let listaOl = document.querySelector('#lista-tarefas');
const createTaskButton = document.querySelector('#criar-tarefa');


const createTask = () =>{
    createTaskButton.addEventListener('click',  function(){   
        let createElementLi = document.createElement('li');    
        AddTaskStyle(createElementLi);
        listaOl.appendChild(createElementLi); 
        text.value= '';       
    })
}

const AddTaskStyle = (createElementLi) => { 
    createElementLi.innerText = text.value;   
    createElementLi.classList.add('task');      
}

const addSelectTask = () => { 
    let listaOl = document.querySelector('#lista-tarefas');   
    listaOl.addEventListener('click', function(event) {
    let selectedList = document.querySelector('.selected');
        if(selectedList && event.target.classList.contains('task')) {
            selectedList.classList.remove('selected');
        }
        if(event.target.classList.contains('task')) {
            event.target.classList.add('selected');
        }        
    })
}

window.onload = () => {
    createTask();
    addSelectTask();
}