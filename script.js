function changeCompletedTask(event) {
  if (event.target.className === 'completed selected') {
    event.target.classList.remove('completed');
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

function clearTasks() {
  const taskList = document.querySelector('#lista-tarefas');
  while (taskList.firstElementChild) {
    taskList.removeChild(taskList.firstElementChild);
  }
}

function removeCompleted() {
  const taskList = document.querySelector('#lista-tarefas');
  const completedTaskList = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTaskList.length; index += 1) {
    taskList.removeChild(completedTaskList[index]);
  }
}

function addCreateButtonsListeners() {
  const createTaskButton = document.querySelector('#criar-tarefa');
  const clearTasksButton = document.querySelector('#apaga-tudo');
  const removeCompletedButton = document.querySelector('#remover-finalizados');
  createTaskButton.addEventListener('click', addTask);
  clearTasksButton.addEventListener('click', clearTasks);
  removeCompletedButton.addEventListener('click', removeCompleted);
}

window.onload = function () {
  addCreateButtonsListeners();
};
