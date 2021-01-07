const list = document.querySelector('#lista-tarefas');
const inputField = document.querySelector('#texto-tarefa');

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

function addNewTask() {
  if (inputField.value !== '') {
    const task = document.createElement('li');
    task.innerText = inputField.value;
    task.className = 'task';
    taskList.appendChild(task);
    inputField.value = '';
  } else {
    alert('Error: Digite ao menos 1 caractere.');
  }
}

window.onload = function () {
  const deleteButton = document.querySelector('#remover-selecionado');
  const moveUpButton = document.querySelector('#mover-cima');
  const moveDownButton = document.querySelector('#mover-baixo');
  const addButton = document.querySelector('#criar-tarefa');

  addButton.addEventListener('click', addNewTask);
  moveUpButton.addEventListener('click', moveUp);
  moveDownButton.addEventListener('click', moveDown);
  deleteButton.addEventListener('click', removeSelectedTask);

  clickToSelect();
}