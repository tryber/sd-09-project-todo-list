window.onload = function () {
  createControls();
  createTaskList();
  const createTaskButton = document.querySelector('#criar-tarefa');
  createTaskButton.addEventListener('click', insertNewTask);
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', selectListItem);
}

function selectListItem(event){
    const item = event.target;
    if(item.className === 'selected'){
        item.className = '';
    }else{
        item.className = 'selected';
    }
    

    
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


