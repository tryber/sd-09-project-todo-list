const btnTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function createList() {
  const inputTask = document.querySelector('#texto-tarefa');
  const creatLi = document.createElement('li');
  creatLi.innerText = inputTask.value;
  taskList.appendChild(creatLi);
  inputTask.value = '';
}

function addListButton() {
  btnTask.addEventListener('click', createList);
}

function selectTask(event) {
  const listOfTasks = document.querySelectorAll('ol li');
  for (let index = 0; index < listOfTasks.length; index += 1) {
    listOfTasks[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completedTask(event) {
  event.target.classList.toggle('completed');
}

function creatSelectTask() {
  taskList.addEventListener('click', selectTask);
  taskList.addEventListener('dblclick', completedTask);
}

addListButton();
creatSelectTask();
