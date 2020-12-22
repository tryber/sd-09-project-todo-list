const taskList = document.querySelector('#lista-tarefas');
const cleanButton = document.querySelector('#apaga-tudo');
const complButton = document.querySelector('#remover-finalizados');
const selectButton = document.querySelector('#remover-selecionado');
const saveButton = document.querySelector('#salvar-tarefas');
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');

function inputTaskOnTheList() {
  const taskText = document.querySelector('#texto-tarefa');
  const listElement = document.createElement('li');
  listElement.id = 'item-lista';
  listElement.classList.add('item-lista');

  if (taskText.value !== '') {
    listElement.innerText = taskText.value;
    taskList.appendChild(listElement);
    taskText.value = '';
  }
}

function taskButton() {
  const createButton = document.querySelector('#criar-tarefa');
  createButton.addEventListener('click', inputTaskOnTheList);
  const taskText = document.querySelector('#texto-tarefa');
  taskText.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      inputTaskOnTheList();
    }
  });
}
taskButton();

function changeBgColor(event) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  if (selected !== event.target) {
    event.target.classList.add('selected');
  }
}
taskList.addEventListener('click', changeBgColor);

function crossOutTasks(event) {
  event.target.classList.toggle('completed');
}
taskList.addEventListener('dblclick', crossOutTasks);

function cleanTaskList() {
  taskList.innerHTML = '';
}
cleanButton.addEventListener('click', cleanTaskList);

function cleanCompletedTasks() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
}
complButton.addEventListener('click', cleanCompletedTasks);

function cleanSelectedItem() {
  const selected = document.querySelector('.selected');
  selected.remove();
}
selectButton.addEventListener('click', cleanSelectedItem);

function saveTasksList() {
  localStorage.setItem('list', taskList.innerHTML);
}
saveButton.addEventListener('click', saveTasksList);

function getTasksList() {
  taskList.innerHTML = localStorage.getItem('list');
}
getTasksList();

function moveTaskUpper() {
  const selected = document.querySelector('.selected');
  const prevItem = selected.previousElementSibling;
  const itemText = selected.innerText;
  const itemClass = selected.className;
  selected.innerText = prevItem.innerText;
  selected.className = prevItem.className;
  prevItem.innerText = itemText;
  prevItem.className = itemClass;
}
upButton.addEventListener('click', moveTaskUpper);

function moveTaskLower() {
  const selected = document.querySelector('.selected');
  const nextItem = selected.nextElementSibling;
  const itemText = selected.innerText;
  const itemClass = selected.className;
  selected.innerText = nextItem.innerText;
  selected.className = nextItem.className;
  nextItem.innerText = itemText;
  nextItem.className = itemClass;
}
downButton.addEventListener('click', moveTaskLower);
