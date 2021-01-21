// Retirando a seleção do item
function removingSelection() {
  const selection = document.querySelectorAll('.selected');
  for (let index = 0; index < selection.length; index += 1) {
    selection[index].classList.remove('selected');
  }
}

// Selecionando item
function selectingItem(event) {
  removingSelection();
  event.target.classList.toggle('selected');
}

// Item completo efeito letra tachada
function itemComplete(event) {
  if (event.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.toggle('completed');
  }
}

// Botão apagar lista
function deletingList() {
  const retrievesItems = document.querySelectorAll('.item');
  if (retrievesItems.length !== 0) {
    const list = document.querySelector('#lista-tarefas');
    list.innerHTML = '';
  }
}

// Botão apagar itens finalizados
function deletingCompletedItem() {
  const itemsMade = document.querySelectorAll('.completed');
  for (let index = 0; index < itemsMade.length; index += 1) {
    itemsMade[index].remove();
  }
}

// Botão criar tarefas
const textEntry = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
function addingTasks() {
  const item = document.createElement('li');
  item.className = 'item';
  item.innerText = textEntry.value;
  list.appendChild(item);
  textEntry.value = '';
  item.addEventListener('click', selectingItem);
  item.addEventListener('dblclick', itemComplete);
}

// Salvando a lista
function savingList() {
  localStorage.setItem('list', list.innerHTML);
}

// Recuperando ao iniciar
function retrievingList() {
  list.innerHTML = localStorage.getItem('list');
  const recoverItem = document.querySelectorAll('li');
  for (let index = 0; index < recoverItem.length; index += 1) {
    recoverItem[index].addEventListener('click', selectingItem);
    recoverItem[index].addEventListener('dblclick', itemComplete);
  }
}

// Movendo item selecionado para cima
function movingUp() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem && selectedItem.previousElementSibling !== null) {
    selectedItem.parentNode.insertBefore(selectedItem, selectedItem.previousElementSibling);
  }
}

// Movendo item selecionado para baixo
function movingDown() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem && selectedItem.nextSibling !== null) {
    selectedItem.parentNode.insertBefore(selectedItem.nextSibling, selectedItem);
  }
}

// Botão remover item selecionado
function removingSelectedItem() {
  const selectedItem = document.querySelector('.selected');
  selectedItem.remove();
}

window.onload = function () {
  // Elementos recuperados
  const creatingTasks = document.querySelector('#criar-tarefa');
  const clearList = document.querySelector('#apaga-tudo');
  const deleteCompletedItem = document.querySelector('#remover-finalizados');
  const saveList = document.querySelector('#salvar-tarefas');
  const moveUp = document.querySelector('#mover-cima');
  const moveDown = document.querySelector('#mover-baixo');
  const removeItemButton = document.querySelector('#remover-selecionado');

  // Eventos criados
  creatingTasks.addEventListener('click', addingTasks);
  clearList.addEventListener('click', deletingList);
  deleteCompletedItem.addEventListener('click', deletingCompletedItem);
  saveList.addEventListener('click', savingList);
  moveUp.addEventListener('click', movingUp);
  moveDown.addEventListener('click', movingDown);
  removeItemButton.addEventListener('click', removingSelectedItem);

  // Chamando funções
  retrievingList();
};
