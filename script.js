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

  buttonAccess.addEventListener('click' , function () {
    const elementList = document.createElement('li');
    const input = document.querySelector('#texto-tarefa');
    const inputValue = document.querySelector('#texto-tarefa').value;
    olAccess.appendChild(elementList);
    elementList.innerText = inputValue;
    input.value = '';
  });
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInputTextArea();
  createOrderedList();
  createButtonAddItem();
  clickAddItem();
};
