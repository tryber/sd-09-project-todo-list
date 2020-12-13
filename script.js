const container = document.querySelector('#container');
function addHeader() {
  const createHeader = document.createElement('header');
  container.appendChild(createHeader);
  // addHeader();
}

function addTitle() {
  const header = document.querySelector('header');
  const createTitle = document.createElement('h1');
  createTitle.innerText = 'Minha Lista de Tarefas';
  header.appendChild(createTitle);
}

function addParagraph() {
  const createParagraph = document.createElement('p');
  createParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  createParagraph.id = 'funcionamento';
  container.appendChild(createParagraph);
}

function addContainerTask() {
  const containerTask = document.createElement('div');
  containerTask.id = 'container-task';
  container.appendChild(containerTask);
}

function addInput() {
  const containerTask = document.getElementById('container-task');
  const createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  createInput.setAttribute('placeholder', 'Task');
  containerTask.appendChild(createInput);
}

function addList() {
  const createList = document.createElement('ol');
  createList.id = 'lista-tarefas';
  container.appendChild(createList);
}

function handleTaskClick(event) {
  const listItem = event.target;
  const selectedItems = document.getElementsByTagName('li');
  for (let index = 0; index < selectedItems.length; index += 1) {
    console.log(selectedItems[index]);
    let isSelected = selectedItems[index].classList.contains('selected');
    if (isSelected) {
      selectedItems[index].classList.remove('selected');
    }
  }
  listItem.classList.add('selected');
}

function handleTaskCompleted(event) {
  const task = event.target;
  const checkTaskCompleted = task.classList.contains('task-completed');
  if (checkTaskCompleted) {
    task.classList.remove('task-completed');
  } else {
    task.classList.add('task-completed');
  }
}

function handleAddListItem() {
  const createListItem = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const task = inputText.value;
  createListItem.innerText = task;
  //createListItem.className = '';
  createListItem.addEventListener('click', handleTaskClick);
  createListItem.addEventListener('dblclick', handleTaskCompleted);
  list.appendChild(createListItem);
  inputText.value = '';
}

function addButton() {
  const containerTask = document.getElementById('container-task');
  const createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.innerText = 'Adicionar';
  createButton.addEventListener('click', handleAddListItem);
  containerTask.appendChild(createButton);
}



/* function checkTaskSolved() {
  const listItems = document.getElementsByTagName('li');
  console.log(listItems);
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('dblclick', handleTaskCompleted);
  }
} */

window.onload = function () {
  addHeader();
  addTitle();
  addParagraph();
  addContainerTask();
  addInput();
  addList();
  addButton();
  // handleTaskCompleted();
};
// checkTaskSolved();
