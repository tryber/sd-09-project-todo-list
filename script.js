function generateInput() {
  const container = document.getElementById('inputs');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.id = 'texto-tarefa';
  newInput.placeholder = 'Type a new task here.';

  container.appendChild(newInput);
}

function generateOrderedList() {
  const taskContainer = document.getElementById('tasks');
  const newList = document.createElement('ol');
  newList.id = 'lista-tarefas';

  taskContainer.appendChild(newList);
}

window.onload = function () {
  generateOrderedList();
  generateInput();
};
