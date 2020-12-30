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
taskList.addEventListener('click', function (itemList) {
  selectedItem = document.querySelector('.selected');
  if (selectedItem != null) {
    selectedItem.className = '';
    selectedItem.style.backgroundColor = 'rgb(255, 255, 255)'
  }
  if (itemList.target.className != 'completed') {
    itemList.target.className = 'selected';
    itemList.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

/* Completa tarefa */
taskList.addEventListener('dblclick', function (itemList) {
  itemList.target.style.backgroundColor = 'rgb(255, 255, 255)'
  console.log(itemList.target.className );
  if (itemList.target.className === 'completed') {
    itemList.target.className = '';
    itemList.target.style.textDecoration = 'none';
  }
  else {
    itemList.target.className = 'completed';
    itemList.target.style.textDecoration = 'line-through';
  }
});