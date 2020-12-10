const textoTarefa = document.querySelector('#texto-tarefa');
const btnCreateTask = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');

// Recupera o valor do input e salva em um array
let list = [];
function createList() {
  let tasks = textoTarefa.value;
  list.push(tasks);
}

// Adiciona um item na lista
function setTask() {
  createList();
  let item = document.createElement('li');
  item.innerText = list[list.length - 1];
  olList.appendChild(item);
}

btnCreateTask.addEventListener('click', setTask)
