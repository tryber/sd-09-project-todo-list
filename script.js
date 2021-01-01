const inputField = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
let darkTheme = false;

function removeSelectedClass() {
  const taskArray = document.querySelectorAll('.task');
  for (let index = 0; index < taskArray.length; index += 1) {
    taskArray[index].classList.remove('selected');
  }
}

function clickToSelect() {
  taskList.addEventListener('click', function (event) {
    if (event.target.nodeName === 'LI') {
      removeSelectedClass();
      event.target.classList.toggle('selected');
    }
  });
}

function dblClickToComplete() {
  taskList.addEventListener('dblclick', function (event) {
    if (event.target.nodeName === 'LI') {
      event.target.classList.toggle('completed');
    }
  });
}

function clearTaskList() {
  const taskArray = document.querySelectorAll('.task');
  for (let index = 0; index < taskArray.length; index += 1) {
    const task = taskArray[index];
    taskList.removeChild(task);
  }
}

function removeCompletedTasks() {
  const completedTasksArray = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasksArray.length; index += 1) {
    const completedTask = completedTasksArray[index];
    taskList.removeChild(completedTask);
  }
}

function removeSelectedTask() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    taskList.removeChild(selectedTask);
  }
}

function addNewTask() {
  if (inputField.value !== '') {
    const task = document.createElement('li');
    task.innerText = inputField.value;
    task.className = 'task';
    taskList.appendChild(task);
    inputField.value = '';
  } else {
    alert('Error: Digite ao menos 1 caractere.');
  }
}

function saveTasks() {
  localStorage.savedTasks = taskList.innerHTML;
}

function loadSavedTasks() {
  if (localStorage.savedTasks !== undefined) {
    taskList.innerHTML = localStorage.savedTasks;
  }
}

function moveUp() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask && selectedTask.previousElementSibling !== null) {
    selectedTask.parentNode.insertBefore(selectedTask, selectedTask.previousElementSibling);
  }
}

function moveDown() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask && selectedTask.nextSibling !== null) {
    selectedTask.parentNode.insertBefore(selectedTask.nextSibling, selectedTask);
  }
}

function toggleDarkTheme() {
  const app = document.querySelector('main');
  if (darkTheme) {
    app.style.backgroundColor = 'rgb(255, 255, 255, 0.7)';
    app.style.color = 'rgb(0, 0, 0)';
    darkTheme = false;
  } else {
    app.style.backgroundColor = 'rgb(0, 0, 0, 0.7)';
    app.style.color = 'rgb(255, 255, 255)';
    darkTheme = true;
  }
}

window.onload = function () {
  const addButton = document.querySelector('#criar-tarefa');
  const clearButton = document.querySelector('#apaga-tudo');
  const removeButton = document.querySelector('#remover-finalizados');
  const deleteButton = document.querySelector('#remover-selecionado');
  const saveButton = document.querySelector('#salvar-tarefas');
  const moveUpButton = document.querySelector('#mover-cima');
  const moveDownButton = document.querySelector('#mover-baixo');
  const settingsButton = document.querySelector('#settings');

  addButton.addEventListener('click', addNewTask);
  clearButton.addEventListener('click', clearTaskList);
  removeButton.addEventListener('click', removeCompletedTasks);
  deleteButton.addEventListener('click', removeSelectedTask);
  saveButton.addEventListener('click', saveTasks);
  moveUpButton.addEventListener('click', moveUp);
  moveDownButton.addEventListener('click', moveDown);
  settingsButton.addEventListener('click', toggleDarkTheme);

  clickToSelect();
  dblClickToComplete();
  loadSavedTasks();
};
