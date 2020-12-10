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
    let taskObject = {
        'taskText': taskItems[index].innerText,
        'taskClasses': taskItems[index].className,    
    }
    tasksInfo[index] = taskObject;
  }
  localStorage.setItem('tasks', JSON.stringify(tasksInfo));
  setFocusToInputText();
}

function extractStorageInfoObjects(taskObject) {
    let infoString = '';
    for (let index = 0; index < taskObject.length; index++) {
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
    let taskClassesArray = tasksRecoveredFromStorage[index].taskClasses;
    let taskClasses = extractStorageInfoObjects(taskClassesArray);
    const taskItem = document.createElement('li');
    taskItem.className = taskClasses;
    taskItem.innerText = tasksRecoveredFromStorage[index].taskText;
    taskListParent.appendChild(taskItem);
  }
  setFocusToInputText();
  return 0;
}

function removeTask(task) {
  const taskList = document.getElementById('lista-tarefas');
  taskList.removeChild(task);
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
getTasksFromLocalStorage();
createTaskButton.addEventListener('click', createTask);
saveTasksButton.addEventListener('click', persistTasksToLocalStorage);
taskOrderedList.addEventListener('click', selectTaskItem);
taskOrderedList.addEventListener('dblclick', setTaskAsFinished);
removeCompletedTasksButton.addEventListener('click', removeCompletedTasks);
removeAllTasksButton.addEventListener('click', removeAllTasks);
