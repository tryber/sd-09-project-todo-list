const getList = document.getElementById('lista-tarefas');
const getTitle = document.getElementById('title');
let indexList = 0;
const resolverErroSelected = document.createElement('div');
resolverErroSelected.className = 'selected';
getTitle.appendChild(resolverErroSelected);

function coloringBackgroundListItens(event) {
  let actualColoredItem = event.target;
  const selectedItem = document.querySelector('.selected');
  selectedItem.style.backgroundColor = 'white';
  selectedItem.classList.remove('selected');
  actualColoredItem.classList.add('selected');
  actualColoredItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

function listReceiveEvent() {
  let listChildrens = getList.children;
  listChildrens[indexList].addEventListener('click', coloringBackgroundListItens);
  indexList += 1;
}

function botaoCriarTarefa() {
  const getInputValue = document.getElementById('texto-tarefa').value;
  const newList = document.createElement('li');
  getList.appendChild(newList);
  newList.innerText = getInputValue;
  document.getElementById('texto-tarefa').value = '';
  listReceiveEvent();
}

const botao = document.querySelector('#criar-tarefa').addEventListener('click', botaoCriarTarefa);
