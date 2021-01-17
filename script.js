window.onload = function () {
  // Elementos recuperado
  const creatingTasks = document.querySelector('#criar-tarefa');
  
  // Eventos criados
  creatingTasks.addEventListener('click', addingTasks);
}

// Botão criar tarefas
const textEntry = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
function addingTasks () {
  const item = document.createElement('li');
  item.innerText = textEntry.value;
  list.appendChild(item);
  textEntry.value = '';
}
