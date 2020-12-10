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

function addInput() {
  const createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  createInput.setAttribute('placeholder', 'Task');
  container.appendChild(createInput);
}

function addList() {
  const createList = document.createElement('ol');
  createList.id = 'lista-tarefas';
  container.appendChild(createList)
}

window.onload = function () {
  addHeader();
  addTitle();
  addParagraph();
  addInput();
  addList();
};
