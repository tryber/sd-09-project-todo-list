window.onload = function () {
  createControls();
  createTaskList();
  const createTaskButton = document.querySelector('#criar-tarefa');
  createTaskButton.addEventListener('click', insertNewTask);
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', selectListItemControl);
  taskList.addEventListener('dblclick', completeListItemControl);
  const clearTaskListButton = document.querySelector('#apaga-tudo');
  clearTaskListButton.addEventListener('click', clearTaskList);
  const removeFinishedButton = document.querySelector('#remover-finalizados');
  removeFinishedButton.addEventListener('click', removeAllFinished);
}

function clearTaskList(){
    const listItens = document.querySelectorAll('#lista-tarefas li');
    for(const element of listItens){
        element.remove();
    }
}

function removeAllFinished(){
    const finishedListItens = document.querySelectorAll('#lista-tarefas .completed');
    for(const element of finishedListItens){
        element.remove();
    }
}
function completeListItemControl(event) {
    if(event.target.tagName === 'LI'){
        const item = event.target;
        classes = item.className.split(' ');
        if (classes.includes('completed')) {
          item.classList.remove('completed');
        } else {
          item.classList.add('completed');
        }
    }
}

function selectListItemControl(event) {
    if(event.target.tagName === 'LI'){
        const item = event.target;
        classes = item.className.split(' ');
        const listItens = document.querySelectorAll('#lista-tarefas li');
        for (const element of listItens) {
          element.classList.remove('selected');
        }
        item.classList.add('selected');
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
  const controlButtonIds = ['criar-tarefa', 'apaga-tudo', 'remover-finalizados'];
  const controlButtonText = ['Criar Tarefa', 'Apagar Itens', 'Remover Finalizados'];
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
