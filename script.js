const contentInput = document.getElementById('texto-tarefa');
const orderList = document.getElementById('lista-tarefas');
const buttonRemoveSelected = document.getElementById('remover-finalizados');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const line = document.getElementsByClassName('line');
const completed = document.getElementsByClassName('completed');

function addItemInList() {
  if (contentInput.value !== '' && contentInput.value.length <= 30) {
    const newline = document.createElement('li');
    newline.className = 'line';
    newline.innerText = contentInput.value;
    orderList.appendChild(newline);
  }
  contentInput.value = '';
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

function removeSelected() {
  for (let index = 0; index < completed.length;) {
    orderList.removeChild(completed[completed.length - 1]);
  }
}

function clearAll() {
  for (let index = 0; index < line.length;) {
    orderList.removeChild(line[line.length - 1]);
  }
}

window.onload = function init() {
  buttonAdd.addEventListener('click', addItemInList);
  orderList.addEventListener('click', selectText);
  orderList.addEventListener('dblclick', concludedOrNot);
  buttonClear.addEventListener('click', clearAll);
  buttonRemoveSelected.addEventListener('click', removeSelected)
};
