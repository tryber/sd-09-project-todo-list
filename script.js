function addTaskOnList() {
  const taskText = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.textContent = taskText.value;
  taskList.appendChild(task);
  taskText.value = '';
}

function changeBackgroundColor(event) {
  const grayList = document.querySelector('.gray');
  if (grayList !== null) {
    grayList.classList.remove('gray');
  }
  const lista = event.target;
  lista.classList.add('gray');
}

function setCompleted(event) {
  const element = event.target;
  element.classList.toggle('completed');
}

function deleteAllLists() {
  const taskList = document.querySelector('#lista-tarefas');
  for (;taskList.firstChild !== undefined;) {
    taskList.removeChild(taskList.firstChild);
  }
}

function removeCompletedElements() {
  let completedElements = document.querySelectorAll('.completed');
  for (;completedElements[0] !== undefined;) {
    completedElements[0].remove();
    completedElements = document.querySelectorAll('.completed');
  }
}

function addEventsListener() {
//  Escutador no botão
  const addTaskButton = document.querySelector('#criar-tarefa');
  addTaskButton.addEventListener('click', addTaskOnList);
  //  Escutador na lista
  const listDiv = document.querySelector('#lista-tarefas');
  listDiv.addEventListener('click', changeBackgroundColor);
  listDiv.addEventListener('dblclick', setCompleted);
  //  Escutador do botão apaga tudo
  const deleteAllButton = document.querySelector('#apaga-tudo');
  deleteAllButton.addEventListener('click', deleteAllLists);
  //  Escutador do botão remover selecionados
  const buttonRemoveCompleted = document.querySelector('#remover-finalizados');
  buttonRemoveCompleted.addEventListener('click', removeCompletedElements);
}

window.onload = addEventsListener();
