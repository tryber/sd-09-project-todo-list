/* Adiciona tarefa */
const addButton = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
addButton.addEventListener('click', function () {
  if (textTask.value != '') {
    let addTask = document.createElement('li');
    addTask.innerText = textTask.value;
    taskList.appendChild(addTask);
    textTask.value = '';
  }
});