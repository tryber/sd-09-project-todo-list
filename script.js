window.onload = functionsLoaded();

function functionsLoaded() {
  newItemList();
  doubleClick();
  eraseAll();
  eraseFinished();
  eraseSelected();
}

function clearInput() {
  let inputLocal = document.querySelector('#texto-tarefa');
  inputLocal.value = '';
}

function newItemList() {
  let buttonLocal = document.querySelector('#criar-tarefa');

  buttonLocal.addEventListener('click', function () {
    let inputLocal = document.querySelector('#texto-tarefa');
    let taskName = inputLocal.value;
    let listLocal = document.querySelector('#lista-tarefas');

    let newItem = document.createElement('li');
    newItem.className = 'list-item';
    newItem.innerText = taskName;
    listLocal.appendChild(newItem);

    clearInput();
    clickColor();
  });
}

function clickColor() {
  document.addEventListener('click', function (event) {
    let element = event.target;
    let listItemLocal = document.querySelectorAll('.list-item');
    for (let count = 0; count < listItemLocal.length; count += 1) {
      if (listItemLocal[count].style.backgroundColor === 'rgb(128, 128, 128)') {
        listItemLocal[count].style.backgroundColor = 'white';
      }
    }
    if (element.className === 'list-item') {
      element.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

function doubleClick() {
  document.addEventListener('dblclick', function (event) {
    if (event.target.className === 'list-item') {
      event.target.classList.add('completed');
    } else if (event.target.classList[1] === 'completed') {
      event.target.classList.remove('completed');
    }
  });
}

function eraseAll() {
  let eraseButtonLocal = document.querySelector('#apaga-tudo');
  eraseButtonLocal.addEventListener('click', function () {
    let listItemLocal = document.querySelectorAll('.list-item');
    for (let index = 0; index < listItemLocal.length; index += 1) {
      listItemLocal[index].remove();
    }
  });
}

function eraseFinished() {
  let eraseFinishedButtonLocal = document.querySelector('#remover-finalizados');
  eraseFinishedButtonLocal.addEventListener('click', function () {
    let listFinishedLocal = document.querySelectorAll('.completed');
    for (let indice = 0; indice < listFinishedLocal.length; indice += 1) {
      listFinishedLocal[indice].remove();
    }
  });
}

function eraseSelected() {
  let eraseSelectedButton = document.querySelector('#remover-selecionado');
  eraseSelectedButton.addEventListener('click', function () {
    let listItemGen = document.querySelectorAll('.list-item');
    for (let contador = 0; contador < listItemGen.length; contador += 1) {
      if (
        listItemGen[contador].style.backgroundColor === 'rgb(128, 128, 128)'
      ) {
        listItemGen[contador].remove();
      }
    }
  });
}
