function createTitle() {
  const header = document.querySelector('header');
  const title = document.createElement('h1');
  header.appendChild(title);
  title.innerText = 'Minha Lista de Tarefas';
}

function createParagraph() {
  const header = document.querySelector('main');
  const paragraph = document.createElement('p');
  header.appendChild(paragraph);
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  paragraph.id = 'funcionamento';
}

window.onload = function() {
  createTitle();
  createParagraph();
}
