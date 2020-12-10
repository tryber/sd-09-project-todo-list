const btnAddTask = document.querySelector('#criar-tarefa');

function createTask() {
  let input = document.querySelector('#texto-tarefa').value;
  let listTask = document.createElement('li');
  listTask.innerText = input;
  document.querySelector('#lista-tarefas').appendChild(listTask);
  clearTextInput();
}

btnAddTask.addEventListener('click', createTask)

function clearTextInput() {
  document.querySelector('#texto-tarefa').value = '';
}
