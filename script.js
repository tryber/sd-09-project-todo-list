const list = document.querySelector('#lista-tarefas');
const inputField = document.querySelector('#texto-tarefa');

function removeSelectedClass() {
  const taskArray = document.querySelectorAll('.task');
  for (let index = 0; index < taskArray.length; index += 1) {
    taskArray[index].classList.remove('selected');
  }
}

function addItemButton() {
  const clickButton = document.querySelector('#criar-tarefa');
  clickButton.addEventListener('click', function () {
  let textInBox = document.querySelector('#texto-tarefa');
  const listTask = document.querySelector('#lista-tarefas');

  if(textInBox.value.length > 0) {
    const item = document.createElement('li');
    item.innerText = textInBox.value;
    item.className = 'item';
    listTask.appendChild(item);
    textInBox.value = '';
}
});
}
addItemButton();

function paintElementLi () {
  const backgroundColorTask = document.querySelector('#lista-tarefas')
  backgroundColorTask.addEventListener('click', function (event) {
  const backgroundColorTask = document.querySelector('.selected');
  if (backgroundColorTask) {
    backgroundColorTask.classList.remove('selected');
    backgroundColorTask.style.backgroundColor = '';
  }
    event.target.className += ' selected';

  });
};
paintElementLi()

function taskCompleted () {
  const completedItem = document.querySelector('#lista-tarefas');
  completedItem.addEventListener('dblclick', function (event) {
    
    if(event.target.className !== 'completed') {
      event.target.classList.toggle('completed');
      event.target.style.backgroundColor = '';
    }
    
  })
}
taskCompleted();

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

  clickToSelect();
}