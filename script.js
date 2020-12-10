const globalElements = {
  createTaskButton: document.querySelector('#criar-tarefa'),
  newTaskInput: document.querySelector('#texto-tarefa'),
}

function setCreateTaskEvent() {
  globalElements.createTaskButton.addEventListener('click', createTask);
}

setCreateTaskEvent();