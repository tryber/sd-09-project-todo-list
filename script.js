function createButton(idC, name, father) {
  const button = document.createElement('button');
  button.id = idC;
  button.innerText = name;
  const buttonFather = document.querySelector(father);
  buttonFather.appendChild(button);
}

createButton('criar-tarefa', 'Adicionar', '.create-task');
const buttonTask = document.querySelector('#criar-tarefa');

function addListTask(task) {
  const list = document.createElement('li');
  list.className = 'task-list';
  list.innerText = task;
  const listOrd = document.querySelector('#lista-tarefas')
  listOrd.appendChild(list)
}

function changeNotSelected() {
  const listTask = document.querySelectorAll('.task-list');
  for (let index = 0; index < listTask.length; index += 1) {
    listTask[index].className = 'task-list';
  }
}

function changeCompleted() {
  const listTask = document.querySelectorAll('.task-list');
  for (let index = 0; index < listTask.length; index += 1) {
    if (listTask[index].className == 'task-list completed') {
      listTask[index].className = 'task-list completed';
    } else if (listTask[index].className == 'task-list completed selected') {
      listTask[index].className = 'task-list completed';
    } else if (listTask[index].className == 'task-list selected completed') {
      listTask[index].className = 'task-list completed';
    } else {
      listTask[index].className = 'task-list';
    }
  }
}

function changeSelected(origin) {
  if (origin.target.className == 'task-list') {
    changeCompleted()
    origin.target.className += ' selected';
  } else if (origin.target.className == 'task-list completed') {
    changeCompleted();
    origin.target.className += ' selected';
  } else { 
    changeCompleted();
  }
}

function completedTask(origin) {
  if (origin.target.className == 'task-list') {
    origin.target.className += ' completed';
  } else if (origin.target.className == 'task-list selected') {
    origin.target.className += ' completed';
  } else if (origin.target.className == 'task-list selected completed') {
    origin.target.className = 'task-list selected';
  } else if (origin.target.className == 'task-list completed selected') {
    origin.target.className = 'task-list selected';
  } else if (origin.target.className == 'task-list completed') {
    origin.target.className = 'task-list';
  }
}

function taskListLoop() {
  const listTask = document.querySelectorAll('.task-list');
  for (let index = 0; index < listTask.length; index += 1) {
    listTask[index].addEventListener('click', changeSelected);
    listTask[index].addEventListener('dblclick', completedTask)
  }
}

function createTask() {
  const textInput = document.querySelector('#texto-tarefa');
  if (textInput.value === '') {
    return;
  }
  texto = textInput.value;
  textInput.value = '';
  addListTask(texto);
  taskListLoop();
}

buttonTask.addEventListener('click', createTask);

createButton('apaga-tudo', 'Limpa Lista', '.buttons');
const buttonClear = document.querySelector('#apaga-tudo');

function clearList() {
  const listTotal = document.querySelectorAll('li');
  for (let index = 0; index < listTotal.length; index += 1) {
    const listRemove = listTotal[index];
    listRemove.remove();
  }
}

buttonClear.addEventListener('click', clearList);

createButton('remover-finalizados', 'Limpar Completados', '.buttons');
const buttonClearCompleted = document.querySelector('#remover-finalizados');

function clearCompletedList() {
  const listCompleted = document.querySelectorAll('li.completed');
  for (let index = 0; index < listCompleted.length; index += 1) {
    const listCompletedRemove = listCompleted[index];
    listCompletedRemove.remove();
  }
}

buttonClearCompleted.addEventListener('click', clearCompletedList);

createButton('salvar-tarefas', 'Salvar Lista', '.buttons');
const buttonSaveList = document.querySelector('#salvar-tarefas');

let myCookie = '';
let mylocal = '';
let arrayCookie = [];
let arrayLocal = [];

function codificCookie(string) {
  let word = '';
  if (string === '') {
    return;
  }
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ',') {
      word += string[index];
    } else {
      arrayCookie.push(word);
      word = '';
    }
  }
  arrayCookie.push(word);
  return arrayCookie;
}

function codificLocal(string) {
  if (string === '') {
    return;
  }
  for (let index = 0; index < string.length; index += 1) {
    arrayLocal.push(localStorage.getItem(index));
  }
  
  return arrayLocal;
}

function saveListTask(task, classLocal) {
  const list = document.createElement('li');
  list.className = classLocal;
  list.innerText = task;
  const listOrd = document.querySelector('#lista-tarefas')
  listOrd.appendChild(list)
}

function returnTotal(local, cookie) {
  for (let index = 0; index < local.length; index += 1) {
    let texto = local[index];
    let classCookie = cookie[index];
    saveListTask(texto, classCookie);
  }
  taskListLoop();
}

function salveCookie() {
  const listTotal = document.querySelectorAll('li');
  let myCookieList = '';
  let myCookieClass = [];
  localStorage.clear()
  for (let index = 0; index < listTotal.length; index += 1) {
    myCookieList = listTotal[index].innerText;
    myCookieClass.push(listTotal[index].className);
    localStorage.setItem(index, myCookieList);
  }
  document.cookie = myCookieClass;
  myCookie = document.cookie;
  mylocal = localStorage
}

buttonSaveList.addEventListener('click', salveCookie);

createButton('mover-cima', 'Top', '.buttons');
const buttonTop = document.querySelector('#mover-cima');

function moveTop() {

}

createButton('mover-baixo', 'Down', '.buttons');
const buttonDown = document.querySelector('#mover-baixo');

salveCookie();
console.log(mylocal)
codificLocal(mylocal);
codificCookie(myCookie);
console.log(arrayLocal)
console.log(arrayCookie)
returnTotal(arrayLocal, arrayCookie);
