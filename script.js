window.onload = function () {
  const recoverTaskList = localStorage.getItem('taskList');
  const getOl = document.querySelector('#lista-tarefas');
  getOl.innerHTML = recoverTaskList;
};

const getDivInput = document.getElementsByClassName('input-container')[0];
const createInput = document.createElement('input');
createInput.setAttribute('type', 'text');
createInput.id = 'texto-tarefa';
getDivInput.appendChild(createInput);

const getDivList = document.getElementsByClassName('list-container')[0];
const createOList = document.createElement('ol');
createOList.id = 'lista-tarefas';
getDivList.appendChild(createOList);

const createAddListButton = document.createElement('button');
createAddListButton.innerHTML = 'Adicionar';
createAddListButton.id = 'criar-tarefa';
getDivInput.appendChild(createAddListButton);

const getDivButtons = document.getElementsByClassName('buttons-container')[0];
const deleteAllButton = document.createElement('button');
deleteAllButton.id = 'apaga-tudo';
deleteAllButton.innerHTML = 'Apagar tudo';
getDivButtons.appendChild(deleteAllButton);

const deleteCompleteButton = document.createElement('button');
deleteCompleteButton.id = 'remover-finalizados';
deleteCompleteButton.innerHTML = 'Remove finalizados';
getDivButtons.appendChild(deleteCompleteButton);

const saveTasksButton = document.createElement('button');
saveTasksButton.id = 'salvar-tarefas';
saveTasksButton.innerHTML = 'Salvar Lista';
getDivButtons.appendChild(saveTasksButton);

const deleteSelectedButton = document.createElement('button');
deleteSelectedButton.id = 'remover-selecionado';
deleteSelectedButton.innerHTML = 'X';
getDivButtons.appendChild(deleteSelectedButton);

const UpTaskButton = document.createElement('button');
UpTaskButton.id = 'mover-cima';
UpTaskButton.innerHTML = 'Up';
getDivButtons.appendChild(UpTaskButton);

const DownTaskButton = document.createElement('button');
DownTaskButton.id = 'mover-baixo';
DownTaskButton.innerHTML = 'Down';
getDivButtons.appendChild(DownTaskButton);


function addNewTask() {
  const getInputField = document.querySelector('#texto-tarefa');
  const getAddInputButton = document.querySelector('#criar-tarefa');
  const getOrdenedList = document.querySelector('#lista-tarefas');

  getAddInputButton.addEventListener('click', function () {
    const newLi = document.createElement('li');
    newLi.innerText = getInputField.value;

    getOrdenedList.appendChild(newLi);
    getInputField.value = '';
  });
}
addNewTask();

function selectItemOnList() {
  const getOrdenedList = document.querySelector('#lista-tarefas');

  getOrdenedList.addEventListener('click', function (event) {
    const getSelectedTask = document.querySelector('.selected');
    if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected');
    } else {
      if (getSelectedTask) {
        getSelectedTask.classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  });
}
selectItemOnList();

function markCompletedTasks() {
  const getOrdenedList = document.querySelector('#lista-tarefas');

  getOrdenedList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    };
  });
}
markCompletedTasks();

function deleteAllTasks() {
  const getDeleteButton = document.querySelector('#apaga-tudo');

  getDeleteButton.addEventListener('click', function () {
    const getOrdenedList = document.querySelector('#lista-tarefas');
    getOrdenedList.innerHTML = '';
  });
}
deleteAllTasks();

function deleteCompletedTasks() {
  const getCompletedButton = document.querySelector('#remover-finalizados');
  
  getCompletedButton.addEventListener('click', function () {
    const getCompletedTasks = document.querySelectorAll('.completed');
    for (let index = 0; index < getCompletedTasks.length; index += 1) {
      getCompletedTasks[index].remove();
    }
  });
}
deleteCompletedTasks();

function saveTaskList() {
  const getOl = document.querySelector('#lista-tarefas');
  const saveButton = document.querySelector('#salvar-tarefas');
  saveButton.addEventListener('click', function () {
    localStorage.setItem('taskList', getOl.innerHTML);
  });
}
saveTaskList();

function deleteSelectedTask() {
  const getDeleteSelectedButton = document.querySelector('#remover-selecionado');

  getDeleteSelectedButton.addEventListener('click', function () {
    const getSelectedTask = document.querySelector('.selected');
    getSelectedTask.remove();
  })
}
deleteSelectedTask();

function movingUp() {
  const getUpButton = document.querySelector('#mover-cima');

  getUpButton.addEventListener('click', function () {
    const getSelectedTask = document.querySelector('.selected');
    if (getSelectedTask !== null && getSelectedTask.previousElementSibling !== null) {
      getSelectedTask.parentElement.insertBefore(getSelectedTask, getSelectedTask.previousElementSibling);
    }
  });
}
movingUp();

function movingDown() {
  const getDownButton = document.querySelector('#mover-baixo');

  getDownButton.addEventListener('click', function () {
    const getSelectedTask = document.querySelector('.selected');
    if (getSelectedTask !== null && getSelectedTask.nextElementSibling !== null) {
      getSelectedTask.parentElement.insertBefore(getSelectedTask.nextElementSibling, getSelectedTask);
    }
  });
}
movingDown();
