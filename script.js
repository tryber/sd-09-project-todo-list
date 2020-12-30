/* Adiciona tarefa */
const addButton = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
addButton.addEventListener('click', function () {
  if (textTask.value != '') {
    let addTask = document.createElement('li');
    addTask.innerText = textTask.value;
    taskList.appendChild(addTask);
    textTask.value = '';
  }
});

/* Selecionar tarefa */
const selecTask = document.querySelector('#lista-tarefas');
selecTask.addEventListener('click', function (itemList) {
  selectedItem = document.querySelector('.selected');
  if (selectedItem != null) {
    selectedItem.className = '';
    selectedItem.style.backgroundColor = 'rgb(255, 255, 255)'
  }
  itemList.target.className = 'selected';
  itemList.target.style.backgroundColor = 'rgb(128, 128, 128)';
});