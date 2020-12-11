function onloadPge() {
  const numberOfTask = parseFloat(localStorage.getItem('numero de tarefas'));
  const list = document.querySelector('#lista-tarefas');
  for (let index = 0; index < numberOfTask; index += 1) {
    const mt = localStorage.getItem(`tarefas${index}`);
    const newli = document.createElement('li');
    newli.innerHTML = mt;
    newli.className = localStorage.getItem(`addClass${index}`);
    list.appendChild(newli);
  }
}
onloadPge();

function saveStorage() {
  const storage = [];
  const line = document.querySelectorAll('.item-list');
  for (let index = 0; index < line.length; index += 1) {
    localStorage.setItem(`tarefas${index}`, line[index].innerHTML);
    localStorage.setItem(`addClass${index}`, line[index].className);
  }
  localStorage.setItem('numero de tarefas', (line.length));
  localStorage.setItem('tarefas', (storage));
}

function saveAll() {
  const saveButton = document.querySelector('#salvar-tarefas');
  saveButton.addEventListener('click', saveStorage);
}
saveAll();

function newTask() {
  const list = document.querySelector('#lista-tarefas');
  const mt = document.querySelector('#texto-tarefa');
  const newli = document.createElement('li');
  newli.className = 'item-list';
  newli.innerText = mt.value;
  list.appendChild(newli);
  mt.value = '';
}

function makeTask() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', newTask);
  const inputText = document.getElementById('texto-tarefa');
  inputText.addEventListener('keyup', function () {
    if (event.keyCode === 13) {
      newTask();
    }
  });
}
makeTask();

function backgroundItemlist() {
  const fullList = document.querySelector('#lista-tarefas');
  fullList.addEventListener('click', function (event) {
    const listOfItem = document.querySelectorAll('.item-list');
    if (event.target === fullList) {
      return;
    }
    for (let index = 0; index < listOfItem.length; index += 1) {
      listOfItem[index].classList.remove('selected');
      listOfItem[index].style.background = 'none';
    }
    event.target.style.background = 'rgb(128,128,128)';
    event.target.className += ' selected';
  });
  fullList.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}
backgroundItemlist();

function erasedAll() {
  const eraserButton = document.getElementById('apaga-tudo');
  eraserButton.addEventListener('click', function () {
    const listOfItem = document.querySelector('#lista-tarefas');
    const line = document.querySelectorAll('.item-list');
    for (let index = 0; index < line.length; index += 1) {
      listOfItem.removeChild(line[index]);
    }
  });
}
erasedAll();

function erasedCompleted() {
  const eraserButton = document.getElementById('remover-finalizados');
  eraserButton.addEventListener('click', function () {
    const listOfItem = document.querySelector('#lista-tarefas');
    const line = document.querySelectorAll('.item-list');
    for (let index = 0; index < line.length; index += 1) {
      if (line[index].classList.contains('completed')) {
        listOfItem.removeChild(line[index]);
      }
    }
  });
}
erasedCompleted();


function buttonMoveTop() {
  const buttonTop = document.getElementById('mover-cima');
  buttonTop.addEventListener('click', function () {
    const ol = document.querySelector('#lista-tarefas');
    const listOfItem = document.querySelectorAll('.item-list');
    for (let index = 0; index < listOfItem.length; index += 1) {
      if (index !== 0) {
        if (listOfItem[index].classList.contains('selected')) {
          const aux = listOfItem[index - 1];
          ol.replaceChild(listOfItem[index], listOfItem[index - 1]);
          listOfItem[index].after(aux);
        }
      }
    }
  });
}
buttonMoveTop();

function buttonMoveDown() {
  const buttonDown = document.getElementById('mover-baixo');
  buttonDown.addEventListener('click', function () {
    const ol = document.querySelector('#lista-tarefas');
    const listOfItem = document.querySelectorAll('.item-list');
    for (let index = 0; index < listOfItem.length; index += 1) {
      if (index !== (listOfItem.length - 1)) {
        if (listOfItem[index].classList.contains('selected')) {
          const aux = listOfItem[index + 1];
          ol.replaceChild(listOfItem[index], listOfItem[index + 1]);
          listOfItem[index].before(aux);
        }
      }
    }
  });
}
buttonMoveDown();

function removerSelected() {
  const buttonRemove = document.getElementById('remover-selecionado');
  buttonRemove.addEventListener('click', function () {
    const ol = document.querySelector('#lista-tarefas');
    const listOfItem = document.querySelectorAll('.item-list');
    for (let index = 0; index < listOfItem.length; index += 1) {
      if (listOfItem[index].classList.contains('selected')) {
        ol.removeChild(listOfItem[index]);
      }
    }
  });
}
removerSelected();
