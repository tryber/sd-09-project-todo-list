const btnAddTask = document.querySelector('#criar-tarefa');

// Função responsável por limpar o campo de input
function clearTextInput() {
  document.querySelector('#texto-tarefa').value = '';
}

// Função responsável por adicionar uma nova tarefa
function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const listTask = document.createElement('li');
  listTask.innerText = input;
  document.querySelector('#lista-tarefas').appendChild(listTask);
  clearTextInput();
}

btnAddTask.addEventListener('click', createTask);
