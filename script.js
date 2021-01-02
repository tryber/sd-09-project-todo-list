let main = document.querySelector('body');

function title(titlesString) {
  let newHeader = document.createElement('header');
  newHeader.innerHTML = titlesString;
  main.appendChild(newHeader);
}
title('Minha Lista de Tarefas');

function workout(textString) {
  let paragraph = document.createElement('p');

  paragraph.id = 'funcionamento';
  paragraph.innerHTML = textString;
  main.appendChild(paragraph);
}
workout('Clique duas vezes em um item para marcá-lo como completo');