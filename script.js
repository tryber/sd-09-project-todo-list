const taskList = document.querySelector('#lista-tarefas');
const cleanButton = document.querySelector('#apaga-tudo');

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
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', inputTaskOnTheList);
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
  const completed = document.querySelector('.completed');
  if (completed) {
    completed.classList.remove('completed');
  }
  if (completed !== event.target) {
    event.target.classList.add('completed');
  }
}
taskList.addEventListener('dblclick', crossOutTasks);

function cleanTaskList() {
  taskList.innerText = '';
}

cleanButton.addEventListener('click', cleanTaskList);