const list = document.querySelector('#lista-tarefas');
const selectedTask = document.querySelector('.selected');


function removeSelectedClass() {
  const taskArray = document.querySelectorAll('.task');
  for (let index = 0; index < taskArray.length; index += 1) {
    taskArray[index].classList.remove('selected');
  }
}

  function clickToSelect() {
    list.addEventListener('click', function (event) {
      if (event.target.nodeName === 'LI') {
        removeSelectedClass();
        event.target.classList.toggle('selected');
      }
    });
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

  // moveUpButton.addEventListener('click', moveUp);
  // moveDownButton.addEventListener('click', moveDown);
  // clearSelect.addEventListener('click', selectTask);

  clickToSelect();
}