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

function criarLista(listString) {
  const newList = document.createElement('ol');
  newList.id = listString;
  main.appendChild(newList);
}
criarLista('lista-tarefas');

function criarTarefa(tarefa) {
  const newTask = document.createElement('button');
  newTask.id = tarefa;
  newTask.innerHTML = 'Adicionar';
  main.appendChild(newTask);
}
criarTarefa('criar-tarefa');

let botao = document.querySelector('button');
function itemLista() {
  const item = document.querySelector('#lista-tarefas');
  const textInput = document.querySelector('#texto-tarefa');
  const listaTarefa = document.createElement('li');
  listaTarefa.innerHTML = textInput.value;
  item.appendChild(listaTarefa);
  limpaTexto();
}
botao.addEventListener('click', itemLista);

function limpaTexto() {
  const textInput = document.querySelector('#texto-tarefa');
  if(textInput.value !== ''){
    textInput.value = '';
  }
}
