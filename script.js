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

function createList(listString) {
  const newList = document.createElement('ol');
  newList.id = listString;
  main.appendChild(newList);
}
createList('list-task');

function createTask() {
  let newTask = document.createElement('button');
  newTask.id = 'createdTask';
  newTask.innerHTML = 'Algo';
  main.appendChild(newTask);
}
createTask();

let botao = document.querySelector('button');
function itemLista() {
  let item = document.querySelector('#list-task');
  let textInput = document.querySelector('#texto-tarefa');
  let listaTarefa = document.createElement('li');
  listaTarefa.innerHTML = textInput.value;
  item.appendChild(listaTarefa);
}
botao.addEventListener('click', itemLista);
