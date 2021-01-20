function createTask () {
  const taskName = document.getElementById('texto-tarefa');
  const elementTask = document.createElement('p');
  elementTask.innerText = taskName.value;
  document.getElementById('lista-tarefas').appendChild(elementTask);
  taskName.value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', createTask);
