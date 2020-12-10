function addTask () {
  const taskName = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerText = taskName.value;
  taskName.value = '';
  taskList.appendChild(listItem);
}

function addCreateTaskListener() {
  const createTaskButton = document.querySelector('#criar-tarefa');
  createTaskButton.addEventListener('click', addTask);
}

window.onload = function () {
  addCreateTaskListener();
};
