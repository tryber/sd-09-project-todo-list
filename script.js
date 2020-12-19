function createHeader() {
  const header = document.createElement('header');
  document.body.appendChild(header);
  const title = document.createElement('h1');
  title.innerHTML = 'Minha Lista de Tarefas';
  header.appendChild(title);
  const subtitle = document.createElement('p');
  subtitle.id = 'funcionamento';
  subtitle.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(subtitle);
}

function createMain() {
  const main = document.createElement('main');
  document.body.appendChild(main);
}

function createTaskInput() {
  const main = document.querySelector('main');
  const taskInput = document.createElement('input');
  taskInput.id = 'texto-tarefa';
  taskInput.type = 'text';
  main.appendChild(taskInput);
  taskInput.addEventListener('keyup', enterKey);
}

function createTaskInputButton() {
  const main = document.querySelector('main');
  const taskInputButton = document.createElement('button');
  taskInputButton.id = 'criar-tarefa';
  taskInputButton.innerHTML = 'adicionar tarefa';
  main.appendChild(taskInputButton);
  taskInputButton.addEventListener('click', addTaskToList);
}

function createOrderedList() {
  const main = document.querySelector('main');
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  const retrievedList = JSON.parse(localStorage.getItem('tasks'));
  const retrievedListStatus = JSON.parse(localStorage.getItem('completed'));
  if (retrievedList !== null) {
    for (let index = 0; index < retrievedList.length; index += 1) {
      const listItem = document.createElement('li');
      listItem.innerText = retrievedList[index];
      if (retrievedListStatus[index] !== 'false') {
        listItem.classList.add('completed');
      }
      orderedList.appendChild(listItem);
    }
  }
  main.appendChild(orderedList);
  orderedList.addEventListener('click', turnGray);
  orderedList.addEventListener('dblclick', lineThrough);
}

function addTaskToList() {
  const taskInput = document.querySelector('#texto-tarefa');
  const orderedList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  if (taskInput !== '') {
    listItem.innerHTML = taskInput.value;
    orderedList.appendChild(listItem);
    taskInput.value = '';
  }
}

function enterKey(evt) {
  if (evt.keyCode === 13) {
    addTaskToList();
  } else {
    // Do nothing
  }
}

function turnGray(evt) {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].classList.remove('selected');
  }
  const selectedItem = evt.target;
  selectedItem.classList.add('selected');
}

function lineThrough(evt) {
  const selectedItem = evt.target;
  if (selectedItem.classList.contains('completed')) {
    selectedItem.classList.remove('completed');
  } else {
    selectedItem.classList.add('completed');
  }
}

function createRemoveButton() {
  const main = document.querySelector('main');
  const removeButton = document.createElement('button');
  removeButton.id = 'apaga-tudo';
  removeButton.innerHTML = 'Limpar Lista';
  main.appendChild(removeButton);
  removeButton.addEventListener('click', removeListItem);
}

function removeListItem() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove();
  }
}

function createRemoveCompletedButton() {
  const main = document.querySelector('main');
  const removeCompletedButton = document.createElement('button');
  removeCompletedButton.id = 'remover-finalizados';
  removeCompletedButton.innerHTML = 'Remover finalizados';
  main.appendChild(removeCompletedButton);
  removeCompletedButton.addEventListener('click', removeCompleted);
}

function removeCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
}

function createSaveTasksButton() {
  const main = document.querySelector('main');
  const saveTasksButton = document.createElement('button');
  saveTasksButton.id = 'salvar-tarefas';
  saveTasksButton.innerHTML = 'salvar tarefas';
  main.appendChild(saveTasksButton);
  saveTasksButton.addEventListener('click', saveTasks);
}

function saveTasks() {
  localStorage.clear();
  const savedTasks = [];
  const completedTasks = [];
  const tasks = document.getElementsByTagName('li');
  for (let index = 0; index < tasks.length; index += 1) {
    savedTasks.push(tasks[index].innerText);
    if (tasks[index].classList.contains('completed')) {
      completedTasks.push('true');
    } else {
      completedTasks.push('false');
    }
  }
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
  localStorage.setItem('completed', JSON.stringify(completedTasks));
}

function createMoveUp() {
  const main = document.querySelector('main');
  const moveUpButton = document.createElement('button');
  moveUpButton.id = 'mover-cima';
  moveUpButton.innerText = 'Up';
  main.appendChild(moveUpButton);
  moveUpButton.addEventListener('click', moveUp);
}

function createMoveDown() {
  const main = document.querySelector('main');
  const moveDownButton = document.createElement('button');
  moveDownButton.id = 'mover-baixo';
  moveDownButton.innerText = 'Down';
  main.appendChild(moveDownButton);
  moveDownButton.addEventListener('click', moveDown);
}

function moveUp() {
  const orderedList = document.querySelector('ol');
  const listItem = document.querySelectorAll('li');
  const selectedItem = document.querySelector('.selected');
  if (selectedItem === null || listItem[0].classList.contains('selected')) {
    // do nothing
  } else {
    orderedList.insertBefore(selectedItem, selectedItem.previousElementSibling);
  }
}

function moveDown() {
  const orderedList = document.querySelector('ol');
  const listItem = document.querySelectorAll('li');
  const lastItem = listItem[(listItem.length - 1)];
  const selectedItem = document.querySelector('.selected');
  const nextElement = selectedItem.nextElementSibling;
  if (selectedItem === null || lastItem.classList.contains('selected')) {
    // do nothing
  } else {
    orderedList.insertBefore(selectedItem, nextElement.nextElementSibling);
  }
}

function createRemoveSelectedButton() {
  const main = document.querySelector('main');
  const removeSelectedButton = document.createElement('button');
  removeSelectedButton.id = 'remover-selecionado';
  removeSelectedButton.innerText = 'Remover selecionado';
  main.appendChild(removeSelectedButton);
  removeSelectedButton.addEventListener('click', removeSelected);
}

function removeSelected() {
  let selectedItem = document.querySelector('.selected');
  if (selectedItem !== null) {
    selectedItem.remove();
  }
}

window.onload = function () {
  createHeader();
  createMain();
  createTaskInput();
  createTaskInputButton();
  createOrderedList();
  createRemoveButton();
  createRemoveCompletedButton();
  createSaveTasksButton();
  createMoveUp();
  createMoveDown();
  createRemoveSelectedButton();
};
