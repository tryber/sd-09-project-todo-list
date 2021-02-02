let createElementLi = document.createElement('li');
let listaOl = document.querySelector('#lista-tarefas');
const createTaskButton = document.querySelector('#criar-tarefa');
const eraseAllButtom = document.querySelector('#apaga-tudo');
const eraseCompletedButtom = document.querySelector('#remover-finalizados');
const buttomUp = document.querySelector('#up-buttom');
const buttomDown = document.querySelector('#down-buttom');
let text = document.querySelector('#texto-tarefa');


const createTask = () =>{
    createTaskButton.addEventListener('click', function(){ 
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

const moveTaskUp = () => {
    buttomUp.addEventListener('click', function(){
        let taskList = document.querySelectorAll('li');
        for (let index = 0; index < taskList.length; index +=1) {
            let pos = taskList[index];
            if(pos.classList.contains('selected') && pos.previousSibling !== null){
                listaOl.insertBefore(pos, taskList[index - 1]);
            }
        }
    })
}

const moveTaskDown = () => {
    buttomDown.addEventListener('click', function(){
        let taskList = document.querySelectorAll('li');
        for (let index = 0; index < taskList.length; index +=1) {
            let pos = taskList[index];
            if(pos.classList.contains('selected') && pos.nextSibling !== null){
                listaOl.insertBefore(taskList[index + 1], pos);
            }
        }
    })
}

window.onload = () => {
    createTask();
    addSelectTask();
    addCompletedTask();
    clearList();  
    clearCompletedTasks();  
    moveTaskUp();
    moveTaskDown();
}
