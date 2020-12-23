function clearInput() {
  const inputLocal = document.querySelector('#texto-tarefa');
  inputLocal.value = '';
}

function newItemList() {
  const buttonLocal = document.querySelector('#criar-tarefa');

  buttonLocal.addEventListener('click', function () {
    const taskName = document.querySelector('#texto-tarefa').value;
    const listLocal = document.querySelector('#lista-tarefas');

    const newItem = document.createElement('li');
    newItem.className = 'list-item';
    newItem.innerText = taskName;
    listLocal.appendChild(newItem);

    clearInput();
  });
}

function clickColor() {
  let ulLocal = document.querySelector('#lista-tarefas');
  ulLocal.addEventListener('click', function (event) {
    const element = event.target;
    const listItemLocal = document.querySelectorAll('.list-item');

    for (let count = 0; count < listItemLocal.length; count += 1) {
      if (listItemLocal[count].classList.contains('selected')) {
        listItemLocal[count].classList.remove('selected');
      }
    }
    if (element.className === 'list-item') {
      element.classList.add('selected');
    }
  });
}

function doubleClick() {
  document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('list-item')) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  });
}

function eraseAll() {
  const eraseButtonLocal = document.querySelector('#apaga-tudo');
  eraseButtonLocal.addEventListener('click', function () {
    const listItemLocal = document.querySelectorAll('.list-item');
    for (let count = 0; count < listItemLocal.length; count += 1) {
      listItemLocal[count].remove();
    }
  });
}

function eraseFinished() {
  const eraseFinishedButtonLocal = document.querySelector(
    '#remover-finalizados'
  );
  eraseFinishedButtonLocal.addEventListener('click', function () {
    const listFinishedLocal = document.querySelectorAll('.completed');
    for (let count = 0; count < listFinishedLocal.length; count += 1) {
      listFinishedLocal[count].remove();
    }
  });
}

function eraseSelected() {
  const eraseSelectedButton = document.querySelector('#remover-selecionado');
  eraseSelectedButton.addEventListener('click', function () {
    const listItemGen = document.querySelectorAll('.list-item');
    for (let count = 0; count < listItemGen.length; count += 1) {
      if (listItemGen[count].classList.contains('selected')) {
        listItemGen[count].remove();
      }
    }
  });
}

function moveUp() {
  const moveUpButton = document.querySelector('#mover-cima');
  moveUpButton.addEventListener('click', function () {
    const selectedItens = document.querySelectorAll('.list-item');
    for (let count = 0; count < selectedItens.length; count += 1) {
      if (selectedItens[count].classList.contains('selected')) {
        if (count > 0) {
          const selectedPrevious = selectedItens[count - 1];
          const selectedItem = selectedItens[count];
          const auxiliar = selectedItem.innerText;
          selectedItem.innerText = selectedPrevious.innerText;
          selectedPrevious.innerText = auxiliar;

          selectedPrevious.classList.add('selected');
          selectedItem.classList.remove('selected');
        }
      }
    }
  });
}

function moveDown() {
  const moveDownButton = document.querySelector('#mover-baixo');
  moveDownButton.addEventListener('click', function () {
    const selectedItens = document.querySelectorAll('.list-item');
    for (let count = 0; count < selectedItens.length; count += 1) {
      if (selectedItens[count].classList.contains('selected')) {
        if (count < selectedItens.length - 1) {
          const nextElement = selectedItens[count + 1];
          const element = selectedItens[count];
          const auxiliarSecond = element.innerText;

          element.innerText = nextElement.innerText;
          nextElement.innerText = auxiliarSecond;

          nextElement.classList.add('selected');
          element.classList.remove('selected');
          break;
        }
      }
    }
  });
}

window.onload = function () {
  newItemList();
  doubleClick();
  eraseAll();
  eraseFinished();
  eraseSelected();
  moveUp();
  clickColor();
  moveDown();
};
