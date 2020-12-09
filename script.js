window.onload = window.onload = function () {};

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

function changeBackgroundItemList() {
  const getOrdenedList = document.querySelector('#lista-tarefas');

  getOrdenedList.addEventListener('click', function (event) {
    const getSelectedTask = document.querySelector('.selected');
    if (getSelectedTask !== undefined && getSelectedTask !== null) {
      getSelectedTask.classList.remove('selected');
      event.target.classList.add('selected');
    };
    event.target.classList.add('selected');
  });
}
changeBackgroundItemList();

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
