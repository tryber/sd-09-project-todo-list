function setFocusToInputText() {
  const inputText = document.getElementById('texto-tarefa');
  inputText.focus();
}

function createTask() {
  const inputTextOfTask = document.getElementById('texto-tarefa');
  const taskTextTyped = inputTextOfTask.value;
  const taskList = document.getElementById('lista-tarefas');
  const newTaskElement = document.createElement('li');
  if (taskTextTyped === '') {
    alert('Please type some text to describe your task!');
    setFocusToInputText();
    return null;
  }
  newTaskElement.classList.add('task-item');
  newTaskElement.innerText = taskTextTyped;
  taskList.appendChild(newTaskElement);
  inputTextOfTask.value = '';
  setFocusToInputText();
  return 0;
}

function unselectTaskItem() {
  const taskItems = document.querySelectorAll('.task-item');
  for (let index = 0; index < taskItems.length; index += 1) {
    taskItems[index].classList.remove('selected-task');
  }
}

function setTaskAsFinished(evt) {
  if (evt.target.className) {
    unselectTaskItem();
    evt.target.classList.toggle('completed');
  }
  setFocusToInputText();
}

function selectTaskItem(evt) {
  if (evt.target.className) {
    unselectTaskItem();
    evt.target.classList.add('selected-task');
    setFocusToInputText();
  }
}

function persistTasksToLocalStorage() {
  const taskItems = document.getElementsByClassName('task-item');
  const tasksInfo = [];
  for (let index = 0; index < taskItems.length; index += 1) {
    const taskObject = {
      taskText: taskItems[index].innerText,
      taskClasses: taskItems[index].className,
    };
    tasksInfo[index] = taskObject;
  }
  localStorage.setItem('tasks', JSON.stringify(tasksInfo));
  setFocusToInputText();
}

function extractStorageInfoObjects(taskObject) {
  let infoString = '';
  for (let index = 0; index < taskObject.length; index += 1) {
    infoString += taskObject[index];
  }
  return infoString;
}

function getTasksFromLocalStorage() {
  const taskListParent = document.getElementById('lista-tarefas');
  const tasksRecoveredFromStorage = JSON.parse(localStorage.getItem('tasks'));
  if (tasksRecoveredFromStorage === null) {
    setFocusToInputText();
    return null;
  }
  for (let index = 0; index < tasksRecoveredFromStorage.length; index += 1) {
    const taskClassesArray = tasksRecoveredFromStorage[index].taskClasses;
    const taskClasses = extractStorageInfoObjects(taskClassesArray);
    const taskItem = document.createElement('li');
    taskItem.className = taskClasses;
    taskItem.innerText = tasksRecoveredFromStorage[index].taskText;
    taskListParent.appendChild(taskItem);
  }
  setFocusToInputText();
  return 0;
}

function changeTaskPlaceUP(taskToMoveUp, taskToMoveDown) {
  const taskList = document.getElementsByClassName('task-item');
  const previousTaskText = taskToMoveDown.innerText;
  const previousTaskClasses = taskToMoveDown.classList.value;
  for (let index = 0; index < taskList.length; index += 1) {
    if (taskList[index].className === taskToMoveUp.className) {
      taskList[index].previousElementSibling.innerText = taskToMoveUp.innerText;
      taskList[index].previousElementSibling.classList.value = taskToMoveUp.classList.value;
      taskList[index].innerText = previousTaskText;
      taskList[index].classList.value = previousTaskClasses;
      return 0;
    }
  }
  return null;
}

function changeTaskPlaceDown(taskToMoveDown, taskToMoveUP) {
  const taskList = document.getElementsByClassName('task-item');
  const nextTaskText = taskToMoveUP.innerText;
  const nextTaskClasses = taskToMoveUP.classList.value;
  for (let index = 0; index < taskList.length; index += 1) {
    if (taskList[index].className === taskToMoveDown.className) {
      taskList[index].nextElementSibling.innerText = taskToMoveDown.innerText;
      taskList[index].nextElementSibling.classList.value = taskToMoveDown.classList.value;
      taskList[index].innerText = nextTaskText;
      taskList[index].classList.value = nextTaskClasses;
      return 0;
    }
  }
  return null;
}

function moveUp() {
  const selectedTask = document.querySelector('.selected-task');
  if (selectedTask === null) {
    alert('A task must be selected first.');
    return null;
  }
  const previousTask = selectedTask.previousElementSibling;
  if (previousTask === null) {
    alert('The selected task is already the first one.');
    return null;
  }
  changeTaskPlaceUP(selectedTask, previousTask);
  return 0;
}

function moveDown() {
  const selectedTask = document.querySelector('.selected-task');
  if (selectedTask === null) {
    alert('A task must be selected first.');
    return null;
  }
  const nextTask = selectedTask.nextElementSibling;
  if (nextTask === null) {
    alert('The selected task is already the last one.');
    return null;
  }
  changeTaskPlaceDown(selectedTask, nextTask);
  return 0;
}

function removeTask(task) {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.removeChild(task);
}

function removeSelectedTask() {
  const selectedTask = document.querySelector('.selected-task');
  if (selectedTask !== null) {
    removeTask(selectedTask);
  }
}

function removeCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');
  const completedTasksLength = completedTasks.length;
  for (let index = 0; index < completedTasksLength; index += 1) {
    removeTask(completedTasks[0]);
  }
  setFocusToInputText();
}

function removeAllTasks() {
  const taskItems = document.getElementsByClassName('task-item');
  const taskListLength = taskItems.length;
  for (let index = 0; index < taskListLength; index += 1) {
    removeTask(taskItems[0]);
  }
  setFocusToInputText();
}

const createTaskButton = document.getElementById('criar-tarefa');
const taskOrderedList = document.getElementById('lista-tarefas');
const saveTasksButton = document.getElementById('salvar-tarefas');
const removeAllTasksButton = document.getElementById('apaga-tudo');
const removeCompletedTasksButton = document.getElementById('remover-finalizados');
const removeSelectedTaskButton = document.getElementById('remover-selecionado');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
getTasksFromLocalStorage();
createTaskButton.addEventListener('click', createTask);
saveTasksButton.addEventListener('click', persistTasksToLocalStorage);
taskOrderedList.addEventListener('click', selectTaskItem);
taskOrderedList.addEventListener('dblclick', setTaskAsFinished);
moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);
removeSelectedTaskButton.addEventListener('click', removeSelectedTask);
removeCompletedTasksButton.addEventListener('click', removeCompletedTasks);
removeAllTasksButton.addEventListener('click', removeAllTasks);
