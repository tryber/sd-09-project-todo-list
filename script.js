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
  for (;taskList.firstChild !== null;) {
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

function loadSavedTasks() {
  // Pegar cada conjunto chave-valor do Local Storage, e criar uma linha inserindo o texto do valor da chave
  console.log(localStorage.getItem(`Task `))
  const numberTasks = localStorage.getItem('Task count');
  for (let index = 1; index <= numberTasks; index += 1) {
    const taskText = localStorage.getItem(`Task ${index}`)
    const line = document.createElement('li')
    line.textContent = taskText
    const taskClasses = localStorage.getItem(`Task ${index} - class`)
    line.classList = taskClasses
    const taskList = document.querySelector('#lista-tarefas')
    taskList.appendChild(line)
  }
}

function saveTasks() {
  const tasks = document.querySelectorAll('#lista-tarefas > li');
  if (tasks === null) {
    return
  }
  localStorage.clear();
  localStorage.setItem(`Task count`,tasks.length)
  for (let index = 0; index <= tasks.length -1; index += 1) {
    localStorage.setItem(`Task ${index + 1}`,tasks[index].textContent)
    localStorage.setItem(`Task ${index + 1} - class`,tasks[index].classList)
  }
}

//  https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
function moveList() {
  const selectedElement = document.querySelector('.completed');
  const tasksList = document.querySelector('#lista-tarefas');
  tasksList.insertBefore
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
  //  Escitador do botão que salva a lista
  const buttonSave = document.querySelector('#salvar-tarefas')
  buttonSave.addEventListener('click',saveTasks)
}

window.onload = function() {
  addEventsListener();
  loadSavedTasks();
}
