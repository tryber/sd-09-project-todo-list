const text = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const list = document.createElement('li');
list.className = 'todo-list';
const buttonsSection = document.querySelector('#buttons');
const removeTasks = document.createElement('button');
removeTasks.id = 'apaga-tudo';
removeTasks.className = 'button remove';
removeTasks.innerHTML = 'Remove All';
buttonsSection.appendChild(removeTasks);
const removeChecked = document.createElement('button');
removeChecked.id = 'remover-finalizados';
removeChecked.className = 'button remove';
removeChecked.innerHTML = 'Remove Completed';
buttonsSection.appendChild(removeChecked);
const removeSelected = document.createElement('button');
removeSelected.id = 'remover-selecionado';
removeSelected.className = 'button remove';
removeSelected.innerHTML = 'Remove Selected';
buttonsSection.appendChild(removeSelected);
const saveTasks = document.createElement('button');
saveTasks.id = 'salvar-tarefas';
saveTasks.className = 'button save';
saveTasks.innerHTML = '💾';
buttonsSection.appendChild(saveTasks);
const moveUp = document.createElement('button');
moveUp.id = 'mover-cima';
moveUp.className = 'move';
moveUp.innerHTML = '⬆';
buttonsSection.appendChild(moveUp);
const moveDown = document.createElement('button');
moveDown.id = 'mover-baixo';
moveDown.className = 'move';
moveDown.innerHTML = '⬇';
buttonsSection.appendChild(moveDown);

// Adiciona as tarefas
function addTask() {
  button.addEventListener('click', function () {
    if (text.value === '') {
      alert('[ERRO!] - Digite algum valor!');
    } else {
      const lists = document.createElement('li');
      lists.className = 'todo-list';
      orderedList.appendChild(lists);
      lists.innerText = text.value;
      text.value = '';
    }
  });
}

function selectedDesativate() {
  orderedList.addEventListener('click', function (event) {
    const selectedLi = document.querySelectorAll('.selected');
    for (let index = 0; index < selectedLi.length; index += 1) {
      selectedLi[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function todoSelected() {

}

// Risca as tarefas clicadas duas vezes
function todoCompleted() {
  orderedList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

// Remove todas as tarefas
function removeAllTasks() {
  removeTasks.addEventListener('click', function () {
    const ulList = document.querySelectorAll('#lista-tarefas>li');
    for (let index = 0; index < ulList.length; index += 1) {
      const listTask = ulList[index];
      listTask.parentNode.removeChild(listTask);
    }
  });
}

// Remove as tarefas riscadas
function removeCheckedTasks() {
  removeChecked.addEventListener('click', function () {
    const listUl = document.querySelectorAll('#lista-tarefas>li');
    for (let index = 0; index < listUl.length; index += 1) {
      const checked = listUl[index];
      if (checked.classList.contains('completed')) {
        checked.parentNode.removeChild(checked);
      }
    }
  });
}

// Salva as preferencias no localStorage
function saveAllTasks() {
  saveTasks.addEventListener('click', function () {
    const olList = document.querySelectorAll('.todo-list');
    const mylList = [];
    const classes = [];
    const myTasks = {
      mylList,
      classes,
    };
    for (let index = 0; index < olList.length; index += 1) {
      mylList.push(olList[index].innerHTML);
      classes.push(olList[index].classList.contains('completed'));
    }
    localStorage.setItem('myTodoList', JSON.stringify(myTasks));
  });
}

function removeSelectedTasks() {
  removeSelected.addEventListener('click', function () {
    const selectList = document.querySelector('.selected');
    orderedList.removeChild(selectList);
  });
}

function moveListDown() {
  moveDown.addEventListener('click', function () {
    const lists = document.querySelectorAll('.todo-list');
    for (let position = 0; position < lists.length; position += 1) {
      const pos = lists[position];
      if (pos.classList.contains('selected') && pos.nextSibling !== null) {
        pos.parentNode.insertBefore(lists[position + 1], pos);
      }
    }
  });
}

function moveListUp() {
  moveUp.addEventListener('click', function () {
    const lists = document.querySelectorAll('.todo-list');
    for (let position = 0; position < lists.length; position += 1) {
      const pos = lists[position];
      if (pos.classList.contains('selected') && pos.previousElementSibling !== null) {
        pos.parentNode.insertBefore(pos, lists[position - 1]);
      }
    }
  });
}

saveAllTasks();
removeCheckedTasks();
removeAllTasks();
todoSelected();
todoCompleted();
addTask();
selectedDesativate();
removeSelectedTasks();
moveListDown();
moveListUp();

// Ao recarregar a página as preferências são carregadas
const myTodo = JSON.parse(localStorage.getItem('myTodoList'));
function loadPage() {
  for (let index = 0; index < myTodo.mylList.length; index += 1) {
    const savedList = document.createElement('li');
    savedList.innerHTML = myTodo.mylList[index];
    savedList.classList = 'todo-list';
    if (myTodo.classes[index] === true) {
      savedList.classList += ' completed';
    }
    orderedList.appendChild(savedList);
  }
}

if (myTodo !== null && myTodo.mylList.length > 0) {
  window.onload = loadPage();
}
