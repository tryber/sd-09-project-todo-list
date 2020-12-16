function createTitle() {
  const headerAccess = document.querySelector('header');
  const definitionTitle = document.createElement('h1');
  headerAccess.appendChild(definitionTitle);
  definitionTitle.innerText = 'Minha Lista de Tarefas';
}

function createParagraph() {
  const mainAccess = document.querySelector('main');
  const definitionParagraph = document.createElement('p');
  mainAccess.appendChild(definitionParagraph);
  definitionParagraph.innerText =
    'Clique duas vezes em um item para marcá-lo como completo';
  definitionParagraph.id = 'funcionamento';
}

function createInputTextArea() {
  const mainAccess = document.querySelector('main');
  const definitionInnerTextArea = document.createElement('input');
  mainAccess.appendChild(definitionInnerTextArea);
  definitionInnerTextArea.type = 'text';
  definitionInnerTextArea.id = 'texto-tarefa';
  definitionInnerTextArea.placeholder = 'Digite seu texto aqui!';
}

function createOrderedList() {
  const mainAccess = document.querySelector('main');
  const definitionOrderedList = document.createElement('ol');
  mainAccess.appendChild(definitionOrderedList);
  definitionOrderedList.id = 'lista-tarefas';
}

function createButtonAddItem() {
  const mainAccess = document.querySelector('main');
  const definitionButtonAddItem = document.createElement('button');
  mainAccess.appendChild(definitionButtonAddItem);
  definitionButtonAddItem.id = 'criar-tarefa';
  definitionButtonAddItem.innerText = 'Criar tarefa';
}

function clickAddItem() {
  const buttonAccess = document.querySelector('#criar-tarefa');
  const olAccess = document.querySelector('#lista-tarefas');
  buttonAccess.addEventListener('click', function () {
    const elementList = document.createElement('li');
    const input = document.querySelector('#texto-tarefa');
    const inputValue = document.querySelector('#texto-tarefa').value;
    olAccess.appendChild(elementList);
    elementList.innerText = inputValue;
    input.value = '';
  });
}

function selectedItemList() {
  const itensList = document.getElementById('lista-tarefas');
  itensList.addEventListener('click', function (event) {
    const selectedClass = document.querySelectorAll('.selected');
    for (let index = 0; index < selectedClass.length; index += 1) {
      selectedClass[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function selectedCompletedItem() {
  const itensList = document.getElementById('lista-tarefas');
  itensList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    }else {
      event.target.classList.add('completed');
    }
  });
}

function removeCompletedItem() {
  const callCompletedItens = document.querySelectorAll('.completed');
  for (let index = 0; index < callCompletedItens; index += 1) {
    callCompletedItens[index].addEventListener('dblclick', function (event) {
      event.target.classList.remove('completed');
    });
  }
}

function createDeleteButton() {
  const mainAccess = document.querySelector('main');
  const createRemoveButton = document.createElement('button');
  mainAccess.appendChild(createRemoveButton);
  createRemoveButton.id = 'apaga-tudo';
  createRemoveButton.innerText = 'Apagar tudo';
}

function removeAll() {
  const acessButton = document.getElementById('apaga-tudo');
  acessButton.addEventListener('click', function () {
    var lista = document.getElementsByTagName('ol')[0];
    var itens = lista.querySelectorAll('li');
    for (let index = 0; index < itens.length; index += 1) {
      lista.removeChild(itens[index]);
    }
  });
}

function createCompletedDelete() {
  const mainAccess = document.querySelector('main');
  const createCompletedDelete = document.createElement('button');
  mainAccess.appendChild(createCompletedDelete);
  createCompletedDelete.id = 'remover-finalizados';
  createCompletedDelete.innerText = 'Apaga itens marcados';
}

function removeCompleted() {
  const acessbuttonCompleted = document.getElementById('remover-finalizados');
  acessbuttonCompleted.addEventListener('click', function (event) {
    var lista = document.getElementsByTagName('ol')[0];
    var itens = lista.querySelectorAll('.completed');
    for (let index = 0; index < itens.length; index += 1) {
      lista.removeChild(itens[index]);
    }
  });
}

function createSelectDelete() {
  const mainAccess = document.querySelector('main');
  const createSelectDelete = document.createElement('button');
  mainAccess.appendChild(createSelectDelete);
  createSelectDelete.id = 'remover-selecionado';
  createSelectDelete.innerText = 'Apaga selecionado';
}

function removeSelected() {
  const acessbuttonCompleted = document.getElementById('remover-selecionado');
  acessbuttonCompleted.addEventListener('click', function (event) {
    var lista = document.getElementsByTagName('ol')[0];
    var itens = lista.querySelectorAll('.selected');
    for (let index = 0; index < itens.length; index += 1) {
      lista.removeChild(itens[index]);
    }
  });
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInputTextArea();
  createOrderedList();
  createButtonAddItem();
  clickAddItem();
  selectedItemList();
  selectedCompletedItem();
  createDeleteButton();
  removeAll();
  createCompletedDelete();
  removeCompleted();
  createSelectDelete();
  removeSelected();
};
