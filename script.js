window.onload = function () {
  createControls();
  createTaskList();
  const createTaskButton = document.querySelector('#criar-tarefa');
  createTaskButton.addEventListener('click', insertNewTask);
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', selectListItem);
}

function selectListItem(event) {

  const item = event.target;
  classes = item.className.split(' ');
  if (classes.includes('selected')) {
    removeSelectedClass(item); 
  } else {
    const listItens = document.querySelectorAll('#lista-tarefas li');
    for(const element of listItens){
        removeSelectedClass(element);
    }
    item.className += ' selected';
  }
}

function removeSelectedClass(item) {
    const classes = item.className.split(' ');
    const index = classes.indexOf('selected');
    classes.splice(index, 1);
    classes.join(' ');
    item.className = classes;
    return item;
}

function insertNewTask() {
  const inputTask = document.querySelector('#texto-tarefa');

  if (inputTask.value != '') {
    const taskList = document.querySelector('#lista-tarefas');
    const task = document.createElement('li');
    task.innerText = inputTask.value;
    taskList.appendChild(task);
    inputTask.value = '';
  }
}

function createControls() {
  const controlsContainer = document.querySelector('#controls-container');
  const controlButtonIds = ['criar-tarefa'];
  const controlButtonText = ['Criar Tarefa'];
  const controlIputIds = ['texto-tarefa'];

  for (const element of controlIputIds) {
    const input = document.createElement('input');
    input.id = element;
    controlsContainer.appendChild(input);
  }

  for (let i = 0; i < controlButtonIds.length; i += 1) {
    const button = document.createElement('button');
    button.id = controlButtonIds[i];
    button.innerText = controlButtonText[i];
    controlsContainer.appendChild(button);
  }
}

function createTaskList() {
  const tasksContainer = document.querySelector('#tasks-container');
  const OrderedTaskListsIds = ['lista-tarefas'];

  for (const element of OrderedTaskListsIds) {
    const Orderedlist = document.createElement('ol');
    Orderedlist.id = element;
    tasksContainer.appendChild(Orderedlist);
  }
}
