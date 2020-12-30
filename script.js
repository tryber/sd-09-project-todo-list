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

