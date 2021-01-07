const list = document.querySelector('#lista-tarefas');

function removeTask() {
  const selectTask = document.querySelector('.selected');
  if (selectTask) {
    list.removeChild(selectTask);
  }
}

function moveUp() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask && selectedTask.previousElementSibling !== null) {
    selectedTask.parentNode.insertBefore(selectedTask, selectedTask.previousElementSibling);
  }
}

function moveDown() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask && selectedTask.nextSibling !== null) {
    selectedTask.parentNode.insertBefore(selectedTask.nextSibling, selectedTask);
  }
}

window.onload = function () {
  const clearSelect = document.querySelector('#remover-selecionado');
  const moveUpButton = document.querySelector('#mover-cima');
  const moveDownButton = document.querySelector('#mover-baixo');

  moveUpButton.addEventListener('click', moveUp);
  moveDownButton.addEventListener('click', moveDown);
  clearSelect.addEventListener('click', selectTask);
}