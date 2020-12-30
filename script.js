/* funcao para retornar a posicao do item */
function itemPosition (itemsList, item) {
  for (let index = 0; index < itemsList.length; index += 1){
    if (itemsList[index].innerText == item) {
      return index;
    }
  }

}
/* funcao para remover itens */
function removeItems (items) {
  itemsToRemove = document.querySelectorAll(items);
  for (let index = 0; index < itemsToRemove.length; index += 1) {
    itemsToRemove[index].remove();
  }
  itemsToRemove.remove
}

/* Adiciona tarefa */
const addButton = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
addButton.addEventListener('click', function () {
  if (textTask.value != '') {
    let addTask = document.createElement('li');
    addTask.innerText = textTask.value;
    taskList.appendChild(addTask);
    textTask.value = '';
  }
});

/* Selecionar tarefa */
const selecTask = document.querySelector('#lista-tarefas');
taskList.addEventListener('click', function (itemList) {
  selectedItem = document.querySelector('.selected');
  if (selectedItem != null) {
    selectedItem.className = '';
    selectedItem.style.backgroundColor = 'rgb(255, 255, 255)'
  }
  if (itemList.target.className != 'completed') {
    itemList.target.className = 'selected';
    itemList.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

/* Completa tarefa */
taskList.addEventListener('dblclick', function (itemList) {
  itemList.target.style.backgroundColor = 'rgb(255, 255, 255)'
  console.log(itemList.target.className );
  if (itemList.target.className === 'completed') {
    itemList.target.className = '';
    itemList.target.style.textDecoration = 'none';
  }
  else {
    itemList.target.className = 'completed';
    itemList.target.style.textDecoration = 'line-through';
  }
});

/* Apaga tudo */
const eraseAll = document.querySelector('#apaga-tudo');
eraseAll.addEventListener('click', function (item) {
  if (document.querySelectorAll('li').length > 0)
    removeItems('li');
});

/* Apaga selecionado */
const eraseSelected = document.querySelector('#remover-selecionado');
eraseSelected.addEventListener('click', function (item) {
  if (document.querySelectorAll('.selected').length > 0)
    removeItems('.selected');
});

/* Apaga finalizados */
const eraseFinished = document.querySelector('#remover-finalizados');
eraseFinished.addEventListener('click', function (item) {
  if (document.querySelectorAll('.completed').length > 0)
    removeItems('.completed');
});

/* Move item para cima */
const moveUp = document.querySelector('#mover-cima');
moveUp.addEventListener('click', function (item) {
  let moveList = document.querySelectorAll('li');
  let moveSelect = document.querySelector('.selected');
  let actualPosition = itemPosition(moveList, moveSelect.innerText);
  if (moveSelect != null > 0 && actualPosition > 0){
    let textTemp = moveList[actualPosition - 1].innerText;
    let classTemp = moveList[actualPosition - 1].className;
    let styleTemp = moveList[actualPosition - 1].style.textDecoration;
    let backgroundTemp = moveList[actualPosition - 1].style.backgroundColor;
    moveList[actualPosition - 1].innerText = moveSelect.innerText;
    moveList[actualPosition - 1].className = moveSelect.className;
    moveList[actualPosition - 1].style.textDecoration = moveSelect.style.textDecoration;
    moveList[actualPosition - 1].style.backgroundColor = moveSelect.style.backgroundColor;
    moveSelect.innerText = textTemp;
    moveSelect.className = classTemp;
    moveSelect.style.textDecoration = styleTemp;
    moveSelect.style.backgroundColor = backgroundTemp;
  }
});

/* Move item para baixo */
const moveDown = document.querySelector('#mover-baixo');
moveDown.addEventListener('click', function (item) {
  let moveList = document.querySelectorAll('li');
  let moveSelect = document.querySelector('.selected');
  let actualPosition = itemPosition(moveList, moveSelect.innerText);
  if (moveSelect != null > 0 && actualPosition < moveList.length - 1){
    let textTemp = moveList[actualPosition + 1].innerText;
    let classTemp = moveList[actualPosition + 1].className;
    let styleTemp = moveList[actualPosition + 1].style.textDecoration;
    let backgroundTemp = moveList[actualPosition + 1].style.backgroundColor;
    moveList[actualPosition + 1].innerText = moveSelect.innerText;
    moveList[actualPosition + 1].className = moveSelect.className;
    moveList[actualPosition + 1].style.textDecoration = moveSelect.style.textDecoration;
    moveList[actualPosition + 1].style.backgroundColor = moveSelect.style.backgroundColor;
    moveSelect.innerText = textTemp;
    moveSelect.className = classTemp;
    moveSelect.style.textDecoration = styleTemp;
    moveSelect.style.backgroundColor = backgroundTemp;
  }
});