const globalElements = {
  createTaskButton: document.querySelector('#criar-tarefa'),
  clearTasksButton: document.querySelector('#apaga-tudo'),
  removeCompletedButton: document.querySelector('#remover-finalizados'),
  newTaskInput: document.querySelector('#texto-tarefa'),
  taskList: document.querySelector('#lista-tarefas'),
};

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

function resetTaskValue() {
  globalElements.newTaskInput.value = '';
}

function createNewTask() {
  const newTaskText = globalElements.newTaskInput.value;
  const newTask = createNewElement('li', { className: 'task', innerText: newTaskText });
  addNewTask(newTask);
  resetTaskValue();
}

function resetHighlightedTask() {
  const highlightedTask = document.querySelector('.highlighted');
  if (highlightedTask !== null) {
    highlightedTask.classList.remove('highlighted');
  }
}

function elementHasClass(element, className) {
  return element.className.includes(className);
}

function highlightTask(event) {
  if (elementHasClass(event.target, 'task')) {
    resetHighlightedTask();
    event.target.classList.add('highlighted');
  }
}

function toggleClass(element, className) {
  if (elementHasClass(element, className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

function toggleTaskAsCompleted(event) {
  if (elementHasClass(event.target, 'task')) {
    toggleClass(event.target, 'completed');
  }
}

function removeAllBySelector(selector) {
  const nodeList = document.querySelectorAll(selector);
  for (let index = 0; index < nodeList.length; index += 1) {
    nodeList[index].remove();
  }
}

function setCreateTaskEvent() {
  globalElements.createTaskButton.addEventListener('click', createNewTask);
}

function setTaskListEvent() {
  globalElements.taskList.addEventListener('click', highlightTask);
  globalElements.taskList.addEventListener('dblclick', toggleTaskAsCompleted);
}

function setClearTasksEvent() {
  globalElements.clearTasksButton.addEventListener('click', function () {
    removeAllBySelector('.task');
  });
}

function setRemoveCompletedEvent() {
  globalElements.removeCompletedButton.addEventListener('click', function () {
    removeAllBySelector('.completed');
  });
}

function setAllEvents() {
  setCreateTaskEvent();
  setTaskListEvent();
  setClearTasksEvent();
  setRemoveCompletedEvent();
}

setAllEvents();
