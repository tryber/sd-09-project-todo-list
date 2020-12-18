function createLi() {
  const olList = document.querySelector('#lista-tarefas');
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
  } else if (liItem.className === 'completed') {
    liItem.className = '';
  } else {
    liItem.className = 'completed';
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
  for (let i = 0; i < selected.length; i += 1) {
    selected[i].remove();
    i -= 1;
  }
}

function saveList() {
  const listForSave = document.querySelectorAll('#lista-tarefas li');
  const listToDoArray = [[], []];
  for (let i = 0; i < listForSave.length; i += 1) {
    listToDoArray[0].push(listForSave[i].innerText);
    listToDoArray[1].push(listForSave[i].className);
  }
  localStorage.setItem('itemList', JSON.stringify(listToDoArray));
}

function loadSavedList() {
  const listSaved = JSON.parse(localStorage.getItem('itemList'));
  if (listSaved !== null && listSaved[0][0] !== undefined) {
    const olList = document.getElementById('lista-tarefas');
    for (let i = 0; i < listSaved[0].length; i += 1) {
      const liItem = document.createElement('li');
      liItem.textContent = listSaved[0][i];
      liItem.className = listSaved[1][i];
      olList.appendChild(liItem);
    }
  } else {
    localStorage.clear();
  }
}

function moveToUp() {
  const olList = document.querySelector('#lista-tarefas');
  let lis = olList.children;
  for (let i = 0; i < lis.length; i += 1) {
    let temp = document.createElement('li');
    console.log(i, 'antes')
    if (((i > 0) && (lis[i].className === 'selected completed')) || ((i > 0) && (lis[i].className === 'selected'))) {
      console.log(i, 'dentro')
      temp.innerText = lis[i - 1].innerText;
      temp.className = lis[i - 1].className;
      lis[i - 1].innerText = lis[i].innerText;
      lis[i - 1].className = lis[i].className;
      lis[i].innerText = temp.innerText;
      lis[i].className = temp.className;
      break;
    }
  }
}

function moveToDown() {
  if (document.querySelector('.selected')) {
    let selected = document.querySelector('.selected');
    if (selected.nextElementSibling) {
      const tempText = selected.nextElementSibling.innerText;
      const tempClass = selected.nextElementSibling.className;
      selected.nextElementSibling.innerText = selected.innerText;
      selected.nextElementSibling.className = selected.className;
      selected.innerText = tempText;
      selected.className = tempClass;
    }
  }
}

function allEvents() {
  const btnAdd = document.querySelector('#criar-tarefa');
  const olList = document.querySelector('#lista-tarefas');
  const inputEraseAll = document.getElementById('apaga-tudo');
  const btnEraseFinished = document.querySelector('#remover-finalizados');
  const btnEraseSelected = document.getElementById('remover-selecionado');
  const btnSave = document.querySelector('#salvar-tarefas');
  const btnCima = document.querySelector('#mover-cima');
  const btnBaixo = document.querySelector('#mover-baixo');

  btnAdd.addEventListener('click', createLi);
  olList.addEventListener('click', oneClick);
  olList.addEventListener('dblclick', dbClick);
  inputEraseAll.addEventListener('click', eraseAll);
  btnEraseFinished.addEventListener('click', removeFinished);
  btnEraseSelected.addEventListener('click', removeSelected);
  btnSave.addEventListener('click', saveList);
  btnCima.addEventListener('click', moveToUp);
  btnBaixo.addEventListener('click', moveToDown);
}

window.onload = function () {
  allEvents();
  loadSavedList();
}
