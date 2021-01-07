const list = document.querySelector('#lista-tarefas');

function removeTask() {
  const selectTask = document.querySelector('.selected');
  if (selectTask) {
    list.removeChild(selectTask);
  }
}

window.onload = function () {
  const removeButton = document.querySelector('#remover-selecionado');

  removeButton.addEventListener('click', selectTask);
}