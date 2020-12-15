const contentInput = document.getElementById('texto-tarefa');
const orderList = document.getElementById('lista-tarefas');
const buttonRemoveSelected = document.getElementById('remover-finalizados');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const line = document.getElementsByClassName('line');
const selected = document.querySelector('.selected');
const completed = document.getElementsByClassName('completed');
const moveToUp = document.getElementById('mover-cima');
const moveToDown = document.getElementById('mover-baixo');

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
    if (line[index].className === 'line selected completed' || line[index].className === 'line completed') {
      line[index].style.backgroundColor = '';
      line[index].className = 'line completed';
    } else {
      line[index].style.backgroundColor = '';
      line[index].className = 'line';
    }
  }
  if (event.target.className === 'line completed') {
    event.target.className = 'line selected completed';
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  } else {
    event.target.className = 'line selected'
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function concludedOrNot(event) {
  if (event.target.className === 'line selected completed' || event.target.className === 'line completed') {
    event.target.style.textDecoration = '';
    event.target.className = 'line selected';
  } else {
    event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    event.target.className = 'line selected completed';
  }
}

function removeCompleted() {
  for (let index = 0; index < completed.length;) {
    orderList.removeChild(completed[completed.length - 1]);
  }
}

function clearAll() {
  for (let index = 0; index < line.length;) {
    orderList.removeChild(line[line.length - 1]);
  }
}

function moveUp() {
  for (let index = 0; index < line.length; index += 1) {
    if (line[index].className === 'line selected' || line[index].className === 'line selected completed') {
      let storeLine = line[index - 1].innerHTML;
      let storeClassUp = line[index - 1].className;
      let storeClassDown = line[index].className;
      line[index - 1].innerHTML = line[index].innerHTML;
      line[index].innerHTML = storeLine;
      line[index].className = storeClassUp;
      line[index - 1].className = storeClassDown;
      break;
    }
  }
}

function moveDown() {
  for (let index = 0; index < line.length; index += 1) {
    if (line[index].className === 'line selected' || line[index].className === 'line selected completed') {
      let storeLine = line[index].innerHTML;
      let storeClassUp = line[index + 1].className;
      let storeClassDown = line[index].className;
      line[index].innerHTML = line[index + 1].innerHTML;
      line[index].className = storeClassUp;
      line[index + 1].innerHTML = storeLine;
      line[index + 1].className = storeClassDown;
      break;
    }
  }
}

window.onload = function init() {
  buttonAdd.addEventListener('click', addItemInList);
  orderList.addEventListener('click', selectText);
  orderList.addEventListener('dblclick', concludedOrNot);
  buttonClear.addEventListener('click', clearAll);
  buttonRemoveSelected.addEventListener('click', removeCompleted);
  moveToUp.addEventListener('click', moveUp);
  moveToDown.addEventListener('click', moveDown)
};
