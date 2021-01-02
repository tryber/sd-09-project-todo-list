const main = document.querySelector('body');

function title(titlesString) {
  const newHeader = document.createElement('header');
  newHeader.innerHTML = titlesString;
  main.appendChild(newHeader);
}
title('Minha Lista de Tarefas');

function workout(textString) {
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = textString;
  main.appendChild(paragraph);
}
workout('Clique duas vezes em um item para marcá-lo como completo');

function textBox(idString) {
  const newInput = document.createElement('input');
  newInput.id = idString;
  main.appendChild(newInput);
}
textBox('texto-tarefa');

function list(listString) {
  const newList = document.createElement('ol');
  newList.id = listString;
  main.appendChild(newList);
}
list('list-task');
