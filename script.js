const btnTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const btnDel = document.querySelector('#apaga-tudo');
const btnDelComplete = document.querySelector('#remover-finalizados')
const btnSave = document.querySelector('#salvar-tarefas')

function presetList() {
  let beforeList = localStorage.getItem('Lista');
  if (beforeList !== null){
    beforeList = beforeList.split(',');
    for (let index = 0; index < beforeList.length; index += 1) {
      let beforeLi = document.createElement('li');
      beforeLi.innerText = beforeList[index];
      beforeLi.className = 'task';
      taskList.appendChild(beforeLi);
    }
  }
}

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

function storageList() {
  let list = document.querySelectorAll('.task');
  let arrayList = [];
  for(let index = 0; index < list.length; index += 1) {
    arrayList.push(list[index].innerText);
    localStorage.setItem('Lista', arrayList);
  }
}

function saveList() {
  btnSave.addEventListener('click', storageList)
}

presetList();
addListButton();
creatSelectTask();
deleteAll();
removeCompleted();
saveList();
