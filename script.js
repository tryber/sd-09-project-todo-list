const taskList = document.querySelector('#lista-tarefas');
const cleanButton = document.querySelector('#apaga-tudo');
const complButton = document.querySelector('#remover-finalizados');
const selectButton = document.querySelector('#remover-selecionado');
const saveButton = document.querySelector('#salvar-tarefas');

// localStorage.setItem('rua', 'oii');
// localStorage.removeItem('rua');
// localStorage.clear();
// let vnome = localStorage.getItem('rua');
// alert(vnome);

function inputTaskOnTheList() {
  const taskText = document.querySelector('#texto-tarefa');
  const listElement = document.createElement('li');
  listElement.id = 'item-lista';

  if (taskText.value !== '') {
    listElement.innerText = taskText.value;
    taskList.appendChild(listElement);
    taskText.value = '';
  }
}

function taskButton() {
  const createButton = document.querySelector('#criar-tarefa');
  createButton.addEventListener('click', inputTaskOnTheList);
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
