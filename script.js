/* Definicao de variaveis / constantes */
const taskList = document.querySelector('#lista-tarefas');

/* funcao para ler tarefas salvas */
function loadItems(storage) {
  if (localStorage.getItem(storage) != null) {
    const itemsStorage = JSON.parse(localStorage.getItem(storage));
    for (let index = 0; index < itemsStorage.length; index += 1) {
      const addTask = document.createElement('li');
      addTask.innerText = itemsStorage[index].objItem;
      addTask.className = itemsStorage[index].objClass;
      addTask.style.backgroundColor = itemsStorage[index].objBackgound;
      addTask.style.textDecoration = itemsStorage[index].objStyle;
      taskList.appendChild(addTask);
    }
  }
}

/* funcao para retornar a posicao do item */
function itemPosition(itemsList, item) {
  let positionReturn;
  for (let index = 0; index < itemsList.length; index += 1) {
    if (itemsList[index].innerText === item) {
      positionReturn = index;
    }
  }
  return positionReturn;
}

/* funcao para remover itens */
function removeItems(items) {
  const itemsToRemove = document.querySelectorAll(items);
  for (let index = 0; index < itemsToRemove.length; index += 1) {
    itemsToRemove[index].remove();
  }
}

/* Inicio do Script */

loadItems('toDoList');

/* Adiciona tarefa */
const addButton = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
addButton.addEventListener('click', function () {
  if (textTask.value !== '') {
    const addTask = document.createElement('li');
    addTask.innerText = textTask.value;
    taskList.appendChild(addTask);
    textTask.value = '';
  }
});

/* Selecionar tarefa */
taskList.addEventListener('click', function (itemList) {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem != null) {
    selectedItem.className = '';
    selectedItem.style.backgroundColor = 'rgb(255, 255, 255)';
  }
  if (itemList.target.className !== 'completed') {
    itemList.target.className = 'selected';
    itemList.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

/* Completa tarefa */
taskList.addEventListener('dblclick', function (itemList) {
  itemList.target.style.backgroundColor = 'rgb(255, 255, 255)';
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
  if (moveSelect != null) {
    let actualPosition = itemPosition(moveList, moveSelect.innerText);
    if (actualPosition > 0){
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
  }
});

/* Move item para baixo */
const moveDown = document.querySelector('#mover-baixo');
moveDown.addEventListener('click', function (item) {
  let moveList = document.querySelectorAll('li');
  let moveSelect = document.querySelector('.selected');
  if (moveSelect != null) {
    let actualPosition = itemPosition(moveList, moveSelect.innerText);
    if (actualPosition < moveList.length - 1){
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
  }
});

/* Salva tarefas */
const saveTasks = document.querySelector('#salvar-tarefas');
saveTasks.addEventListener('click', function () {
  let saveList = document.querySelectorAll('li');
  let arrayTask = [];
  for (let index = 0; index < saveList.length; index += 1) {
    let objectList = {
      objItem: '',
      objClass: '',
      objBackgound: '',
      objStyle: ''
    };
    objectList.objItem = saveList[index].innerText;
    objectList.objClass = saveList[index].className;
    objectList.objBackgound = saveList[index].style.backgroundColor;
    objectList.objStyle = saveList[index].style.textDecoration;
    arrayTask.push (objectList);
  }
  localStorage.setItem('toDoList', JSON.stringify(arrayTask));
});
