let createElementLi = document.createElement('li');
let listaOl = document.querySelector('#lista-tarefas');
const createTaskButton = document.querySelector('#criar-tarefa');
const eraseAllButtom = document.querySelector('#apaga-tudo');
let text = document.querySelector('#texto-tarefa');
let orderCount = 0;



const createTask = () =>{
    createTaskButton.addEventListener('click', function(){ 
        let createElementLi = document.createElement('li');      
        createElementLi.innerText = text.value;
        liStyle(createElementLi);
        listaOl.appendChild(createElementLi); 
        text.value= '';       
    })
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

const liStyle = (createElementLi) => {
    orderCount += 1;
    createElementLi.style.order = orderCount;
    createElementLi.classList.add('task');
       
    
}


window.onload = () => {
    createTask();
    addSelectTask();
    addCompletedTask();
    clearList();
    
}