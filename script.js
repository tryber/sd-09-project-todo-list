const contentInput = document.getElementById('texto-tarefa');
const orderList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const line = document.getElementsByClassName('line');

function addItemInList() {
  while (contentInput.value !== '') {
    const newline = document.createElement('li');
    newline.className = 'line';
    newline.innerText = contentInput.value;
    orderList.appendChild(newline);
    contentInput.value = '';
  }
}

function selectText(event) {
  for (let index = 0; index < line.length; index += 1) {
    line[index].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function concludedOrNot(event) {
  if (event.target.className !== 'line completed') {
    event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    event.target.className = 'line completed';
  } else {
    event.target.style.textDecoration = '';
    event.target.className = 'line';
  }
}

window.onload = function init() {
  button.addEventListener('click', addItemInList);
  orderList.addEventListener('click', selectText);
  orderList.addEventListener('dblclick', concludedOrNot);
};
