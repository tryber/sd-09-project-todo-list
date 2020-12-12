const contentInput = document.getElementById('texto-tarefa');
const orderList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');

function addItemInList() {
  let line = document.createElement('li');
  line.className = 'line';
  line.innerText = contentInput.value;
  orderList.appendChild(line);
  contentInput.value = '';
}

function buttonAddItem() {
  button.addEventListener('click', addItemInList);
}

window.onload = function init() {
  buttonAddItem()
}
