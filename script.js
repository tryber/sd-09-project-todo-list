function titleOperation() {
  const operation = document.createElement('h5');
  const title = document.querySelector('.title');
  title.appendChild(operation);
  operation.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  operation.id = 'funcionamento';
}

function createButton() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerHTML = 'Adicionar Tarefa';
  document.body.appendChild(button);
}

function createContainer() {
  const container = document.createElement('div');
  const button = document.querySelector('#criar-tarefa');
  const input = document.querySelector('#texto-tarefa');
  const listOrdened = document.querySelector('#lista-tarefas');
  container.appendChild(input);
  container.appendChild(button);
  container.appendChild(listOrdened);
  document.body.appendChild(container);
  container.className = 'container';
}

function savedStorage() {
  const list = document.querySelector('#lista-tarefas');
  localStorage.setItem('list', list.innerHTML);
}

function addNewTodo() {
  const button = document.querySelector('#criar-tarefa');
  const input = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');

  button.addEventListener('click', function () {
    if (input.value.length > 0) {
      const newList = document.createElement('li');
      newList.innerText = input.value;

      newList.className = 'list-items';
      list.appendChild(newList);
      input.value = '';
    }
  });

  input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && input.value.length > 0) {
      const newList = document.createElement('li');
      newList.innerText = input.value;

      newList.className = 'list-items';
      list.appendChild(newList);
      input.value = '';
    }
    savedStorage();
  });
}

function doubleClickList() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

function clickList() {
  const task = document.querySelector('#lista-tarefas');
  task.addEventListener('click', function (event) {
    let list = document.querySelectorAll('li');
    for (let index = 0; index < list.length; index += 1) {
      list[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function createButtonClearAllItemList() {
  let button = document.createElement('button');
  let container = document.querySelector('.container');
  button.id = 'apaga-tudo';
  button.innerText = 'Clear All List';
  container.appendChild(button);
}

function removeList() {
  let taskList = document.querySelector('#lista-tarefas')
  let buttonClearAll = document.querySelector('#apaga-tudo')

  buttonClearAll.addEventListener('click', function () {
    let itemsList = document.querySelectorAll('li')
    for (let index = 0; index < itemsList.length; index += 1) {
      taskList.removeChild(itemsList[index]);
    }
    savedStorage();
  })
}

function createButtonClearItemFinalized() {
  let button = document.createElement('button');
  let container = document.querySelector('.container');
  button.id = 'remover-finalizados';
  button.innerText = 'Clear Itens Finalized';
  container.appendChild(button);
}

function removeItemFinalized() {
  let taskList = document.querySelector('#lista-tarefas');
  let buttonClearFinalized = document.querySelector('#remover-finalizados');

  buttonClearFinalized.addEventListener('click', function () {
    let itemsList = document.querySelectorAll('.completed');
    for (let index = 0; index < itemsList.length; index += 1) {
      taskList.removeChild(itemsList[index]);
    }
    savedStorage();
  })
}

function createButtonClearItemSelected() {
  let button = document.createElement('button');
  let container = document.querySelector('.container');
  button.id = 'remover-selecionado';
  button.innerText = 'Clear Item Selected';
  container.appendChild(button);
}

function removeItemSelected() {
  let taskList = document.querySelector('#lista-tarefas');
  let buttonClearSelected = document.querySelector('#remover-selecionado');

  buttonClearSelected.addEventListener('click', function () {
    let itemsList = document.querySelectorAll('.selected');
    for (let index = 0; index < itemsList.length; index += 1) {
      taskList.removeChild(itemsList[index]);
    }
    savedStorage();
  })
}

function createButtonsMoveUpMoveDown() {
  const buttonUp = document.createElement('button');
  const buttonDown = document.createElement('button');
  const container = document.querySelector('.container');
  buttonUp.id = 'mover-cima';
  buttonDown.id = 'mover-baixo';
  buttonUp.innerText = '⇧';
  buttonDown.innerText = '⇩';
  container.appendChild(buttonUp);
  container.appendChild(buttonDown);
}


function moveUp() {
  let buttonUp = document.querySelector('#mover-cima');
  buttonUp.addEventListener('click', function () {
    let taskList = document.querySelector('#lista-tarefas');
    let itemSelected = document.querySelector('.selected');
    let itemsList = document.querySelectorAll('li')
    if (itemSelected === null) {
      return
    }
    for (let index = 0; index < itemsList.length; index += 1) {
      if (itemsList[index].innerText === itemSelected.innerText) {
        taskList.insertBefore(itemSelected, itemsList[index - 1])
      }
    }
    savedStorage();
  })
}


function moveDown() {
  let buttonDown = document.querySelector('#mover-baixo');
  buttonDown.addEventListener('click', function () {
    let taskList = document.querySelector('#lista-tarefas');
    let itemSelected = document.querySelector('.selected');
    let itemsList = document.querySelectorAll('li')
    if (itemSelected === null) {
      return
    }
    for (let index = 0; index < itemsList.length; index += 1) {
      if (itemSelected === itemsList[itemsList.length - 1]) {
        taskList.insertBefore(itemSelected, itemsList[0])
      } else if (itemSelected.innerText === itemsList[index].innerText) {
        taskList.insertBefore(itemsList[index + 1], itemSelected)
      }
    }
    savedStorage();
  })
}

function recovery() {
  document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('list');
}

window.onload = function () {
  titleOperation();
  createButton();
  createContainer();
  addNewTodo();
  createButtonClearItemSelected();
  createButtonClearItemFinalized();
  createButtonClearAllItemList();
  createButtonsMoveUpMoveDown();
  removeItemSelected();
  removeItemFinalized();
  removeList();
  clickList();
  doubleClickList();
  moveUp();
  moveDown();
  recovery();
};




