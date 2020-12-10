// Adicionar nova tarefa
function createNewTask() {
  const tasksList = document.querySelector('#lista-tarefas');
  const newItem = document.createElement('li');
  const newTask = document.querySelector('#texto-tarefa');
  newItem.setAttribute('class', 'task');
  tasksList.appendChild(newItem).innerText = newTask.value;
  setNewItemProperties(tasksList.childElementCount, newItem);
  newTask.value = '';
}

// Atribuindo propriedades para o novo item
function setNewItemProperties(tasksList, newItem) {
    newItem.setAttribute(`id`, `item${tasksList}`);
    newItem.addEventListener('click', function() {
      selectTask(newItem);
    });
}

// Selecionar uma tarefa da lista
function selectTask(task) {
  task.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

window.onload = function() {
  const buttonNewTask = document.querySelector('#criar-tarefa');
  buttonNewTask.addEventListener('click', createNewTask);
  const tasksList = document.querySelector('#lista-tarefas');
}
