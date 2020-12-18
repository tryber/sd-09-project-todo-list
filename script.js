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
}

function createTaskInputButton() {
  const main = document.querySelector('main');
  const taskInputButton = document.createElement('button');
  taskInputButton.id = 'criar-tarefa';
  taskInputButton.innerHTML = 'adicionar tarefa';
  main.appendChild(taskInputButton);
}

function createOrderedList() {
  const main = document.querySelector('main');
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  main.appendChild(orderedList);
}

function addTaskToList() {
  const taskInput = document.querySelector('#texto-tarefa');
  const orderedList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerHTML = taskInput.value;
  orderedList.appendChild(listItem);
  taskInput.value = '';
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
    listItem[index].style.backgroundColor = '';
  }
  const selectedItem = evt.target;
  selectedItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
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
}

function removeCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
}

window.onload = function () {
  createHeader();
  createMain();
  createTaskInput();
  createTaskInputButton();
  createOrderedList();
  const taskInputButton = document.querySelector('#criar-tarefa');
  taskInputButton.addEventListener('click', addTaskToList);
  let taskInput = document.querySelector('#texto-area');
  taskInput = document.addEventListener('keyup', enterKey);
  const orderedList = document.querySelector('ol');
  orderedList.addEventListener('click', turnGray);
  orderedList.addEventListener('dblclick', lineThrough);
  createRemoveButton();
  const removeButton = document.querySelector('#apaga-tudo');
  removeButton.addEventListener('click', removeListItem);
  createRemoveCompletedButton();
  const removeCompletedButton = document.querySelector('#remover-finalizados');
  removeCompletedButton.addEventListener('click', removeCompleted);
};
