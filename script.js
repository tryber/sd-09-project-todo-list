function addEventsListener() {
  //  Escutador no botão
  const addTaskButton = document.querySelector('#criar-tarefa');
  addTaskButton.addEventListener('click',addTaskOnList);
  //  Escutador na lista
  const listDiv = document.querySelector('#lista-tarefas');
  listDiv.addEventListener('click',changeBackgroundColor)
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

function changeBackgroundColor(event) {
  let lista = event.target
  lista.style.backgroundColor = "rgb(128, 128, 128)";
  console.log(lista);
}

window.onload = addEventsListener();