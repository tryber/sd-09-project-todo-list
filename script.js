const globalElements = {
  createTaskButton: document.querySelector('#criar-tarefa'),
  clearTasksButton: document.querySelector('#apaga-tudo'),
  saveTasksButton: document.querySelector('#salvar-tarefas'),
  moveUpButton: document.querySelector('#mover-cima'),
  moveDownButton: document.querySelector('#mover-baixo'),
  removeCompletedButton: document.querySelector('#remover-finalizados'),
  removeSelectedButton: document.querySelector('#remover-selecionado'),
  newTaskInput: document.querySelector('#texto-tarefa'),
  taskList: document.querySelector('#lista-tarefas'),
  tasksArray: [],
};

function removeElement(element) {
  element.remove();
}

function resetSelectedTask(element) {
  element.classList.toggle('selected');
}

function callAllBySelector(calledFunction, selector) {
  const nodeList = document.querySelectorAll(selector);
  for (let index = 0; index < nodeList.length; index += 1) {
    calledFunction(nodeList[index]);
  }
}

function setPropertiesToNewElement(element, propertiesObject) {
  const propertiesKeys = Object.keys(propertiesObject);
  for (let index = 0; index < propertiesKeys.length; index += 1) {
    const key = propertiesKeys[index];
    element[key] = propertiesObject[key];
  }
}

function createNewElement(tag, propertiesObject) {
  const newElement = document.createElement(tag);
  setPropertiesToNewElement(newElement, propertiesObject);
  return newElement;
}

function addNewTask(newTask) {
  globalElements.taskList.appendChild(newTask);
}

function pushTaskToArray(element) {
  const taskObject = {
    text: element.textContent,
    classes: element.className,
  };
  globalElements.tasksArray.push(taskObject);
}

function loadSavedTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (savedTasks !== null) {
    for (let index = 0; index < savedTasks.length; index += 1) {
      const task = savedTasks[index];
      const newTask = createNewElement('li', { className: task.classes, innerText: task.text });
      newTask.classList.remove('selected');
      addNewTask(newTask);
    }
  }
}

function saveTasks() {
  callAllBySelector(pushTaskToArray, '.task');
  localStorage.setItem('tasks', JSON.stringify(globalElements.tasksArray));
}

function resetTaskValue() {
  globalElements.newTaskInput.value = '';
}

function createNewTask() {
  const newTaskText = globalElements.newTaskInput.value;
  const newTask = createNewElement('li', { className: 'task', innerText: newTaskText });
  addNewTask(newTask);
  resetTaskValue();
}

function selectTask(event) {
  if (event.target.classList.contains('task')) {
    if (!(event.target.classList.contains('selected'))) {
      callAllBySelector(resetSelectedTask, '.selected');
    }
    event.target.classList.add('selected');
  }
}

function toggleTaskAsCompleted(event) {
  if (event.target.classList.contains('task')) {
    event.target.classList.toggle('completed');
  }
}

function moveSelected(direction) {
  const selectedTask = document.querySelector('.selected');
  const isFirstTask = (globalElements.taskList.firstElementChild === selectedTask);
  const isLastTask = (globalElements.taskList.lastElementChild === selectedTask);
  let relatedTask;
  if ((direction === 'up') && !(isFirstTask)) {
    relatedTask = selectedTask.previousElementSibling;
    globalElements.taskList.insertBefore(selectedTask, relatedTask);
  }
  if ((direction === 'down') && !(isLastTask)) {
    relatedTask = selectedTask.nextElementSibling;
    globalElements.taskList.insertBefore(relatedTask, selectedTask);
  }
}

function setCreateTaskEvent() {
  globalElements.createTaskButton.addEventListener('click', createNewTask);
}

function setTaskListEvent() {
  globalElements.taskList.addEventListener('click', selectTask);
  globalElements.taskList.addEventListener('dblclick', toggleTaskAsCompleted);
}

function setClearTasksEvent() {
  globalElements.clearTasksButton.addEventListener('click', function () {
    callAllBySelector(removeElement, '.task');
  });
}

function setSaveTasksEvent() {
  globalElements.saveTasksButton.addEventListener('click', saveTasks);
}

function setRemoveCompletedEvent() {
  globalElements.removeCompletedButton.addEventListener('click', function () {
    callAllBySelector(removeElement, '.completed');
  });
}

function setMovesEvent() {
  globalElements.moveUpButton.addEventListener('click', function () { moveSelected('up'); });
  globalElements.moveDownButton.addEventListener('click', function () { moveSelected('down'); });
}

function setRemoveSelectedEvent() {
  globalElements.removeSelectedButton.addEventListener('click', function () {
    callAllBySelector(removeElement, '.selected');
  });
}

function setAllEvents() {
  setCreateTaskEvent();
  setTaskListEvent();
  setClearTasksEvent();
  setRemoveCompletedEvent();
  setRemoveSelectedEvent();
  setSaveTasksEvent();
  setMovesEvent();
  loadSavedTasks();
}

window.onload = function () {
  setAllEvents();
};
