function addTask() {
  const taskName = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerText = taskName.value;
  listItem.addEventListener('click', changeTaskBgcolor);
  taskName.value = '';
  taskList.appendChild(listItem);
}

function changeSelectedTask(event) {
  const selectedTask = document.querySelector('.selected')
  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function addCreateTaskListener() {
  const createTaskButton = document.querySelector('#criar-tarefa');
  createTaskButton.addEventListener('click', addTask);
}

window.onload = function () {
  addCreateTaskListener();
};
