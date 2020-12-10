const globalElements = {
  createTaskButton: document.querySelector('#criar-tarefa'),
  newTaskInput: document.querySelector('#texto-tarefa'),
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

// function createNewTask() {
//   const newTaskText = globalElements.newTaskInput.value;
//   // newTaskText.de;
// }

function setCreateTaskEvent() {
  // globalElements.createTaskButton.addEventListener('click', createNewTask);
}

function setAllEvents() {
  setCreateTaskEvent();
}

setAllEvents();