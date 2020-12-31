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

const btnLimparLista = document.querySelector('#apaga-tudo');
function removeList(){
btnLimparLista.addEventListener('click', function(){
    const cleanList = document.querySelectorAll('ol li');
    const ol = document.querySelector('ol');
    for(let indexClean = 0; indexClean < cleanList.length; indexClean +=1){
        ol.removeChild(cleanList[indexClean]);
    }
})
}
removeList();