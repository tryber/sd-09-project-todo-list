let createElementLi = document.createElement('li');
let listaOl = document.querySelector('#lista-tarefas');
const createTaskButton = document.querySelector('#criar-tarefa');
const eraseAllButtom = document.querySelector('#apaga-tudo');
const eraseCompletedButtom = document.querySelector('#remover-finalizados');
let text = document.querySelector('#texto-tarefa');
let orderCount = 0;

const createTask = () =>{
    createTaskButton.addEventListener('click', function(){ 
        let createElementLi = document.createElement('li');      
        createElementLi.innerText = text.value;
        taskStyle(createElementLi);
        listaOl.appendChild(createElementLi); 
        text.value= '';       
    })
}

const taskStyle = (createElementLi) => {
    orderCount += 1;
    createElementLi.style.order = orderCount;
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

const addCompletedTask = () => {    
    listaOl.addEventListener('dblclick', function(event){    
        if (event.target.classList.contains('completed')){
            event.target.classList.remove('completed')            
        } else {
            event.target.classList.add('completed');
        }        
    })
}

const clearList = () => {
    eraseAllButtom.addEventListener('click', function(){
        listaOl.innerHTML = '';
    })
    
}

const clearCompletedTasks = () => {
    eraseCompletedButtom.addEventListener('click', function(){
        let completeds = document.querySelectorAll('li.completed');
        completeds.forEach((key) => {
            listaOl.removeChild(key);
        })
    })
}
document.get

window.onload = () => {
    createTask();
    addSelectTask();
    addCompletedTask();
    clearList();  
    clearCompletedTasks();  
}
