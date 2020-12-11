function createButton(idC, name, father) {
  const button = document.createElement('button');
  button.id = idC;
  button.innerText = name;
  const buttonFather = document.querySelector(father);
  buttonFather.appendChild(button);
}

createButton('criar-tarefa', 'Adicionar', '.create-task');
const buttonTask = document.querySelector('#criar-tarefa');

function addListTask(task, clss) {
  const list = document.createElement('li');
  if (clss === 'completed') {
    list.className = 'task-list completed';
  } else if (clss === '') {
    list.className = 'task-list';
  }
  list.innerText = task;
  const listOrd = document.querySelector('#lista-tarefas');
  listOrd.appendChild(list);
}

// function changeNotSelected() {
//   const listTask = document.querySelectorAll('.task-list');
//   for (let index = 0; index < listTask.length; index += 1) {
//     listTask[index].className = 'task-list';
//   }
// }

function changeCompleted() {
  const listTask = document.querySelectorAll('.task-list');
  for (let index = 0; index < listTask.length; index += 1) {
    if (listTask[index].className === 'task-list completed') {
      listTask[index].className = 'task-list completed';
    } else if (listTask[index].classList.contains('completed')) {
      listTask[index].className = 'task-list completed';
    } else {
      listTask[index].className = 'task-list';
    }
  }
}

function changeSelected(origin) {
  if (origin.target.className === 'task-list') {
    changeCompleted();
    origin.target.className += ' selected';
  } else if (origin.target.className === 'task-list completed') {
    changeCompleted();
    origin.target.className += ' selected';
  }
}

function completedTask(origin) {
  if (origin.target.className === 'task-list') {
    origin.target.className += ' completed';
  } else if (origin.target.className === 'task-list selected') {
    origin.target.className += ' completed';
  } else if (origin.target.className === 'task-list selected completed') {
    origin.target.className = 'task-list selected';
  } else if (origin.target.className === 'task-list completed selected') {
    origin.target.className = 'task-list selected';
  } else if (origin.target.className === 'task-list completed') {
    origin.target.className = 'task-list';
  }
}

function taskListLoop() {
  const listTask = document.querySelectorAll('li');
  for (let index = 0; index < listTask.length; index += 1) {
    listTask[index].addEventListener('click', changeSelected);
    listTask[index].addEventListener('dblclick', completedTask);
  }
}

function createTask() {
  const textInput = document.querySelector('#texto-tarefa');
  if (textInput.value === '') {
    return;
  }
  const texto = textInput.value;
  textInput.value = '';
  const clss = '';
  addListTask(texto, clss);
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

function returnTotal() {
  const array = JSON.parse(localStorage.getItem('tasks'));
  if (array === null) {
    return;
  }
  for (let index = 0; index < array.length; index += 2) {
    const classLocal = array[index];
    const texto = array[index + 1];
    addListTask(texto, classLocal);
  }

  taskListLoop();
}

// Referencia JSON e classList.contains
// https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-8/conteudos/local-e-session-storage?use_case=side_bar
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// https://www.w3schools.com/jsref/prop_element_classlist.asp
function salveTasks() {
  const listTotal = document.querySelectorAll('li');
  const array = [];
  for (let index = 0; index < listTotal.length; index += 1) {
    if (listTotal[index].classList.contains('completed')) {
      array.push('completed');
    } else {
      array.push('');
    }
    array.push(listTotal[index].innerText);
  }
  localStorage.setItem('tasks', JSON.stringify(array));
}

buttonSaveList.addEventListener('click', salveTasks);

createButton('mover-cima', 'Top', '.buttons');
const buttonTop = document.querySelector('#mover-cima');

function positionList() {
  let resultIndex = 0;
  const list = document.querySelectorAll('li');
  if (list === null) {
    alert('Lista vazia');
  }
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('selected')) {
      resultIndex = index;
    }
  }
  return resultIndex;
}

// Referencia  insertBefore
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
function moveTop() {
  const verific = positionList();
  if (verific > 0) {
    const selected = document.querySelector('.selected');
    selected.parentNode.insertBefore(selected, selected.previousSibling);
  }
}
buttonTop.addEventListener('click', moveTop);

createButton('mover-baixo', 'Down', '.buttons');
const buttonDown = document.querySelector('#mover-baixo');

function moveDown() {
  const lastList = document.querySelectorAll('li');
  const verific = positionList();
  if (verific < (lastList.length - 1)) {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.parentNode.insertBefore(selected, selected.nextSibling.nextSibling);
    }
  }
}

buttonDown.addEventListener('click', moveDown);

createButton('remover-selecionado', 'Remove Tarefa', '.buttons');
const buttonRemover = document.querySelector('#remover-selecionado');

function removerSelected() {
  const selecte = document.querySelector('.selected');
  selecte.remove();
}

buttonRemover.addEventListener('click', removerSelected);

returnTotal();
