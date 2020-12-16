const btnAdd = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');
const inputEraseAll = document.getElementById('apaga-tudo');
const btnEraseFinished = document.querySelector('#remover-finalizados');
const btnEraseSelected = document.getElementById('remover-selecionado');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnSave = document.getElementById('salvar-tarefas');


function createLi() {
  const liItem = document.createElement('li');
  const inputValue = document.querySelector('#texto-tarefa');
  if (inputValue.value) {
    liItem.textContent = inputValue.value;
    liItem.className = 'list';
    olList.appendChild(liItem);
    inputValue.value = '';
  }
}

function clickValidation(liItem) {
  if (liItem.id !== 'lista-tarefas') {
    return true;
  }
  return false;
}

function addClassName(liItem) {
  const selected = document.querySelector('.selected');
  if (selected && liItem.className === 'selected completed list') {
    console.log('selected and completed');
  } else if (selected && selected.className === 'selected completed list') {
    selected.className = 'completed list';
    if (liItem.className === 'completed list') {
      liItem.className = 'selected completed list';
    } else {
      liItem.className = 'selected list';
    }
  } else if (selected) {
    selected.className = ' list';
    if (liItem.className === 'completed list') {
      liItem.className = 'selected completed list';
    } else {
      liItem.className = 'selected list';
    }
  } else if (liItem.className === 'completed list') {
    liItem.className = 'selected completed list';
  } else {
    liItem.className = 'selected list';
  }
}

function oneClick(event) {
  const liItem = event.target;
  if (clickValidation(liItem)) {
    addClassName(liItem);
  }
}

function dbClick(event) {
  const liItem = event.target;
  if (clickValidation(liItem)){
    if (liItem.className === 'selected completed list') {
      liItem.className = 'selected list';
      console.log('selected and completed');
    } else if (liItem.className === 'completed list') {
      liItem.className = ' list';
    } else {
      liItem.className = 'completed list';
    }
  }
}

function eraseAll() {
  const olItem = document.querySelector('#lista-tarefas');
  const liItem = olItem.children;
  for (let i = 0; i < liItem.length; i += 1) {
    liItem[i].remove();
    i -= 1;
  }
}

function removeFinished() {
  const completed = document.getElementsByClassName('completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
    i -= 1;
  }
}

function removeSelected() {
  const selected = document.getElementsByClassName('selected');
  selected[0].remove();
}

function moveUp() {
  const olList = document.querySelector('#lista-tarefas');
  let lis = document.getElementsByClassName ('list');
  const selected = document.getElementsByClassName('selected');
  const olArray = olList.children;
  console.log(lis);
  for (let i = 0; i < lis.length; i += 1) {
    let temp = document.createElement('li');
    console.log(lis[i]);

    if (lis[i].className === 'selected list'  && i > 0) {
      temp.innerText = lis[i - 1].innerText;
      temp.className = lis[i - 1].className;

      lis[i - 1].innerText = lis[i].innerText;
      lis[i - 1].className = lis[i].className;

      lis[i].innerText = temp.innerText;
      lis[i].className = temp.className;
    }
  }
}

function moveDown() {

}

function saveList() {

}


window.onload = function () {
  btnAdd.addEventListener('click', createLi);
  olList.addEventListener('click', oneClick);
  olList.addEventListener('dblclick', dbClick);
  inputEraseAll.addEventListener('click', eraseAll);
  btnEraseFinished.addEventListener('click', removeFinished);
  btnEraseSelected.addEventListener('click', removeSelected);
  btnMoveUp.addEventListener('click', moveUp);
  btnMoveDown.addEventListener('click', moveDown);
  btnSave.addEventListener('click', saveList);
}
