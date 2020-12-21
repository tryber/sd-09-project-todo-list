const taskList = document.querySelector('#lista-tarefas');

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
  const listItem = document.querySelectorAll('#item-lista');

  for (let index = 0; index < listItem.length; index += 1) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

taskList.addEventListener('click', changeBgColor);
