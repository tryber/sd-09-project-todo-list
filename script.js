function createTitle() {
  const header = document.querySelector('header');
  const title = document.createElement('h1');
  header.appendChild(title);
  title.innerText = 'Minha Lista de Tarefas';
}

function createParagraph() {
  const main = document.querySelector('main');
  const paragraph = document.createElement('p');
  main.appendChild(paragraph);
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  paragraph.id = 'funcionamento';
}

function createInput() {
  const main = document.querySelector('main');
  const input = document.createElement('input');
  main.appendChild(input);
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'Digite o item que deseja adicionar à lista';
}

function createList() {
  const main = document.querySelector('main');
  const list = document.createElement('ol');
  main.appendChild(list);
  list.id = 'lista-tarefas';
}

window.onload = function () {
  createTitle();
  createParagraph();
  createInput();
  createList();
};
