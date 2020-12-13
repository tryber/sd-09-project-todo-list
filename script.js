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

function resetSelectedTask(element) {
  element.classList.remove('selected');
}

function selectTask(event) {
  const hasTaskClass = (event.target.classList.contains('task'));
  const notHasSelectedClass = !(event.target.classList.contains('selected'));
  if (hasTaskClass) {
    if (notHasSelectedClass) {
      callAllBySelector(resetSelectedTask, '.selected');
    }
    event.target.classList.add('selected');
  }
}

function toggleTaskAsCompleted(event) {
  const hasTaskClass = (event.target.classList.contains('task'));
  if (hasTaskClass) {
    event.target.classList.toggle('completed');
  }
}

function moveSelected(selectedTask, direction) {
  const notFirstTask = (globalElements.taskList.firstElementChild !== selectedTask);
  const notLastTask = (globalElements.taskList.lastElementChild !== selectedTask);
  const taskCanMoveUp = ((direction === 'up') && (notFirstTask));
  const taskCanMoveDown = ((direction === 'down') && (notLastTask));
  let relatedTask;
  if (taskCanMoveUp) {
    relatedTask = selectedTask.previousElementSibling;
    globalElements.taskList.insertBefore(selectedTask, relatedTask);
  }
  if (taskCanMoveDown) {
    relatedTask = selectedTask.nextElementSibling;
    globalElements.taskList.insertBefore(relatedTask, selectedTask);
  }
}

function getAndMmoveSelected(direction) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    moveSelected(selectedTask, direction);
  }
}

function setCreateTaskEvent() {
  globalElements.createTaskButton.addEventListener('click', createNewTask);
}

function setTaskListEvent() {
  globalElements.taskList.addEventListener('click', selectTask);
  globalElements.taskList.addEventListener('dblclick', toggleTaskAsCompleted);
}

function removeElement(element) {
  element.remove();
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
  globalElements.moveUpButton.addEventListener('click', function () { getAndMmoveSelected('up'); });
  globalElements.moveDownButton.addEventListener('click', function () { getAndMmoveSelected('down'); });
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

window.onload = setAllEvents;
