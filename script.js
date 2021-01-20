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
    selected.className = '';
    newSelected.target.className = 'selected';
  } else {
    newSelected.target.className = 'selected';
  }
}

document.getElementById('criar-tarefa').addEventListener('click', createTask);
taskList.addEventListener('click', selectedTask);
