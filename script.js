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
// ???Esta removendo todas as class e não somente a class pedida???
// Item completo efeito letra tachada
function itemComplete(event) {
  if (event.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.toggle('completed');
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

window.onload = function () {
  // Elementos recuperados
  const creatingTasks = document.querySelector('#criar-tarefa');

  // Eventos criados
  creatingTasks.addEventListener('click', addingTasks);
};
