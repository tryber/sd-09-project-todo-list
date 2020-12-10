// 9- click change bgcolor to gray
function changeBGSelectedItems() {
  const list = document.querySelector('ol#lista-tarefas');
  list.addEventListener('click', function (eventT) {
    const listElements = document.querySelectorAll('ol#lista-tarefas li');
    for (let index = 0; index < listElements.length; index += 1) {
      listElements[index].style.backgroundColor = '';
    }
    eventT.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

// 9- click apply/remove text-decoration

function markupTasks() {
  const list = document.querySelector('ol#lista-tarefas');
  list.addEventListener('dblclick', function (event) {
    if (event.target.className === '') {
      event.target.className = 'completed';
    } else {
      event.target.className = '';
    }
  });
}

// 5- add task to list #lista-tarefas

function clickAddTask() {
  const form = document.getElementById('input-bar');
  const taskOlList = document.querySelector('#lista-tarefas');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskItem = document.createElement('li');
    const taskRead = event.target.tarefa.value;
    taskItem.innerText = taskRead;
    if (taskRead === '') {
      return;
    }
    taskOlList.appendChild(taskItem);
    event.target.tarefa.value = '';
  });
}


// 8- buttons

function createButton(nameId, nameButton) {
  const buttonSection = document.querySelector('.tools');
  const newButton = document.createElement('button');
  newButton.id = nameId;
  newButton.innerText = nameButton;
  buttonSection.appendChild(newButton);
}

// 10- apply function erase all to button (includes local storage clear)

function buttonRemoveAll() {
  const button = document.querySelector('#apaga-tudo');
  button.addEventListener('click', function () {
    const list = document.querySelector('ol#lista-tarefas');
    const listElements = document.querySelectorAll('ol#lista-tarefas li');
    for (let index = 0; index < listElements.length; index += 1) {
      list.removeChild(listElements[index]);
    }
    localStorage.clear();
  });
}

// 11- apply function to remove only items with class "completed"

function buttonRemoveCompletedTasks() {
  const button = document.querySelector('#remover-finalizados');
  button.addEventListener('click', function () {
    const list = document.querySelector('ol#lista-tarefas');
    const listElements = document.querySelectorAll('ol#lista-tarefas li');
    for (let index = 0; index < listElements.length; index += 1) {
      if (listElements[index].className === 'completed') {
        list.removeChild(listElements[index]);
        localStorage.removeItem(index);
      }
    }
  });
}

// 12- save items on local storage
function buttonSaveTaskList() {
  const button = document.querySelector('#salvar-tarefas');
  button.addEventListener('click', function () {
    const listElements = document.querySelectorAll('ol#lista-tarefas li');
    for (let index = 0; index < listElements.length; index += 1) {
      const objItem = { content: listElements[index].innerText,
        classContent: listElements[index].className,
      };
      localStorage.setItem(index, JSON.stringify(objItem));
    }
  });
}

window.addEventListener('load', function () {
  const list = document.querySelector('ol#lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const objItem = JSON.parse(localStorage.getItem(index));
    const newElement = document.createElement('li');
    newElement.innerText = objItem.content;
    newElement.className = objItem.classContent;
    list.appendChild(newElement);
  }
});

// 13- apply function to move up/down buttons

function buttonMoveUp() {
  const buttonUp = document.querySelector('#mover-cima');
  buttonUp.addEventListener('click', function () {
    const listElements = document.querySelectorAll('ol#lista-tarefas li');
    let current = '';
    for (let index = 0; index < listElements.length; index += 1) {
      if (listElements[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        current = listElements[index];
        const previous = current.previousSibling;
        if (previous !== null) {
          previous.insertAdjacentElement('beforebegin', current);
        }
      }
    }
  });
}

function buttonMoveDown() {
  const buttonDown = document.querySelector('#mover-baixo');
  buttonDown.addEventListener('click', function () {
    const listElements = document.querySelectorAll('ol#lista-tarefas li');
    let current = '';
    for (let index = 0; index < listElements.length; index += 1) {
      if (listElements[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        current = listElements[index];
        const next = current.nextSibling;
        if (next !== null) {
          current.insertAdjacentElement('beforebegin', next);
        }
      }
    }
  });
}

// 14 - apply remove selected item

function buttonRemoveSelected() {
  const buttonRemove = document.querySelector('#remover-selecionado');
  buttonRemove.addEventListener('click', function () {
    const list = document.querySelector('ol#lista-tarefas');
    const listElements = document.querySelectorAll('ol#lista-tarefas li');
    for (let index = 0; index < listElements.length; index += 1) {
      if (listElements[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        list.removeChild(listElements[index]);
        localStorage.removeItem(index);
      }
    }
  });
}

// add tasks to list and behavior of each taskitem in list
changeBGSelectedItems();
markupTasks();
clickAddTask();
// create all buttons
createButton('apaga-tudo', '❌');
createButton('mover-cima', '⬆');
createButton('mover-baixo', '⬇');
createButton('salvar-tarefas', 'Salvar Tarefas');
createButton('remover-selecionado', 'Remover Seleção');
createButton('remover-finalizados', 'Limpar Completos');
// apply the functions on buttons
buttonRemoveAll();
buttonRemoveCompletedTasks();
buttonSaveTaskList();
buttonMoveUp();
buttonMoveDown();
buttonRemoveSelected();
