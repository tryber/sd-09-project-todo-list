function addEventsListener() {
  //  Escutador no botão
  const addTaskButton = document.querySelector('#criar-tarefa');
  addTaskButton.addEventListener('click',addTaskOnList);
}

function addTaskOnList() {
  console.log(`Executando função addTaskOnList`)
  const taskText = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  let task = document.createElement('li');
  task.textContent = taskText.value;
  taskList.appendChild(task);
  taskText.value = '';
}

window.onload = addEventsListener();