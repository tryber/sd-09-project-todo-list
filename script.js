const taskList = document.getElementById('lista-tarefas');

function createTask() {
  const taskName = document.getElementById('texto-tarefa');
  const elementTask = document.createElement('li');
  elementTask.innerText = taskName.value;
  taskList.appendChild(elementTask);
  taskName.value = '';
}

function selectedTask(newSelected) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
    newSelected.target.classList.add('selected');
  } else {
    newSelected.target.classList.add('selected');
  }
}

function completedTask(completed) {
  if (completed.target.classList.contains('completed')) {
    completed.target.classList.remove('completed');
  } else {
    completed.target.classList.add('completed');
  }
}

function eraseAll() {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].remove();
  }
}

function removeCompleted() {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('completed')) {
      tasks[i].remove();
    }
  }
}

function saveTasks() {
}

function moveUp() {
}

function moveDown() {
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

document.getElementById('criar-tarefa').addEventListener('click', createTask);
taskList.addEventListener('click', selectedTask);
taskList.addEventListener('dblclick', completedTask);
document.getElementById('apaga-tudo').addEventListener('click', eraseAll);
document.getElementById('remover-finalizados').addEventListener('click', removeCompleted);
document.getElementById('salvar-tarefas').addEventListener('click', saveTasks);
document.getElementById('mover-cima').addEventListener('click', moveUp);
document.getElementById('mover-baixo').addEventListener('click', moveDown);
document.getElementById('remover-selecionado').addEventListener('click', removeSelected);
