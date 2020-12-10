let liSelected;
const completedTasks = [];

function clearDonedTasks() {
  const listOfLi = document.querySelectorAll('#lista-tarefas li');
  const ol = document.querySelector('#lista-tarefas');
  for (let index in listOfLi) {
    if (listOfLi[index].className === 'completed') {
      ol.removeChild(listOfLi[index]);
    }
  }
}

function clearTasks() {
  const listOfLi = document.querySelector('#lista-tarefas').children;
  const size = listOfLi.length;
  const ol = document.querySelector('#lista-tarefas');
  for (let index = 0; index < size; index+=1) {
    ol.firstElementChild.remove();
  }
}

function markAsDone(event) {
  if (completedTasks.includes(event.target)) {
    const index = completedTasks.indexOf(event.target);
    completedTasks.splice(index, 1);
    event.target.className = '';
  } else {
    completedTasks.push(event.target);
    event.target.className = 'completed';
  }
}

function changeBackground(event) {
  if (liSelected !== event.target && liSelected !== undefined) {
    liSelected.style.backgroundColor = '';
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    liSelected = event.target;
  } else {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    liSelected = event.target;
  }
}

function selectedItem(event) {
  if (event.target.localName === 'li') {
    changeBackground(event);
  }
}

function listSelector(listId) {
  const id = `#${listId}`;
  const list = document.querySelector(id);
  list.addEventListener('click', selectedItem);
  list.addEventListener('dblclick', markAsDone);
}

function clearInput(inputId) {
  const id = `#${inputId}`;
  const input = document.querySelector(id);
  input.value = '';
}

function createNewLi() {
  const li = document.createElement('li');
  return li;
}

function addTask() {
  const ol = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const li = createNewLi();
  li.innerText = input.value;
  clearInput(input.id);
  ol.appendChild(li);
}

function buttons() {
  const buttonCreateTask = document.querySelector('#criar-tarefa');
  buttonCreateTask.addEventListener('click', addTask);
  const buttonClearTasks = document.querySelector('#apaga-tudo');
  buttonClearTasks.addEventListener('click', clearTasks);
  const buttonClearDonedTasks = document.querySelector('#remover-finalizados');
  buttonClearDonedTasks.addEventListener('click', clearDonedTasks);
}

function actionManagement() {
  buttons();
  listSelector('lista-tarefas');
}

window.onload = function () {
  actionManagement();
};
