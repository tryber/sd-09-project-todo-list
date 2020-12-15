function createTitle() {
  const headerAcess = document.querySelector('header');
  const definitionTitle = document.createElement('h1');
  headerAcess.appendChild(definitionTitle);
  definitionTitle.innerText = 'Minha Lista de Tarefas';
  definitionTitle.style.color = 'violet';
  definitionTitle.style.textAlign = 'center';
}

function createParagraph() {
  const mainAcess = document.querySelector('main');
  const definitionParagraph = document.createElement('p');
  mainAcess.appendChild(definitionParagraph);
  definitionParagraph.innerText =
    'Clique duas vezes em um item para marcá-lo como completo';
  definitionParagraph.id = 'funcionamento';
}

window.onload = function () {
  createTitle();
  createParagraph();
};
