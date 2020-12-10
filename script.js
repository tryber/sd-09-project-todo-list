const globalElements = {
  createTaskButton: document.querySelector('#criar-tarefa'),
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

function highlightTask(event) {
  if (event.target.className === 'task') {
    event.target.style.backgroundColor = 'rgb( 128 , 128 , 128)';
  }
}

function setCreateTaskEvent() {
  globalElements.createTaskButton.addEventListener('click', createNewTask);
}

function setTaskListEvent() {
  globalElements.taskList.addEventListener('click', highlightTask);
}

function setAllEvents() {
  setCreateTaskEvent();
  setTaskListEvent();
}

setAllEvents();
