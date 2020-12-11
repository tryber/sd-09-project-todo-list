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

function addTask(event, taskName, className) {
  const taskList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  if (!taskName) {
    const task = document.querySelector('#texto-tarefa');
    taskName = task.value;
    task.value = '';
  }
  if (className) {
    listItem.className = className;
  }
  listItem.innerText = taskName;
  listItem.addEventListener('click', changeSelectedTask);
  listItem.addEventListener('dblclick', changeCompletedTask);
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

function saveTasks() {
  const taskList = document.querySelector('#lista-tarefas');
  const tasks = taskList.children;
  localStorage.clear();
  for (let index = 0; index < tasks.length; index += 1) {
    const taskProperties = JSON.stringify([tasks[index].innerText, tasks[index].className]);
    localStorage.setItem(index, taskProperties);
  }
}

function moveTaskUp() {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected.previousElementSibling) {
    const taskUp = taskSelected.previousElementSibling;
    const taskName = taskSelected.innerText;
    const taskClass = taskSelected.className;
    taskSelected.innerText = taskUp.innerText;
    taskSelected.className = taskUp.className;
    taskUp.innerText = taskName;
    taskUp.className = taskClass;
  }
}

function moveTaskDown() {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected.nextElementSibling) {
    const taskDown = taskSelected.nextElementSibling;
    const taskName = taskSelected.innerText;
    const taskClass = taskSelected.className;
    taskSelected.innerText = taskDown.innerText;
    taskSelected.className = taskDown.className;
    taskDown.innerText = taskName;
    taskDown.className = taskClass;
  }
}

function addCreateButtonsListeners() {
  const createTaskButton = document.querySelector('#criar-tarefa');
  const clearTasksButton = document.querySelector('#apaga-tudo');
  const removeCompletedButton = document.querySelector('#remover-finalizados');
  const saveTasksButton = document.querySelector('#salvar-tarefas');
  const taskUpButton = document.querySelector('#mover-cima');
  const taskDownButton = document.querySelector('#mover-baixo');
  createTaskButton.addEventListener('click', addTask);
  clearTasksButton.addEventListener('click', clearTasks);
  removeCompletedButton.addEventListener('click', removeCompleted);
  saveTasksButton.addEventListener('click', saveTasks);
  taskUpButton.addEventListener('click', moveTaskUp);
  taskDownButton.addEventListener('click', moveTaskDown);
}

function loadTasks() {
  for (let index = 0; index < localStorage.length; index += 1) {
    const taskProperties = JSON.parse(localStorage.getItem(index));
    addTask(null, taskProperties[0], taskProperties[1]);
  }
}

window.onload = function () {
  addCreateButtonsListeners();
  loadTasks();
};
