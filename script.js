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

function eraseAll() {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].remove();
  }
}

function removeCompleted() {
  const tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks.className === 'completed') {
      tasks[i].remove();
    }
  }
}

document.getElementById('criar-tarefa').addEventListener('click', createTask);
taskList.addEventListener('click', selectedTask);
document.getElementById('apaga-tudo').addEventListener('click', eraseAll);
document.getElementById('remover-finalizados').addEventListener('click', removeCompleted);
