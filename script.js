function addEventsListener() {
  //  Escutador no botão
  const addTaskButton = document.querySelector('#criar-tarefa');
  addTaskButton.addEventListener('click',addTaskOnList);
}

function addTaskOnList() {
  console.log(`Executando função addTaskOnList`)
  const taskText = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  let task = document.createElement('li');
  task.textContent = taskText;
  taskList.appendChild(task);
}

window.onload = addEventsListener();