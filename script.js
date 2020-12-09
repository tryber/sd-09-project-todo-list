const btnTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const btnDel = document.querySelector('#apaga-tudo');
const btnDelComplete = document.querySelector('#remover-finalizados')

function createList() {
  const inputTask = document.querySelector('#texto-tarefa');
  const creatLi = document.createElement('li');
  creatLi.innerText = inputTask.value;
  creatLi.className = 'task';
  taskList.appendChild(creatLi);
  inputTask.value = '';
}

function addListButton() {
  btnTask.addEventListener('click', createList);
}

function selectTask(event) {
  const listOfTasks = document.querySelectorAll('.task');
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

function deleteAll() {
  btnDel.addEventListener('click', function () {
    const listOfDel = document.querySelectorAll('.task');
    for (let index = 0; index < listOfDel.length; index += 1) {
      taskList.removeChild(listOfDel[index]);
    }
  });
}

function removeCompleted() {
  btnDelComplete.addEventListener('click', function () {
    const listOfComplete = document.querySelectorAll('.completed');
    for (let index = 0; index < listOfComplete.length; index += 1) {
      taskList.removeChild(listOfComplete[index]);
    }
  })
}

addListButton();
creatSelectTask();
deleteAll();
removeCompleted();
