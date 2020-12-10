function changeCompletedTask(event) {
  if (event.target.className === 'completed selected') {
    event.target.className = 'selected';
  } else {
    event.target.classList.add('completed');
  }
}

function changeSelectedTask(event) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function addTask() {
  const taskName = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerText = taskName.value;
  listItem.addEventListener('click', changeSelectedTask);
  listItem.addEventListener('dblclick', changeCompletedTask);
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
