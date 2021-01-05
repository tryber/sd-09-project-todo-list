const botao = document.getElementById("criar-tarefa");

function addONeListener(objeto, func){
    objeto.addEventListener('click', func);
}

function addNew(){
    let taskContent = document.getElementById('texto-tarefa').value;
    let taskElement = document.createElement('li');
    let lista = document.getElementById('lista-tarefas');

    taskElement.innerText = taskContent;

    lista.appendChild(taskElement);
    clearInput('texto-tarefa');
}

function clearInput(classe){
    document.getElementById(classe).value = '';
}

addONeListener(botao, addNew);