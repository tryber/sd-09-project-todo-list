const body = document.querySelector('body');
function addHeader() {
  const createHeader = document.createElement('header');
  body.appendChild(createHeader);
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
  body.appendChild(createParagraph);
}

window.onload = function () {
  addHeader();
  addTitle();
  addParagraph();
};
