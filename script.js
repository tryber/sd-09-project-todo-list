function createTitle() {
  const header = document.querySelector('header');
  const heading = document.createElement('h1');
  header.appendChild(heading);
  heading.innerText = 'Minha Lista de Tarefas';
  heading.style.color = 'black';
  heading.style.textAlign = 'center';
  heading.style.border = '1px solid black';
}

function createParagraph() {
  const main = document.querySelector('main');
  const paragraph = document.createElement('p');
  paragraph.innerText =
    'Clique duas vezes em um item para marcá-lo como completo';
  paragraph.id = 'funcionamento';
  main.appendChild(paragraph);
}

function doubleClicked() {
  const orderedList = document.querySelector('ol');
  orderedList.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed')
  });
}

function clickedItem() {
  const orderedList = document.querySelector('ol');
  orderedList.addEventListener('click', function (event) {
    const selected = document.querySelectorAll('.selected');
    for (let i = 0; i < selected.length; i += 1) {
      selected[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}


function createInput() {
  const main = document.querySelector('main');
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'Digite item para adicionar a lista';
  main.appendChild(input);
}

function removeSelectedClass() {
  const taskArray = document.querySelectorAll('.task');
  for (let index = 0; index < taskArray.length; index += 1) {
    taskArray[index].classList.remove('selected');
  }
}

function createButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Criar tarefa';
  main.appendChild(button);
}

function saveTasksButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.id = 'salvar-tarefas';
  button.innerText = 'Salvar Lista';
  main.appendChild(button);
}


function orderedTask() {
  const main = document.querySelector('main');
  const orderTask = document.createElement('ol');
  orderTask.id = 'lista-tarefas';
  main.appendChild(orderTask);
}

function moveUpButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.id = 'mover-cima';
  button.innerText = 'Mover para cima';
  main.appendChild(button);
}

function moveDownButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.id = 'mover-baixo';
  button.innerText = 'Mover para baixo';
  main.appendChild(button);
}


function submitButton() {
  const orderedList = document.querySelector('#lista-tarefas');
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', function () {
    const input = document.querySelector('#texto-tarefa');
    const inputValue = document.querySelector('#texto-tarefa').value;
    const listItem = document.createElement('li');
    listItem.innerText = inputValue;
    orderedList.appendChild(listItem);
    input.value = '';
  });
}

function taskSavedButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.id = 'salvar-tarefas';
  button.innerText = 'Salvar Lista';
  main.appendChild(button);
}

function getListItens() {
  const orderedList = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const listItem = document.createElement('li');
    const objStorage = JSON.parse(localStorage.getItem(index));
    listItem.innerText = objStorage.text;
    listItem.className = objStorage.class;
    orderedList.ghjhhjh
function createOrderedList() {
  const main = document.querySelector('main');
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  main.appendChild(orderedList);
}

function clearSelectedTasks() {
  const button = document.getElementById('remover-selecionado');
  button.addEventListener('click', function () {
    const liList = document.getElementsByTagName('li');
    for (let index = 0; index < liList.length; index += 1) {
      if (liList[index].classList.contains('selected')) {
        liList[index].remove();
        index -= 1;
      }
    }
  });
}

function clearSelectedButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.id = 'remover-selecionado';
  button.innerText = 'Apagar selecionado';
  main.appendChild(button);
}

function clearTasksButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerText = 'Apaga tudo';
  main.appendChild(button);
}

function clearCompletedButton() {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.id = 'remover-finalizados';
  button.innerText = 'Apagar completados';
  main.appendChild(button);
}

function clearAllTasks() {
  const button = document.getElementById('apaga-tudo');
  const orderedList = document.getElementById('lista-tarefas');
  button.addEventListener('click', function () {
    const listLength = orderedList.childElementCount;
    for (let index = 0; index < listLength; index += 1) {
      orderedList.firstChild.remove();
    }
  });
}

function setListItens() {
  const button = document.getElementById('salvar-tarefas');
  button.addEventListener('click', function () {
    const lineItens = document.getElementsByTagName('li');
    for (let index = 0; index < lineItens.length; index += 1) {
      const objeto = { text: lineItens[index].innerText, class: lineItens[index].className,
      };
      localStorage.setItem(index, JSON.stringify(objeto));
    }
  });
}

window.onload = function () {
  createOrderedList();
  saveTasksButton();
  clearCompletedButton();
  moveDownButton();
  moveUpButton();
  clearSelectedButton();
  clearSelectedTasks();
  clearTasksButton();
  createTitle();
  createParagraph();
  createInput();
  createButton();
  orderedTask();
  taskSavedButton();
  submitButton();
  setListItens();
  getListItens();
  clearAllTasks();
  removeSelectedClass();
};
