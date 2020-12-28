const inputField = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function removeSelectedClass() {
  const taskArray = document.querySelectorAll('.task');
  for (let index = 0; index < taskArray.length; index += 1) {
    taskArray[index].classList.remove('selected');
  }
}

function clickToSelect() {
  taskList.addEventListener('click', function (event) {
    removeSelectedClass();
    event.target.classList += ' selected';
  });
}

function dblClickToComplete() {
  taskList.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
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
  taskList.removeChild(selectedTask);
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

window.onload = function () {
  const addButton = document.querySelector('#criar-tarefa');
  const clearButton = document.querySelector('#apaga-tudo');
  const removeButton = document.querySelector('#remover-finalizados');
  const deleteButton = document.querySelector('#remover-selecionado');
  const saveButton = document.querySelector('#salvar-tarefas');

  addButton.addEventListener('click', addNewTask);
  clearButton.addEventListener('click', clearTaskList);
  removeButton.addEventListener('click', removeCompletedTasks);
  deleteButton.addEventListener('click', removeSelectedTask);
  saveButton.addEventListener('click', saveTasks);

  clickToSelect();
  dblClickToComplete();
  loadSavedTasks();
};
