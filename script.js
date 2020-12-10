const globalElements = {
  createTaskButton: document.querySelector('#criar-tarefa'),
  clearTasksButton: document.querySelector('#apaga-tudo'),
  saveTasksButton: document.querySelector('#salvar-tarefas'),
  removeCompletedButton: document.querySelector('#remover-finalizados'),
  newTaskInput: document.querySelector('#texto-tarefa'),
  taskList: document.querySelector('#lista-tarefas'),
  tasksArray: [],
};

function removeElement(element) {
  element.remove();
}

function resetHighlightedTask(element) {
  element.classList.remove('highlighted');
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
  for (let index = 0; index < savedTasks.length; index += 1) {
    const task = savedTasks[index];
    const newTask = createNewElement('li', { className: task.classes, innerText: task.text });
    addNewTask(newTask);
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

function highlightTask(event) {
  if (event.target.classList.contains('task')) {
    callAllBySelector(resetHighlightedTask, '.highlighted');
    event.target.classList.add('highlighted');
  }
}

function toggleTaskAsCompleted(event) {
  if (event.target.classList.contains('task')) {
    event.target.classList.toggle('completed');
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

function setAllEvents() {
  setCreateTaskEvent();
  setTaskListEvent();
  setClearTasksEvent();
  setRemoveCompletedEvent();
  setSaveTasksEvent();
  loadSavedTasks();
}

window.onload = setAllEvents;
