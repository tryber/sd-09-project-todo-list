function addEventsListener() {
  //  Escutador no botão
  const addTaskButton = document.querySelector('#criar-tarefa');
  addTaskButton.addEventListener('click',addTaskOnList);
  //  Escutador na lista
  const listDiv = document.querySelector('#lista-tarefas');
  listDiv.addEventListener('click',changeBackgroundColor);
  listDiv.addEventListener("dblclick",setCompleted)
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
  const grayList = document.querySelector('.gray');
  if (grayList != undefined) {
    grayList.classList.remove('gray')
  }
  let lista = event.target
  lista.classList.add('gray')
  console.log(lista);
}

//  https://css-tricks.com/snippets/javascript/bind-different-events-to-click-and-double-click/

function setCompleted(event) {
  console.log(`Executando função set completed`)
  let element = event.target
  element.classList.toggle('completed')
}

window.onload = addEventsListener();