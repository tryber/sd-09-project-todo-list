window.onload = function() {
    addToDo()
}
const listElement = document.querySelector('#lista-tarefas');
const inputElement = document.querySelector('#texto-tarefa');

function addToDo() {
    const buttonCreateTask = document.querySelector('#criar-tarefa')
    buttonCreateTask.addEventListener('click', function() {
        const createTask = document.createElement('li');
        createTask.innerText = inputElement.value;

        listElement.appendChild(createTask);
        inputElement.value = '';
    })
}
