const btnAdd = document.querySelector('#criar-tarefa');
const olList = document.querySelector('#lista-tarefas');


function createLi() {
  const liItem = document.createElement('li');
  const inputValue = document.querySelector('#texto-tarefa');
  liItem.textContent = inputValue.value;
  olList.appendChild(liItem);
  inputValue.value = '';
}

function oneClick(event) {
  const liItem = event.target;
  const selected = document.querySelector('.selected');
  if (selected && liItem.className === 'selected completed') {
    console.log('selected and completed');
  } else if (selected && selected.className === 'selected completed') {
    selected.className = 'completed';
    if (liItem.className === 'completed') {
      liItem.className = 'selected completed';
    } else {
      liItem.className = 'selected';
    }
  } else if (selected) {
    selected.className = '';
    if (liItem.className === 'completed') {
      liItem.className = 'selected completed';
    } else {
      liItem.className = 'selected';
    }
  } else if (liItem.className === 'completed') {
    liItem.className = 'selected completed';
  } else {
    liItem.className = 'selected';
  }
}

function dbClick(event) {
  const liItem = event.target;
  if (liItem.className === 'selected completed') {
    liItem.className = 'selected';
    console.log('selected and completed');
  } else if (liItem.className === 'completed') {
    liItem.className = '';
  } else {
    liItem.className = 'completed';
  }
}

function eraseAll() {
  const olItem = document.querySelector('#lista-tarefas');
  const liItem = olItem.children;
  console.log(liItem.length);
  for (let i = 0; i < liItem.length; i += 1) {
    console.log('erase')
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

window.onload = function() {

  btnAdd.addEventListener('click', createLi);
  olList.addEventListener('click', oneClick);
  olList.addEventListener('dblclick', dbClick);
  const inputEraseAll = document.getElementById('apaga-tudo');
  inputEraseAll.addEventListener('click', eraseAll);
  const btnEraseFinished = document.querySelector('#remover-finalizados');
  btnEraseFinished.addEventListener('click', removeFinished);
}