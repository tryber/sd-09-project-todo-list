let buttonPress = document.getElementById('criar-tarefa');
let inputField = document.getElementById('texto-tarefa');
let toDoList = document.getElementById('lista-tarefas')
let buttonDelete = document.getElementById('apaga-tudo')

buttonPress.addEventListener('click', function(){
    var appendToList = document.createElement('li');
    appendToList.classList.add('lista-tarefas');
    appendToList.innerText = inputField.value;
    toDoList.appendChild(appendToList);
    inputField.value = "";
})

buttonPress.addEventListener('dblclick', function(){
    appendToList.style.textDecoration = "line-through"
})

buttonDelete.addEventListener('click', function(){
    toDoList.removeChild('li');
})