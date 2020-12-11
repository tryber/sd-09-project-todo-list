window.onload = function () {
  const toDoList = document.querySelector('#lista-tarefas');
  const textArray = JSON.parse(localStorage.getItem('lista-texto')) || [];
  const classArray = JSON.parse(localStorage.getItem('lista-classe')) || [];

  for (let index = 0; index < textArray.length; index += 1) {
    const toDo = document.createElement('li');

    toDo.innerText = textArray[index];
    toDo.className = classArray[index];

    toDoList.appendChild(toDo);
  }
};

function addToDo() {
  const inputToDo = document.querySelector('#texto-tarefa');
  const addToDobutton = document.querySelector('#criar-tarefa');
  const toDoList = document.querySelector('#lista-tarefas');

  addToDobutton.addEventListener('click', function () {
    const toDoText = inputToDo.value;

    const toDo = document.createElement('li');
    toDo.innerText = toDoText;

    toDoList.appendChild(toDo);
    inputToDo.value = '';
  });
}

addToDo();

function selectToDo() {
  const toDoList = document.querySelector('#lista-tarefas');

  toDoList.addEventListener('click', function (event) {
    const toDos = document.querySelectorAll('#lista-tarefas li');

    toDos.forEach(function (toDo) {
      toDo.classList.remove('selected');
    });

    if (event.target !== toDoList) {
      event.target.classList.add('selected');
    }
  });
}

selectToDo();

function markToDoAsCompleted() {
  const toDoList = document.querySelector('#lista-tarefas');

  toDoList.addEventListener('dblclick', function (event) {
    if (event.target !== toDoList) {
      event.target.classList.toggle('completed');
    }
  });
}

markToDoAsCompleted();

function clearToDoList() {
  const clearButton = document.querySelector('#apaga-tudo');

  clearButton.addEventListener('click', function () {
    const toDoList = document.querySelector('#lista-tarefas');
    const toDos = document.querySelectorAll('#lista-tarefas li');

    toDos.forEach(function (toDo) {
      toDoList.removeChild(toDo);
    });
  });
}

clearToDoList();

function clearCompletedToDos() {
  const clearCompletedButton = document.querySelector('#remover-finalizados');

  clearCompletedButton.addEventListener('click', function () {
    const toDoList = document.querySelector('#lista-tarefas');
    const toDos = document.querySelectorAll('#lista-tarefas li');

    toDos.forEach(function (toDo) {
      if (toDo.className === 'completed') {
        toDoList.removeChild(toDo);
      }
    });
  });
}

clearCompletedToDos();

function saveList() {
  const saveListButton = document.querySelector('#salvar-tarefas');

  saveListButton.addEventListener('click', function () {
    const toDos = document.querySelectorAll('#lista-tarefas li');
    const toDoClassArray = [];
    const toDoTextArray = [];

    toDos.forEach(function (toDo) {
      toDoClassArray.push(toDo.className);
      toDoTextArray.push(toDo.innerText);
    });

    localStorage.setItem('lista-classe', JSON.stringify(toDoClassArray));
    localStorage.setItem('lista-texto', JSON.stringify(toDoTextArray));
  });
}

saveList();

function moverParaCima() {
  const upButton = document.querySelector('#mover-cima');

  upButton.addEventListener('click', function () {
    const selectedToDo = document.querySelector('.selected');
    const selectedText = selectedToDo.innerText;

    if (selectedToDo !== selectedToDo.parentNode.firstChild) {
      selectedToDo.innerText = selectedToDo.previousElementSibling.innerText;
      selectedToDo.previousElementSibling.innerText = selectedText;

      selectedToDo.classList.remove('selected');
      selectedToDo.previousElementSibling.classList.add('selected');
    }
  });
}

moverParaCima();

function moverParaBaixo() {
  const downButton = document.querySelector('#mover-baixo');

  downButton.addEventListener('click', function () {
    const selectedToDo = document.querySelector('.selected');
    const selectedText = selectedToDo.innerText;

    if (selectedToDo !== selectedToDo.parentNode.lastChild) {
      selectedToDo.innerText = selectedToDo.nextElementSibling.innerText;
      selectedToDo.nextElementSibling.innerText = selectedText;

      selectedToDo.classList.remove('selected');
      selectedToDo.nextElementSibling.classList.add('selected');
    }
  });
}

moverParaBaixo();
