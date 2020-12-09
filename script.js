function addHeader() {
  const body = document.querySelector('body');
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

window.onload = function() {
  addHeader();
  addTitle();
}
