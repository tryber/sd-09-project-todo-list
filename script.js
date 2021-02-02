let createElementLi = document.createElement('li');
let listaOl = document.querySelector('#lista-tarefas');
const createTaskButton = document.querySelector('#criar-tarefa');
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

const selectTask = () => { 
    let listaOl = document.querySelector('#lista-tarefas');   
    listaOl.addEventListener('click', function(event) {
    let selectedList = document.querySelector('.selected');
        if(selectedList) {
            selectedList.classList.remove('selected');
        }
        event.target.classList.add('selected');
    })
}

const clearList = () => {

}

const liStyle = (createElementLi) => {
    orderCount += 1;
    createElementLi.style.order = orderCount;
       
    
}


window.onload = () => {
    createTask();
    selectTask();
    
}