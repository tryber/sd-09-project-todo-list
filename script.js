const botao = document.querySelector('#criar-tarefa').addEventListener('click', botaoCriarTarefa);
const getList = document.getElementById('lista-tarefas');
const getTitle = document.getElementById('title');
let indexList = 0;
let resolverErroSelected = document.createElement('div');
resolverErroSelected.className = 'selected';
getTitle.appendChild(resolverErroSelected);

function botaoCriarTarefa() {
  const getInputValue = document.getElementById('texto-tarefa').value;
  const newList = document.createElement('li');
  getList.appendChild(newList);
  newList.innerText = getInputValue;
  document.getElementById('texto-tarefa').value = '';
  //listChildrens = getList.children;
  listReceiveEvent();
  //listChildrens[indexList].addEventListener('click', coloringBackgroundListItens);
  //indexList += 1;
}

function listReceiveEvent() {
  listChildrens = getList.children;
  listChildrens[indexList].addEventListener('click', coloringBackgroundListItens);
  indexList += 1;
}

function coloringBackgroundListItens(event) {
  let actualColoredItem = event.target;
  const selectedItem = document.querySelector('.selected');
  selectedItem.style.backgroundColor = 'white';
  selectedItem.classList.remove('selected');
  actualColoredItem.classList.add('selected');
  actualColoredItem.style.backgroundColor = 'rgb(128 , 128 , 128)';

}




